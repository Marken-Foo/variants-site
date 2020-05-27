+++
title = "Your first retro problem"
date = 2020-05-27T15:22:21+08:00
lastmod = 2020-05-27T15:22:21+08:00
description = ""

slug = "a-simple-problem"
variants = ["western"]
categories = []
tags = ["retro"]
type = ""
+++

Welcome to the second part of the retrograde analysis tutorial series. In this part, I will present a simple and classic problem that you can try to solve. Even if you don't find it simple at first, don't worry! Hopefully it will seem much easier to you by the middle of the whole tutorial series.

Although the explanations might get a little wordy, this is because I will try to explain all the important points in great detail to help the beginner. Solution pages in problem magazines tend to be very concise and omit "elementary" details, making it hard for the beginner to follow. I am aiming for opposite approach here. The ideas themselves are not difficult and easily picked up; however, it will take quite a few words to explain them for the first time, so please bear with me.

## A simple problem ##

Let's start this tutorial with a simple problem.

{{< fen-diag variant="western" caption="White to move. What was Black's last move?" provenance="Raymond Smullyan 1979" fen="k1K5/8/8/8/8/8/7P/6B1 w" >}}

You're told that white is to move in the position, and you have to work out black's last move. Feel free to stop here for a while and try finding the answer yourself.

Although I said it's simple, this problem can be challenging for those not used to retros. There are a few common mistakes most new solvers make when solving this. Read the below hints before checking the solution, since a few common mistakes are caught there!

First of all, it's clear that *black's last move must have been with the black king*. (It can't be with a black piece that got captured, since black made the move leading to the diagram. Convince yourself of this.)

*Where did the black king come from?* From b7 or b8? That would have been a position with the two kings adjacent to each other, which is illegal! So the black king didn't come from those squares. So that leaves the square a7. So you might be tempted to say "The black king went from a7 to a8," and leave it at that.

If you noticed the bishop on g1 would check the king on a7, good! It's not illegal in general for the black king to have come from a square when it was in check (please convince yourself of this). However, we should always ensure that the position was legal. How did white give check with the bishop on g1?

...It is perfectly normal to be confused here. White couldn't have moved the bishop to give the check, not from h2 (the white pawn is already there), and not from along the a7-f2 diagonal (where it would have been giving check to black's king with white to move). It's also not a promotion, as the white bishop is indeed on g1 and there is no silly trick like an upside-down board here. So... is the problem actually impossible?

I assure you there is a solution. Please convince yourself once again that the arguments we made above are correct! Yes, the black king came from a7, but *go back to the problem diagram anyway* (black king on a8) and think again. If you need a final hint, here you go: the black king indeed *went* from a7 to a8, but did it simply move from a7 to a8?

### Solution ###

**I will now reveal the solution.** All the above reasoning is correct, but we overlooked something. "The black king went from a7 to a8," yes, but there can be two kinds of moves, non-captures and captures! So the black king *captured* something on a8. Does that help solve our impossible bishop check? Going through the possibilities of what it could have captured: not a pawn (pawn on the 8th?), not a bishop, rook nor queen (they don't help solve the bishop check)... a knight? Yes! That gives white the last move of Nb6\*a8+, a discovered check from the bishop on g1! (This last knight move could have been a simple move or a capture of something; we can't tell which.)

The solution is thus: Black's last move was *Ka7xNa8*.

{{< fen-diag variant="western" diag-type="variation" caption="Possible position two moves ago; play to reach the problem diagram is 1. Na8 Kxa8. There can also be a black queen, bishop or knight on a8." fen="2K5/k7/1N6/8/8/8/7P/6B1 w" >}}

### Learning points ###

In the process of solving this problem, we've already touched upon a few important points.

**Legal moves and positions**. The concept of "legality" lies at the heart of all retro problems. A move is *legal* if it follows the rules of chess. A position is *legal* if there is a way to reach it from the normal chess starting position via legal moves. Almost all positions you will ever see outside retros are easily shown to be legal or illegal (e.g. having the white and black kings adjacent to each other is clearly illegal). Retro problems however deal with positions which are difficult to demonstrate to be legal or illegal, especially once we consider side-to-move, castling rights and en passant rights in the mix (that's for later, though).

**Move notation.** A completely-described move should indicate if it was a capture or not, and if so, which type of piece was captured. As seen in the above problem, saying "The last move was Ka8" is too vague, and even specifying "a7 to a8" is insufficient. The solution to the problem can only be **Ka7xNa8**, specifying the piece moved (king, K), the start and end squares (a7, a8), that it was a capture (x), and the piece captured (knight, N). This is also sometimes written as **Ka7xa8N**. For a move without capture, we would write **Ka7-a8**. For a move that could be either a capture or non-capture we write **Ka7\*a8**. Finally, for a capture of an unknown unit, we write **Ka7xa8~**.

**Checks.** You might have encountered difficulties while reasoning about the checks in the above problem, especially if you think in this manner: "the position before was like that, then black played this. So before *that* white played something, but black was in check before that... or was it after that?" It's quite easy to get lost when thinking in terms of side-to-move and playing moves *forward* while going *backwards* in time, so to speak.

**Wow is it *hard* to think in reverse.** Indeed it is! That's why in retrograde analysis it is absolutely essential to learn the skill of ***retracting*** moves, rather than playing moves forwards. It will make finding the solution to the problem above almost trivial. Think of it as learning a new set of rules for a different game that happens to look very much like regular chess. This will be our topic for next time.


{{< series-nav home="introduction-to-retros.md" prev="introduction-to-retros.md" >}}