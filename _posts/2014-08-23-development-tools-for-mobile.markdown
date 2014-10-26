---
layout: post
title:  "development tools for mobile"
date:   2014-08-23 17:02:16
categories: webdev
---
Recently I've been working on a project where I'm trying to port a web app I made to mobile. First I needed to see how the existing one looks and performs on mobile and then start making the required changes. Because of a couple of reasons I couldn't test the website directly on my phone and I wanted to find a tool that can do this in the browser.

The first thing I did is resizing my browser screen to see how the layout responds. In Chrome, you cannot size your window down lower than 465px, but I found a simple tip that can help. Open you development console (CTRL+ SHIFT + I on Windows) and then press a the second button in the top right corner that says 'Dock to main window'. This should move the console to the right side of your window. Now you can grab the left side of the console and by moving it you are resizing your browser window as well.

The other thing I wanted to look into was the Android device emulator which comes as a part of the [Android SDK](http://developer.android.com/sdk), in order to test other things like performance, touch events etc. The package is quite big so it takes some time to download an install and I must admit that the emulator is incredibly slow and therefore this way of testing the site while developing it proved not the most feasible.

Next tool I tried is called [Genymotion](http://www.genymotion.com/). This is a commercial tool, however, the pricing plan also has a free option that is somehow limited. This was a lot faster than the Android SDK and it worked quite well for my purposes.

Today I found out that all this process I've been through was really silly because Chrome provides the functionality I needed out of the box. There is an option in the Chrome dev tools that I have missed, called 'Emulation'. In order to access it you have to click the 4th button from the right top (left to settings) which says 'show drawer'. This opens another set of options that I haven't had yet time to look into but the one I wanted to mention is 'Emulation'. Here you can very easily select a device (both Android, iPhone, iPad, Kindle...) and it emulates the device right in your browser. You can choose device resolution or choose your own, choose your own device pixel ratio but most importantly you can emulate the touch events, accelerometer and even GPS. This is some amazing functionality and I'd highly recommend you try it out. You can even emulate pinch to zoom by holding SHIFT when clicking and dragging your cursor!

One last thing I wanted to mention is emulating mobile web speed. I haven't had much time to test this myself but the tool that comes highly recommended is [Charles](http://www.charlesproxy.com/). It takes some time to set up but then you can choose a specific internet speed or go for one of the predefined ones. I might get more into detail when I test it out a bit more.