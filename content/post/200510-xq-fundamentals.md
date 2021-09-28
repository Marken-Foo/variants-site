+++
title = "Introduction to evaluating xiangqi positions"
date = 2020-05-10T17:30:24+08:00
lastmod = 2020-05-10T17:30:24+08:00
description = "The three factors you need to evaluate a xiangqi position."

slug = ""
variants = ["xiangqi"]
categories = []
tags = ["translation"]
type = ""
series = []
+++

This is a translation of [an article about positional evaluation in xiangqi](https://zhuanlan.zhihu.com/p/56819444). It is an insightful article, pointing out several elements that may be unfamiliar for players coming from western chess or other backgrounds. Everything that follows is translated from the original Mandarin by me; {{< remark >}}notes and comments are formatted as such{{< /remark >}}.

----

## A fundamental skill in xiangqi, to think that I still didn't know it after so many years... ##

Text source: WeChat public group of "象棋微学堂" (WeChess)

"Evaluating a position" in xiangqi refers to a player's overall analysis and judgement of the deployment and positioning of the forces of both sides, and from this gaining a sense of the future developments in the game. This kind of conclusion should be an objective reflection of the actual position, and forms the basis of the player's decisions on the strategy and tactics that follow. Evaluating a position should be one of the fundamental skills every xiangqi player has, and in the author's opinion is the most important of those skills.

In what follows, we will systematise the process of evaluating a position by combining analyses of the three aspects of material, positioning, and speed.

## Material ##

### Material value ###
One of the important factors in determining which side holds the advantage is **material value**. Each piece type has different characteristics and different powers, and therefore its value is also different. Every piece's value can be divided into its **basic value** and its **situational value**.

A piece's basic value is how much it is worth when considered in isolation, and this is determined from knowledge accumulated from a large amount of practice.

Generally speaking, a pawn that has not crossed the river has the weakest strength, and plays a role like that of a "sentry": watching and protecting the riverbank, impeding the invasions of enemy forces whilst its own attacking power is feeble, controlling just a single point on the board. So the pawn's basic value is the smallest among the piece types, and set to be worth 1 point.

A pawn that has crossed the river has much more power than one that has not. It is able to threaten enemy pieces, controlling up to three points on the board. As such, its basic value is 2 points (every point on the board it controls is 0.5 points, plus a "never-say-die" spirit ^_^). However, when a pawn reaches the last rank, the xiangqi proverb "an old pawn does nothing" {{< remark >}}(NB: 老兵无功){{< /remark >}} refers to the *situational value* of the pawn reducing its overall value.

Advisors and elephants have the primary role of ensuring the king's safety, each controlling up to four points on the board, and it is generally considered that the trade of a crossed pawn for an advisor or an elephant is an even trade. Because elephants have a larger movement range than advisors, they can perform in more roles than advisors (e.g. preventing enemy pawns from crossing the river), and so an advisor has a basic value of 2 points, and an elephant 2.5 points.

The horse can control up to 8 points on the board, sometimes earning the moniker "octopus knight" {{< remark >}}(NB: original idiom 八面威风, literally "imposing from 8 sides", meaning awe-inspiring){{< /remark >}}, so the horse's basic value is 4 points. In contrast to the horse, the cannon has long-range combat ability; when there is a cannon mount, it can control up to eight points on the board in one direction, and in addition it can move a distance of up to nine points. Its basic value is therefore slightly higher, placed at 4.5 points. As the xiangqi proverb goes, "A lone cannon sounds not" {{< remark >}}(NB: 孤炮难鸣){{< /remark >}}, so when there is a dearth of cannon mounts it cannot display its full worth. This is also one justification for another xiangqi proverb, "In the endgame, bring home the cannons" {{< remark >}}(NB: 残局炮归家){{< /remark >}} (use your advisors and elephants as cannon mounts for your cannons to exert their value.)

In the opening phase, both sides have most of their pieces, the horses have few open paths, and the cannons have a strong long-distance suppressing effect, so the cannons are then worth more than the horses. In the endgame, as both sides are reduced to fewer and fewer pieces, the horses continually get more free reign, and it is said that "in the endgame, horses beat cannons" {{< remark >}}(NB: 残局马胜炮){{< /remark >}}. In addition, yet another proverb says "Without the elephant pair, fear cannons; without the advisor pair, fear horses" {{< remark >}}(NB: 缺象怕炮，缺士怕马){{< /remark >}}; the status of your opponent's forces will also affect the *situational value* of your horses and cannons.

The chariot has a stronger raw power than all the above pieces, controlling up to seventeen points along orthogonal lines and possessing high mobility. Generally speaking, the trade of a chariot for a horse and a cannon is close to an even trade, being slightly worse for the side losing the chariot; the chariot's base value can be said to be 9 points.

### Material composition ###

Aside from piece values, the other key factor in material consideration is **material composition**. In situations where the material values of both sides are the same, differences in the piece types composing each army will also result in a difference in the positional evaluation.

For instance, in a situation where both sides have the full complement of advisors and elephants {{< remark >}}(NB: 仕相全, literally "all advisors and elephants", perhaps usefully translated to "full guard"?){{< /remark >}}, the combination of chariot + horse + cannon is slightly better than two chariots, and better than chariot + two horses or even chariot + two cannons. In the diagram, Red can use the tactic 1. R4+6 to trade a chariot for horse and cannon, resulting in the advantageous position of chariot + horse + cannon versus two chariots.

{{< fen-diag variant="xiangqi" caption="Red gets a better material composition after 1. R4+6! A5+6 2. R7+1." fen="4kabr1/4a4/2n1bc3/p1R1p1p1p/9/2P5P/P3P1r2/2N1C4/5R3/2BAKAB2 w - - 0 1" >}}


## Positioning ##

When evaluating at the positioning of the pieces, we shall need to consider **piece mobility** and **piece coordination**.

### Piece mobility ###

In the middlegame, both sides will usually have developed all their pieces, and it becomes of importance whether their paths are unobstructed, and whether they can occupy key points and control key lines. From the following diagram, 1. R2+7 compels Black to raise an advisor and block their own chariot's path. Red can claim an advantage based on their chariot being more mobile than black's.

{{< fen-diag variant="xiangqi" caption="Red has a more mobile chariot after 1. R2+7! A4+5 or A6+5." fen="3akab2/8r/2n1bc2n/p1p1p3p/6p2/P1P5P/4P1P2/2C1BC2N/9/3AKABR1 w - - 0 1" >}}

What consitutes a mobile horse can be seen from the following example. 1. E7+9 is a common pattern seen in the endgame to restrict a horse, the advisors and elephants working to shrink its domain of activity to virtually nothing.

{{< fen-diag variant="xiangqi" caption="Black's horse is severely restricted after 1. E7+9!." fen="4kab2/4a4/4bc3/p3p1p2/2p2N2p/P5P2/2P1P3P/3AB2C1/n3A4/2B1K4 w - - 0 1" >}}

And to give the reader something to think about regarding cannon mobility: in the following position, Red is to move, and how can they claim advantage by improving the red cannon's mobility?

{{< fen-diag variant="xiangqi" caption="Red to play; how to get an advantage with the cannon?" fen="1rb1kab1r/n3a4/4c1n2/p1p1p1p1p/9/1C4P2/P1P1P3P/2N1B1N2/4A4/1RB1KA1R1 w - - 0 1" >}}

{{< remark >}}The solution is not given in the original text. 1. C8+4! smothers the black chariot and horse, while simultaneously preventing ...R9+1 to activate the other chariot, resulting in a clear advantage from black being severely cramped.{{< /remark >}}

### Piece coordination ###

In judging piece positioning, aside from the individual mobility of each piece, even more important is to see if the pieces are well-coordinated overall, forming an effective fighting shape. Consider the following diagram where both sides have identical pieces and material compositions. Although Black has sunk a cannon to Red's back rank with a chariot and horse in the back lines, it will be difficult to bring them together and create synergy; consequently Red stands better here.

{{< fen-diag variant="xiangqi" caption="Black has poor piece coordination." fen="1rbak4/4a4/4b1n2/p1p1p1p1p/9/2P3P2/P3P3P/4B1N2/4A4/c1BAK1CR1 w - - 0 1" >}}

The broad aspects described above are referred to as material and position. A game of xiangqi is all about the shifting balance of material and position. Together they determine how well both sides are doing. We typically classify one side's evaluation as *winning*, *at an advantage*, *having the initiative*, *equal*, *yielding the initiative*, *at a disadvantage*, or *losing*, thus describing a human evaluation of the position. A game of xiangqi begins from a symmetric position, Red having the advantage of the first move, and they could increase their intiative (Black yielding the initiative), gather an advantage (Black at a disadvantage), and if they can successfully transition from an advantageous position to a winning endgame, they have a *winning advantage* (Black *losing*); if Red makes some error of moves in the process, then Black will have a made a reversal advantage, and Red is said to have lost the initial advantage.

## Speed ##

While evaluating a position, besides material and positional concerns, one more consideration must be accounted for, that of speed: **weaknesses in formation or in king safety** can result in a side holding both material and positional advantages losing in the end!

The classic examples of a formation weakness are the vexed horse, cannon and chariot {{< remark >}}(NB: 窝心马，窝心炮，窝心车){{< /remark >}}. As the diagram below shows, Black has all advisors and elephants, has one more chariot than Red, yet because of the red cannon in the centre, not only can they not exert their strength, they also deprive the black king of any mobility, who can only watch as Red's 1-file pawn makes the long journey to form the iron-bolt checkmate pattern.

{{< fen-diag variant="xiangqi" caption="Black is up material, but completely lost." fen="2bakab2/4r4/4c4/p3C4/2p3p2/P8/2P3P1P/9/4A4/3A1K3 w - - 0 1" >}}

The classic example of king safety appears even more often. In the diagram below, Black's chariot, two cannons and horse have already created a massive attack on Red's left flank, but Red's chariot and pawn pose a severe threat to the black king, and in the race to checkmate Red will be faster than Black.

{{< fen-diag variant="xiangqi" caption="Red's mating attack is faster than Black's." fen="9/9/4k4/5P3/p1p6/5R3/P3P4/4B4/2cnA4/rcBAK4 w - - 0 1" >}}

And the below diagram is a famous classic composition, where formation weakness and king safety both create danger. You can play it out for yourself.

{{< fen-diag variant="xiangqi" caption="Hint: Red wins." fen="5abn1/3rnkcc1/4ba3/6P2/9/9/5p3/3p2p2/8r/2p2K2p w - - 0 1" >}}


Summing up the above, in most cases material and position together determine which side has the advantage, but in some situations speed is the overriding factor. Seek a win when better, seek a draw when worse, and aim for the best when it comes down to speed; this is the key to middlegame evaluation and strategy.

If there are any errors or omissions, please send your feedback and corrections.

----

[Originally published on Zhihu, 2019-02-15](https://zhuanlan.zhihu.com/p/56819444)