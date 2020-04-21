"use strict";

let makruk_diagram = (function(){
    // CONFIG: Piece image directory path and filenames.
    const imgPath = "/../images/pieces/makruk/";
    let pieceSrcs = {"P" : "wP.svg", "N" : "wN.svg", "S" : "wB.svg",
                     "R" : "wR.svg", "M" : "wQ.svg", "K" : "wK.svg",
                     "M~" : "wF.svg",
                     "p" : "bP.svg", "n" : "bN.svg", "s" : "bB.svg",
                     "r" : "bR.svg", "m" : "bQ.svg", "k" : "bK.svg",
                     "m~" : "bF.svg"};
    // CONFIG: Colour themes for board.
    const BROWN = new Theme("rgb(255, 173, 74)",
                            "rgb(0, 0, 0)",
                            "rgb(255, 166, 88)");
    const DEFAULT_THEME = BROWN;
    const VARIATION_THEME = BROWN;
    // CONFIG: Class name of divs to draw in.
    const containerClass = "diag-makruk-cnv-wrapper";
    
    // list of FEN characters recognised
    const pieceChars = Object.keys(pieceSrcs);
    let pieceImgs = {};
    for (let key of pieceChars) {
        pieceSrcs[key] = imgPath + pieceSrcs[key];
        pieceImgs[key] = new Image();
    }
    let numImgs = pieceChars.length;


    //=== Run the script only if there are diagrams to draw ===
    // Array.from(list) is for Microsoft Edge compatibility
    function generateDiagrams() {
        let diagDivs = Array.from(document.getElementsByClassName(
                                  containerClass));
        if (diagDivs.length > 0) {
            window.addEventListener("load", loadImages(diagDivs));
        }
    }
    
    // CONFIG: main() is called back when images are loaded.
    function main(diagDivs) {
        for (let div of diagDivs) {
            // could optimise later because reflow when calling scrollWidth/Height
            // Size calculation must be before putting the canvas in.
            let cnvSize = Math.min(div.scrollWidth, div.scrollHeight);
            let cnv = document.createElement("canvas");
            let flip = div.dataset.hasOwnProperty("flip");
            div.appendChild(cnv);
            cnv.width = cnvSize;
            cnv.height = cnvSize;
            let theme = (div.dataset.diagType === "variation")
                        ? VARIATION_THEME
                        : DEFAULT_THEME;
            drawDiagram(cnv, div.dataset.fen, flip=flip, theme=theme);
        }
    }

    // =========== Class and function definitions ==============

    function loadImages(diagDivs) {
        return function() {
            /** Loads images used to draw chess position.
            Calls back main() function when all images are successfully loaded.
            **/
            let numImgsLoaded = 0;
            let numImgsError = 0;
            
            for (let key of pieceChars) {
                pieceImgs[key].onload = onloadCallback;
                pieceImgs[key].onerror = onerrorCallback;
                pieceImgs[key].src = pieceSrcs[key];
            }
            function onloadCallback() {
                ++numImgsLoaded;
                if (numImgsLoaded + numImgsError === numImgs) {
                    main(diagDivs);
                }
                return;
            }
            
            function onerrorCallback() {
                ++numImgsError;
                if (numImgsLoaded + numImgsError === numImgs) {
                    console.log("Not all piece images were loaded.");
                }
                return;
            }
            return;
        }
    }
    

    function drawDiagram(canvas, fen, flip=false, theme=DEFAULT_THEME) {
        /** Draws a makruk position (given by the FEN) on the given canvas.
            Board can be flipped to be from black's perspective.
        **/
        // These settings determine the colour and internal sizing of the board.
        const colourBase = theme.base;
        const colourLines = theme.lines;
        const colourBorder = theme.border;
        const boardSize = Math.min(canvas.width, canvas.height);
        const borderSqRatio = 0.5; // border size in terms of square size
        const sqSize = boardSize / (8 + 2 * borderSqRatio);
        const borderSize = borderSqRatio * sqSize;
        
        let fenObj = new Fen(fen);
        let ctx = canvas.getContext("2d");
        
        ctx.fillStyle = colourBorder;
        ctx.fillRect(0, 0, boardSize, boardSize);
        ctx.save();
        ctx.translate(borderSize, borderSize);
        // canvas origin should now be at corner of main 8x8 area
        
        // Fill board colour and draw square borders.
        ctx.fillStyle = colourBase;
        ctx.fillRect(0, 0, sqSize * 8, sqSize * 8);
        ctx.strokeStyle = colourLines;
        ctx.lineWidth = 1.0;
        
        ctx.beginPath();
        for (let i = 0; i <= 8; ++i) {
            ctx.moveTo(sqSize * i, 0);
            ctx.lineTo(sqSize * i, sqSize * 8);
            ctx.moveTo(0, sqSize * i);
            ctx.lineTo(sqSize * 8, sqSize * i);
        }
        ctx.closePath();
        ctx.stroke();
        
        // Add coordinates.
        const sqInnerPad = 0.05;
        const sqFontSize = sqSize / 5;
        
        ctx.font = String(sqFontSize) + "px Calibri";
        for (let i = 0; i < 8; ++i) {
            let rowChar = flip ? i + 1 : 8 - i;
            let colChar = flip ? String.fromCharCode("h".charCodeAt(0) - i)
                               : String.fromCharCode("a".charCodeAt(0) + i);
            ctx.fillStyle = colourLines;
            ctx.fillText(rowChar, sqSize * sqInnerPad,
                         sqSize * (i + 4 * sqInnerPad));
            ctx.fillStyle = colourLines;
            ctx.fillText(colChar, sqSize * (i + sqInnerPad),
                         sqSize * (8 - sqInnerPad));
        }
        
        // Draw pieces.
        let unitArray = fenObj.parseRanks(flip);
        for (let i = 0; i < 8; ++i) {
            for (let pair of unitArray[i]) {
                let pieceImg = pieceImgs[pair[0]];
                ctx.drawImage(pieceImg, sqSize * pair[1], sqSize * i,
                              sqSize, sqSize);
            }
        }
        
        // Draw ornaments (board orientation, side to move).
        const ornSize = borderSize * 0.6 // diameter or width of ornaments
        
        ctx.restore(); // canvas origin should now be at corner of border
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1.0;
        
        // board orientation (white/black side) indicator
        const x_apex = boardSize - borderSize * 0.5;
        const y_apex = boardSize - borderSize - 4 * sqSize;
        
        ctx.fillStyle = (flip) ? "black" : "white";
        ctx.beginPath(); //up-pointing triangle (middle-right of board, lower)
        ctx.moveTo(x_apex, y_apex);
        ctx.lineTo(x_apex - ornSize/2, y_apex + ornSize * Math.sqrt(3)/2);
        ctx.lineTo(x_apex + ornSize/2, y_apex + ornSize * Math.sqrt(3)/2);
        ctx.fill();
        ctx.closePath();
        
        ctx.fillStyle = (flip) ? "white" : "black";
        ctx.beginPath(); //down-pointing triangle (middle-right of board, upper)
        ctx.moveTo(x_apex, y_apex);
        ctx.lineTo(x_apex - ornSize/2, y_apex - ornSize * Math.sqrt(3)/2);
        ctx.lineTo(x_apex + ornSize/2, y_apex - ornSize * Math.sqrt(3)/2);
        ctx.fill();
        ctx.closePath();

        // side-to-move indicator (bottom right of board)
        ctx.beginPath();
        ctx.arc(boardSize - borderSize * 0.5, boardSize - borderSize - ornSize,
                ornSize/2, 0, Math.PI*2);
        ctx.stroke();
        if (fenObj.sideToMove === "w") {
            ctx.fillStyle = "white";
            ctx.fill();
        } else if (fenObj.sideToMove === "b") {
            ctx.fillStyle = "black";
            ctx.fill();
        }
        ctx.closePath();
        
        return;
    }
    

    function Fen(fen) {
        /** FEN object. Abstract representation of a FEN string.
        **/
        // TODO: FEN validation
        let fenParts = fen.split(" ");
        this.ranks = fenParts[0].split("/");
        this.sideToMove = (typeof fenParts[1] !== "undefined")
                           ? fenParts[1]
                           : null;
        this.castling = (typeof fenParts[2] !== "undefined")
                         ? fenParts[2].split("")
                         : null;
        this.ep = (typeof fenParts[3] !== "undefined") ? fenParts[3] : null;
        this.halfmove = (typeof fenParts[4] !== "undefined")
                         ? fenParts[4]
                         : null;
        this.fullmove = (typeof fenParts[5] !== "undefined")
                         ? fenParts[5]
                         : null;
    }

    // Fen.parseRank and Fen.parseRanks generate arrays to help draw pieces
    Fen.prototype.parseRank = function(fenRank, flip=false) {
         /** Takes one rank of a FEN position string.
         Returns array of [pieceChar, fileNum] pairs, from 0th to 7th file.
         Rank is mirrored when called with flip=true.
         **/
        let rankUnits = [];
        let fileNum = 0;
        for (let i = 0; i < fenRank.length; ++i) {
            let symbol = fenRank[i];
            if (fenRank[i] === "M" || fenRank[i] === "m") {
                if (fenRank[i+1] === "~") {
                    symbol = fenRank[i] + "~";
                    ++i; // ate two characters
                }
                rankUnits.push([symbol, fileNum]);
                ++fileNum;
                continue;
            }
            if (pieceChars.includes(symbol)) {
                rankUnits.push([symbol, fileNum]);
                ++fileNum;
            } else {
                fileNum += Number(symbol); // ASSUMES FEN IS VALID
            }
        }
        if (flip) { rankUnits.reverse(); }
        return rankUnits;
    };

    Fen.prototype.parseRanks = function(flip = false) {
        /** Calls Fen.prototype.parseRank() on each rank of the FEN.
        Returns array of rankUnits, from 7th to 0th rank (standard FEN order).
        Output rank order is reversed if called with flip=true.
        **/
        let units = [];
        for (let fenRank of this.ranks) {
            units.push(Fen.prototype.parseRank(fenRank, flip));
        }
        if (flip) { units.reverse(); }
        return units;
    }

    // Colour theme parameters for drawing board. Light/dark squares and border.
    function Theme(base, lines, border) {
        this.base = base;
        this.lines = lines;
        this.border = border;
    }
    
    
    return {
        generateDiagrams: generateDiagrams
    };
})();

makruk_diagram.generateDiagrams();
