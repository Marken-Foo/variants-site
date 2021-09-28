+++
title = "G. Wilts 2010: First move of wK?"
author = "Andrew Buchanan"
date = 2020-06-08T16:53:23+08:00
lastmod = 2020-06-08T16:53:23+08:00
description = "A chess retro problem composed by Gerd Wilts and presented by problemist Andrew Buchanan, who walks us through the solution step by step."

slug = "wilts-first-move-wK"
variants = ["western"]
categories = []
tags = ["retro", "guest"]
type = ""
series = []
+++

{{< remark >}}This is a guest post by Andrew Buchanan, a chess problemist who primarily composes retros, and in particular is the pioneer of the subgenre of Dead Reckoning problems. Take a look at some of his work on [his site](http://anselan.com/chess.html). Here he will present a fascinating retro problem by Gerd Wilts and its solution. Enjoy!{{< /remark >}}

{{< fen-diag variant="western" caption="(14+10) What was the first move of the white king?" provenance="Gerd Wilts 2010, Die Schwalbe 244 08/2010 p. 14573" fen="6N1/4p2b/6pr/3P1p1k/5PRb/6pR/1PPPPPPq/2B1QK1n" >}}

This is one of my favourite retros, so I want to post my full solution.

I usually begin solving a retro by counting the pieces.

White is missing just two: KB that died "at home" and S that was captured on the g-file by bPh. 

Black is missing six: RSPPPP. Five of these were captured by pawns, and we for the moment we don't know where the sixth unit went. Since Black made no pawn captures (except for hxg) the Black b, c & d pawns were all captured by wPa. wPh captured two officers. bPa must have promoted, but what happened to it later is unclear.

The next stage is to look for cages. This is a set of pieces which are all locked against one another, and it can be hard to see how the pieces reached the position. The way I do it is to specify a subset of the pieces and ask which could have been the *last* one to move.

Here, consider all the pieces on the g & h files, together with bPe2 and wPf4. Most pieces have no possible last move at all to reach their current squares.

- wSg8 could not have come from f6, because it would have been checking the bK illegally.
- bPg6 could not have come from g7, because it would have blocked the home square of bBh4. This can't be promoted, because a bishop couldn't leave a1.
- bK can't come from g5, because wRg4 has no place to have moved from.
- bBh4 can't have just moved there, because there is no White piece to have been captured there, so wRh3 was delivering check, but this check is impossible: wR could not have moved there, and there is no discovery.
- bQ could not have moved from g1 as it would have been delivering impossible check.

A good cage is like a locked-room mystery: how could it come about? The weak point is the bQ. If wQ was on d1, and wK was on e1, and some other piece occupied f1, then bQ could retract to g1, and then wRh3 could retract to h2.

What does that buy us? Well wR might have captured a piece on h3 to give check, or another piece on h3 might have shielded bK from wR, allowing bBh4 to be extracted, and then the knot is undone.

We are aiming for a critical position in which most of the cage pieces are in place, except wQ, wK, bQ and wR are shifted along, and two pieces occupy f1 & h4.

Let's complete the survey by looking at the other pieces we haven't examined: wPd5 potentially offers White two tempi (and then Black some tempi consequent to those uncaptures), while bPf4 has nothing to with the cage, and offers Black two tempi.

The two pieces on f1 & h4 cannot both be Black, because in the critical position, wPf4 has already captured two officers, and there is at most one left. The only available White unit is Bf1, as wS is already captured on the g-file. This is a big step forward. The piece on h3 can only be Black, and only an S could reach that square. The critical position is therefore very much like the one diagrammed below, with the only uncertainty being the location of the two tempo pieces wPd5 & bPf4.

{{< fen-diag variant="western" caption="Schema for the critical position." fen="6N1/4p2b/6pr/3P1p1k/5PRb/6pn/1PPPPPPR/2BQKBqn w" >}}

The critical position can unwind with the retractions: **1. Bf6-h4 \[*some white move*\] 2. Kh4-h5 Rg5-g4+ 3. B~-f6 Nf6-g8** etc and now both sides have loose pieces, so the cage can unravel easily. But note that we did spend one white tempo for this. And White's first move now must be another tempo. So bS cannot be captured by wPa. Therefore it must be bP captured there. Without loss of generality we can put bPf7, and see if we really need those Black tempi (hint: expect so!) So we can assume that the critical position is this: 

{{< fen-diag variant="western" caption="The actual critical position." fen="6N1/4pp1b/6pr/3p3k/2P2PRb/6pn/1PPPPPPR/2BQKBqn w" >}}

Let's move forward from the critical position. So many of the pieces are frozen, it's not hard. Also, only the bS can capture wBf1 (if bQ did it, wK would have to capture it). **1. cxd5 Sg5 2. Rh3 e.g. Se4 3. Rh2** (We have used the second White pawn tempo, so must use the newly accessible and renewable wR tempi instead) **Sd6 4. Rh3 Sc4 5. Rh2 Sd3 6. Rh3 Sxf1**.

Now what? Well we've used both White pawn tempi, and as soon as bQ moves to h2, the era of free White rook tempi is over. And White's first move must block h2 anyway, so it's time to spend some Black tempi: **7. Rh2 f6 8. Rh3 Qh2 8. Kxf1 f5 9. Qe1**.

The key point of the problem is that there is insufficient time for bS to wander away from f1, to allow wK to visit f1 without capture the first time, and then bS could come back to be captured there. White would need two more tempi to achieve this. So if wPd5 was on d6, the problem would still be sound. However the retro play wouldn't be so tight. It would equally require two White tempi if bS aims to be captured on d6: it's extricating bS which is expensive.