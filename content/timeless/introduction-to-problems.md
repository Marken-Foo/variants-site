+++
title = "Introduction to problems: literacy"
date = 2020-10-03T14:37:06+08:00
lastmod = 2020-10-03T14:37:06+08:00
description = ""

slug = "introduction-to-problems"
variants = ["western"]
categories = []
tags = []
type = ""
+++

## Etiquette ##

### Giving credit ###

This merits an immediate mention. When presenting a chess problem, **always give credit to the composer(s)**. Failing to do so is at best impolite, and at worst downright plagiarism. Please, mention the composer(s), date and source of a problem as far as possible.

Also, provide the stipulation - let the solver know what the goal is! It is also an essential part of the problem.

### Unpublished problems ###

If a composer shares an unpublished problem with you in private, do not repost it elsewhere. Putting up a problem in any sufficiently public domain (including publicly accessible websites, public internet forums or public mailing lists - see [Article 20 of the Codex of Chess Composition](https://www.wfcc.ch/1999-2012/codex/#20)) will count as a publication, rendering it ineligible for composing tourneys or as an original submission to problem magazines. Unpublished problems are still the property of the composer(s), so please respect this.


## How to read ##

This is what a chess problem can look like in a publication or a database (the image was taken from [Die Schwalbe PDB](https://pdb.dieschwalbe.de/search.jsp?expression=PROBID=%27P1038241%27)).

![Sam Loyd's Excelsior](/images/diagrams/excelsior.png)

As you can see, there is a lot of information. Going through each part one by one:

- **"Samuel Loyd"** - the composer(s) of the problem.
- **"610 *New York Albion* 22/09/1860"** - where and when it was published. The format may vary, but generally at least the name of the publication (here it's the *New York Albion* newspaper) and the year of publication (1860) is given.
- **"2. Preis, Pariser Turnier"** - any awards or prizes the problem may have won (here, "2nd Prize" in a "Paris tournament"). It could be awards given out by the newspaper or magazine it was published in, or prize won in a composing tournament it was specifically submitted to.
- **\[The problem diagram\]** - self explanatory! Referred to as "the diagram position" or simply "the diagram" when discussing.
- **"(8+10)"** - the unit count of (white units + black units). A convenient way to verify that the position is correctly set up on a board or computer.
- **"C+""** - if present, indicates that the problem has been verified to be sound by a computer (stands for "Computer check(ed)").
- **"#5"** - the problem stipulation, an essential piece of information for the solver. Here it is a directmate in 5 moves.

When sharing a problem, typically we convey at least the diagram, the stipulation and the composer(s).


## Algebraic notation ##

*If you're already a chessplayer familiar with algebraic chess notation, you just need to know that in problems, the symbol for the knight is **S** instead of **N**.*

To describe pieces and moves, problemists use [algebraic notation](https://en.wikipedia.org/wiki/Algebraic_notation_(chess)). Many publications today use figurine notation, which is mostly language-independent and internationally recognisable. If using pure text, then standard problemist algebraic notation is used. This is almost identical to standard English chess notation (see the [FIDE Handbook](https://handbook.fide.com/), specifically the Laws of Chess), but with **S** as the symbol for the knight (from German *Springer*) instead of **N**, which is reserved for the *Nightrider* fairy piece.

See the table for a comparison of common algebraic notation variants used. A special mention goes to German notation, which the free [Die Schwalbe problem database](https://pdb.dieschwalbe.de/index.jsp) uses.

| Convention   | Pawn | Knight | Bishop | Rook | Queen | King |
|--------------|------|--------|--------|------|-------|------|
| **Problems** | (P)  | S      | B      | R    | Q     | K    |
| **English**  | (P)  | N      | B      | R    | Q     | K    |
| **German**   | (B)  | S      | L      | T    | D     | K    |
| **French**   | (P)  | C      | F      | T    | D     | R    |

For fairy pieces, the choice of symbol is usually the obvious one, corresponding to the first letter of the piece name. In figurine notation, they are typically represented by 90-degree or 180-degree rotations of the most similar standard unit. Particularly well-known fairy pieces include the Nightrider (**N**) and the Grasshopper (**G**).

The symbols ? and ! are also sometimes used in notating solutions. ? indicates *tries* (moves that fail, and are not the solution), while ! indicates the *key* (solution move), or indicates defenses that defeat tries.


## Stipulations ##

If you've played chess before, you may have already encountered directmates and studies, which are closest in nature to the game of chess.

**Directmate (#n)**
: A regular "Mate in n" problem, e.g. "#3" means "mate in 3". By convention, White always moves first and tries to deliver mate by their *n*-th move; Black tries to avoid mate.
: These are usually classified into *twomovers* (#2), *threemovers* (#3) and *moremovers* (#4 or longer).

**Study (+ or =)**
: Usually endgame positions, where White to play has to find a way to win (+) or draw (=).

Also extremely common in the problem world are helpmates, selfmates, and reflexmates, as well as the series- condition. These extend chess beyond the adversarial, White-versus-Black game with alternating moves.

**Helpmate (h#n)**
: Black moves first, and both sides cooperate such that Black is mated, e.g. "h#2" means "helpmate in 2"; both sides make moves black-white-black-white such that White's last move delivers checkmate.
: Note that if the stipulation is "h#1.5" for instance, then the order of moves is white-black-white.
: **Helpstalemates (h=n)** are similar, but both sides cooperate to stalemate Black.

**Selfmate (s#n)**
: White forces Black to checkmate them, while Black tries to avoid delivering mate. By convention, White moves first.

**Reflexmate (r#n)**
: A selfmate, but with the condition that both sides *must* play a mate in 1 if it is available at any point.

**The series- condition**
: The side to move makes *n* legal moves in a row, then the other side makes 1 move to meet the stipulation. For example, a serieshelpmate in 7 (sh#7) has Black play 7 moves in a row, then White makes 1 move to checkmate Black.

You may also encounter other genres of problem. Proof games and retros are major examples of *heterodox problems* without necessarily having fairy conditions or pieces (in contrast to the *orthodox problems*: directmates, helpmates and selfmates.)

**Proof games (PG n)**
: From the regular chess starting position, both sides cooperate to play a legal game of chess that reaches the diagram position in *n* fullmoves. For instance, a "PG 8.0" reaches the diagram position after Black's 8th move; a "PG 5.5" reaches the diagram position after White's 6th move.

**Retrograde analysis problems (varied stipulations)**
: Retro problems are a large class of problems with diverse stipulations, all based on logically deducing information about the position based on solely the diagram. For instance, a retro #2 could involve proving that the diagram position *must* have Black to move instead of White, or that an en passant key is legal because the move leading to the diagram *must have been* the double step of a pawn.

Anything else can generally be subsumed under the category of "fairy problems". This can be due to **fairy pieces** (pieces which move differently from the standard chess units, e.g. the Nightrider), **fairy conditions** (where the rules of the game are changed, e.g. Madrasi, where units attacked by their opposite colour counterparts cannot move), or both.

The publication source of any particular fairy problem will usually include definitions of any fairy pieces or conditions used, e.g. in a summary page at the back of the publication issue. The StrateGems website lets you [look up many fairy pieces and conditions](http://www.strategems.net/sections/fairy_defs.html). Christian Poisson also offers comprehensive definitions of [fairy pieces](http://christian.poisson.free.fr/problemesis/pieces.html), [common fairy conditions](http://christian.poisson.free.fr/problemesis/condus.html), and [not-so-common ones](http://christian.poisson.free.fr/problemesis/condra.html) on his website.

