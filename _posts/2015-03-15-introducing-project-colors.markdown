---
layout: post
title:  "introducing project colors"
date:   2015-03-15 19:35:35
categories: games
---
For the past few days I've been working on a small game idea I've got. I wanted to make a tiny casual game that would be incredibly simple to play yet still quite challenging. I also wanted it to work well on phones because I could use the opportunity to learn how to create mobile apps out of html5 apps using [Phonegap](http://phonegap.com/).

I tried to think of something that could combine the amazing minimalistic design from Dots with the challenge and difficulty provided by Super Hexagon.
Something that would have really simple controls and UI but would require very quick reactions in order for a player to succeed.

I came up with the idea for Colors (working title), a simple game where you need to match a color displayed on the screen by tapping one of 4 possible options. The game is going to have a time limit for every single round and player is awarded points for every successful round. I then expect the players to quickly tap the colours in sequence, such as if you were playing Guitar Hero or Dance Dance Revolution. There are 3 colours - red, green and blue. I've attached the earliest sketches below:

![Colors game sketch]({{ site.url }}/assets/colors_sketch1.jpg)
![another Colors game sketch]({{ site.url }}/assets/colors_sketch2.jpg)

As you can see, I was trying to find out what the ideal number of options might be, and 4 seemed a lot better mainly for mobile players using their thumbs.

You can play the [very first working prototype of the game](http://jakubslaby.net/colors/) or you can view the project's [github page](https://github.com/jakubsl/colors).

There is still a lot of work to do though. One of the problems I noticed is that when a player chooses the correct color but the color which replaces it is exactly the same, to the player it seems like nothing changed and the controls just didn't react to his input. That is why I've now added feedback to successful attempt where a circle 'explodes' into small bubbles before being replaced by a new one. Now you have to wait until the animation finishes(0.5sec) before you can see the new designated colour which significantly slows down the game flow. I'll have to find a way to play the animation without making the player wait.

I also still need to add the timer and find a way to include it on the page without breaking the UI (I sort of like how simple and minimalistic it looks atm), think of a way to increase difficulty over time ('gradually decreasing time for a player to make a choice') and add the audio to the game (positive/negative feedback and background music).

Also thinking a bit further ahead, it might be cool to create an extra hard mode, where apart from matching colour, player also has to match shape (triangle,square,circle).

I'll make more updates when the development progresses, until then you can watch the [github page](https://github.com/jakubsl/colors) and even suggest improvements there if you have any particular in mind.