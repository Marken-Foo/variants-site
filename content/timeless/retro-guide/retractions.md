+++
title = "Retractions"
date = 2020-05-29T15:23:56+08:00
lastmod = 2020-05-29T15:23:56+08:00
description = ""

slug = "retractions"
variants = ["western"]
categories = []
tags = ["retro"]
type = ""

draft = true
+++

Last time, we looked at a classic problem which illustrated the blind spots one might have when thinking just two halfmoves into the past. How then are we ever to consider problems where we need to go 20 or 30 moves back? The key idea is to not think in terms of the *moves played* to reach the position, but rather *retract moves* from the diagram backwards, following a few simple rules.

## What are retractions? ##

Since it is far easier to think about "playing" a game of chess forward than it is to reason about going backwards, the goal here is for us to "play a chess variant" which *just so happens* to exactly reflect the process of "going back in time" from a position, so to speak.

**Retractions** are the "moves" of this game. The units "move" as follows:

- All *pieces* (non-pawns, i.e. kings, queens, rooks, bishops, knights) retract in the same way they move in normal chess.
- Pawns, instead of moving one square forward, retract one square backwards. They cannot retract past their usual starting squares (so no pawns on the 1st or 8th ranks).
- Pawns can also retract two squares backwards only if they reach their usual starting square. (The reverse of the two-square move.)

As you would expect, the reverse of normal chess moves. By a happy coincidence, most piece moves in chess look the same forwards and backwards -- all the more convenient for us to learn!

What about captures and checks, you may ask? (And if you're alert, you might ask about en passant, castling and promotions.) Let's deal with captures first and then checks. We'll leave the special moves for a later part, as they can be tricky to visualise at first.

Retracting a capture, also called making an **uncapture**, can be thought of this way. When making a retraction (sometimes called an *unmove* as a parallel), you may optionally put an enemy unit back on the board on the square the retracting piece vacated.

Pawns are special; a simple pawn retraction (orthogonally) cannot be an uncapture. Instead, pawns uncapture by retracting diagonally backwards, and an enemy unit must be placed on the square it just left.

Let's see an example. The position shown is without kings, since we haven't talked about check yet.

{{ fen-diag variant="western" caption="Practice retractions." fen="1n6/3p4/8/7P/P5p1/7B/8/R7" }}

If the position is white to move, (*black* to retract!), the possible retractions are: **Na6\*b8**, **Nc6\*b8** (can be moves or uncaptures of anything but a pawn), **g5-g4** (must be a move) and **f5x~g4** (must be an uncapture, of any unit).

Note that black cannot retract the pawn on d7 (it's already *at home*, on its starting square), nor can black retract Nd7\*b8 nor h5xg4 (there are already units on those squares!)

If the position is black to move (*white* to retract!), the possible retractions are: **a3-a4**, **a2-a4** (must be moves), **b3x~a4** (must be an uncapture, of any unit) **Ra3\*a1**, **Ra2\*a1** (moves/uncaptures), **Rb1\*a1**, **Rc1\*a1**, **Rd1\*a1**, **Re1\*a1**, **Rf1\*a1**, **Rg1\*a1**, **Rh1\*a1** (moves/uncaptures of anything but a pawn), **Bf1\*h3** (move/uncapture, not a pawn), **Bg2\*h3** (move/uncapture), **h4-h5** (move).

Note that white cannot retract Bg4xh3 because there's already a pawn on g4. This is different from a regular chess move.

Sometimes, not all uncaptures are possible. The choice of unit placed back on the board depends on certain retro concerns like checks or missing units, which we'll see later on. Sometimes, uncaptures are even impossible due to these concerns. Uncaptures are critical to retro reasoning.

## Checks and retractions ##

What does a forward checking sequence look like when we retract? In any given position (no moving, just the position of pieces on the board), a check looks exactly the same as it does in orthodox chess. So the definition of "in check" is the same as usual. Then the easiest way to think about retractions and check is:

**If the other king is in check, you must immediately retract to remove the check. You may not leave the other king in check after any retraction. You may retract and put yourself into check if the other side can then retract to remove the check.**
