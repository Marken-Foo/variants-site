+++
title = "Introduction to retros"
date = 2020-04-28T17:12:10+08:00
lastmod = 2020-10-21T22:50:29+08:00
description = ""

slug = "introduction-to-retros"
variants = ["western"]
categories = []
tags = ["retro"]
type = ""
+++

## What are retros? ##

Behold a simple chess position.

{{< fen-diag variant="western" caption="Mate?" provenance="Marken Foo 2014" fen="1B6/Np6/pk1p4/nPp5/pRnKb3/1pP1r3/2PP4/8" >}}

White is in check, but is it mate? A little reflection will lead you to answer "Aha! If white can take dxc6 en passant then it's not mate, otherwise it is. But you need to tell me if ...c7-c5 is the last move."

Well, what if I told you that *you could deduce that by yourself, simply based on the position?*

Such is a *retrograde analysis problem*. The goal could be anything stipulated by the composer; the method to getting the answer will involve logical reasoning, armed with only[^1] the rules of chess, and the knowledge that the position must have arisen from a legal game of chess (however silly the moves are).

If you're reading this page you're probably already curious about retros, but if you're not then here are a few more to show what crazy things one might be able to prove:

{{< fen-diag variant="western" caption="Last 10 single moves?" provenance="Molnár Árpád 1996, Sakkélet 1996/2-3" fen="2b4n/1ppppp2/1p2N1p1/8/7N/3RPPPB/2RRPQ1P/3K1rnk" >}}

You can deduce the last 10 single moves (5 times of black move-white move) leading to the diagram, including the identity of captured pieces (if any).

{{< fen-diag variant="western" caption="Colour the pieces; last 11 single moves?" provenance="Andrei Kornilov 1995, dedicated to Dr. Karl Fabel, Die Schwalbe, issue 154, 06/1995" fen="3BN2B/PPPRKPPB/3PRPPQ/4P1P1/5P2/1P3R1K/P1PP1NR1/N5NQ" >}}

Again, you can deduce the last 11 single moves, *after you figure out which units are white's and which are black's!*

{{< fen-diag variant="western" caption="Draw." provenance="Thomas Volet 1983, dedicated to Michel Caillaud and Nikita Plaksin; 1st Prize Rex Multiplex 1983" fen="n4K2/b1pprppp/1p2p3/2p5/N1P3P1/BkP1P3/1P2PPP1/3N1BR1" >}}

You can *prove* that this is a draw by the 50-move rule! In other words, you can definitively show that at least the last 50 white and 50 black moves were not captures nor pawn moves.


## OK, how do I solve these retros then? ##

Solving retros is all about logical reasoning. It's a skill that can be learnt, but isn't easily explained in just a few paragraphs. Writing full solutions for each retro would take many words to fully lay out, even with the background knowledge in place -- but after getting a little experience solving, we never really need that level of detail.

For now, there is an excellent [introductory article by Nikolai Beluhov](https://www.chessproblem.net/viewtopic.php?t=429), who is himself an outstanding composer of retros. Through many thoroughly explained examples and exercises, you can discover and acquire the skills needed to solve retros yourself.

On this site, I will likewise attempt to give an introduction to this art, and eventually prepare you to understand the solutions to the problems presented above.


[^1]: Actually, we need some conventions to deal with en passant and castling: these are stated in detail in [the Codex for Chess Composition](https://www.wfcc.ch/1999-2012/codex/), and can be slightly oversimplified to "en passant is illegal unless it can be proven otherwise" and "castling is legal unless it can be proven otherwise."


{{< series-nav home="introduction-to-retros.md" next="your-first-retro.md" >}}

