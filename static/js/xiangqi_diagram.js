"use strict";

let xiangqi_diagram = (function(){
    // === CONFIGURATION OPTIONS ===
    
    // Piece image directory path, and FEN symbol-filename pairs.
    const imgPath = "/../images/pieces/xiangqi/red_black/";
    let pieceSrcs = {"P" : "rP.svg", "N" : "rN.svg", "B" : "rE.svg",
                     "R" : "rR.svg", "A" : "rA.svg", "K" : "rK.svg",
                     "C" : "rC.svg",
                     "p" : "bP.svg", "n" : "bN.svg", "b" : "bE.svg",
                     "r" : "bR.svg", "a" : "bA.svg", "k" : "bK.svg",
                     "c" : "bC.svg"};
    const isBoardImg = 1; // set to 0 for canvas board (not implemented yet), 1 if using image
    const boardSrc = "/../images/boards/xiangqiWood.png";
    // Colour themes for board.
    const WOOD = new Theme("rgb(255, 173, 74)",
                            "rgb(0, 0, 0)",
                            "rgb(120, 67, 32)");
    const DEFAULT_THEME = WOOD;
    const VARIATION_THEME = WOOD;
    // Class name of <div>s to draw in.
    const containerClass = "diag-xiangqi-cnv-wrapper";
    
    // === END OF CONFIGURATION OPTIONS ===
    
    // Module variables
    const pieceChars = Object.keys(pieceSrcs);
    let pieceImgs = {};
    for (let key of pieceChars) {
        pieceSrcs[key] = imgPath + pieceSrcs[key];
        pieceImgs[key] = new Image();
    }
    let boardImg = new Image();
    
    //=== Run the script only if there are diagrams to draw ===
    // Array.from(list) is for Microsoft Edge compatibility
    function generateDiagrams() {
        let diagDivs = Array.from(document.getElementsByClassName(
                                  containerClass));
        if (diagDivs.length > 0) {
            window.addEventListener("load", loadImages(diagDivs));
        }
    }
    
    function loadImages(diagDivs) {
        return function() {
            /** Loads images used to draw chess position.
            Calls back main() function when all images are successfully loaded.
            **/
            let numImgs = pieceChars.length + isBoardImg;
            let numImgsLoaded = 0;
            let numImgsError = 0;
            
            boardImg.onload = onloadCallback;
            boardImg.src = boardSrc;
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
    
    // main() is called back when images are loaded.
    function main(diagDivs) {
        for (let div of diagDivs) {
            // could optimise later because reflow when calling scrollWidth/Height
            // Size calculation must be before putting the canvas in.
            let scrollWidth = div.scrollWidth;
            let scrollHeight = div.scrollHeight;
            let cnvSize = 0;
            // dimensions based on 9x10 "square" xiangqi board
            if (scrollWidth / 9 < scrollHeight / 10) {
                cnvSize = scrollWidth / 9;
            } else {
                cnvSize = scrollHeight / 10
            }
            let cnv = document.createElement("canvas");
            let flip = div.dataset.hasOwnProperty("flip");
            div.appendChild(cnv);
            cnv.width = cnvSize * 9;
            cnv.height = cnvSize * 10;
            let theme = (div.dataset.diagType === "variation")
                        ? VARIATION_THEME
                        : DEFAULT_THEME;
            drawDiagram(cnv, div.dataset.fen, flip=flip, theme=theme);
        }
    }
    
    function drawDiagram(canvas, fen, flip=false, theme=DEFAULT_THEME) {
        /** Draws a xiangqi position (given by the FEN) on the given canvas.
            Board can be flipped to be from black's perspective.
        **/
        // TODO: do the board coordinates jiu-yi, 1-9
        // These settings determine the colour and internal sizing of the board.
        const colourBase = theme.base;
        const colourLines = theme.lines;
        const colourBorder = theme.border;
        const boardWidth = canvas.width;
        const boardHeight = canvas.height;
        const borderSqRatio = 0.5; // border size in terms of square size
        const sqSize = boardWidth / (9 + 2 * borderSqRatio);
        const borderSize = borderSqRatio * sqSize;
        
        let fenObj = new Fen(fen);
        let ctx = canvas.getContext("2d");
        
        ctx.fillStyle = colourBorder;
        ctx.fillRect(0, 0, boardWidth, boardHeight);
        ctx.save();
        ctx.translate(borderSize, borderSize);
        // canvas origin should now be at corner of main 8x8 area
        
        // Draw board from image.
        ctx.drawImage(boardImg, 0, 0, sqSize * 9, sqSize * 10)
        
        // Draw pieces.
        let unitArray = fenObj.parseRanks(flip);
        for (let i = 0; i < unitArray.length; ++i) {
            for (let pair of unitArray[i]) {
                let pieceImg = pieceImgs[pair[0]];
                ctx.drawImage(pieceImg, sqSize * pair[1], sqSize * i,
                              sqSize, sqSize);
            }
        }
        
        // Draw ornaments (board orientation, side to move).
        ctx.restore(); // canvas origin should now be at corner of border
        
        const ornSize = borderSize * 0.6 // diameter or width of ornaments
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1.0;
        
        // board orientation (white/black side) indicator
        const x_apex = boardWidth - borderSize * 0.5;
        const y_apex = boardHeight - borderSize - 5 * sqSize;
        
        ctx.fillStyle = (flip) ? "black" : "red";
        ctx.beginPath(); //up-pointing triangle (middle-right of board, lower)
        ctx.moveTo(x_apex, y_apex);
        ctx.lineTo(x_apex - ornSize/2, y_apex + ornSize * Math.sqrt(3)/2);
        ctx.lineTo(x_apex + ornSize/2, y_apex + ornSize * Math.sqrt(3)/2);
        ctx.fill();
        ctx.closePath();
        
        ctx.fillStyle = (flip) ? "red" : "black";
        ctx.beginPath(); //down-pointing triangle (middle-right of board, upper)
        ctx.moveTo(x_apex, y_apex);
        ctx.lineTo(x_apex - ornSize/2, y_apex - ornSize * Math.sqrt(3)/2);
        ctx.lineTo(x_apex + ornSize/2, y_apex - ornSize * Math.sqrt(3)/2);
        ctx.fill();
        ctx.closePath();

        // side-to-move indicator (bottom right of board)
        ctx.beginPath();
        ctx.arc(boardWidth - borderSize * 0.5, boardHeight - borderSize - ornSize,
                ornSize/2, 0, Math.PI*2);
        ctx.stroke();
        if (fenObj.sideToMove === "w") {
            ctx.fillStyle = "red";
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

xiangqi_diagram.generateDiagrams();