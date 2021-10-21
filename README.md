# KA-background-extension


Recently, Khan Academy removed background images for profiles. A lot of users, including me, didn't like that. I wrote some simple JS for the developer's console to fix the problem, but I didn't want to have to type it out every time I loaded a profile page. A little while after, I developed a slightly more complete bookmarklet.  It was a lot better than the aforementioned developer's console code, but it wasn't anything special and still needed to be manually activated. A few users suggested an extension, even though I had never created one before. I went ahead and did some research to find which browser I should make the extension for and how I would go about doing it. Chrome is, by far, the most popular browser out there, with Safari in a distant second place. Chrome extensions are actually really simple, so I made my bookmarklet work as an extension first off. I was pretty hyped that it worked, but I wanted to make it even better if I was going to share it with other users.


I've spent a good few hours in total on this (mainly because of bugs, like any good programmer lol). I added support for saving custom images with the Chrome storage API. I know it's not the best, but please remember this is my first ever extension and it does work well for what it needs to do. I hope to continue updating as I learn more, adding local image files to be used and more options for the background image child elements styling to better suit each user.


Download as a ZIP and install to your Chrome extensions by turning on developer mode to provide an easy fix to get back your old KA background or choose a new one! Click the extension icon to use whatever short link from the web you want. Local image file support coming soon!


I also hope to make this or a similar extension available for Safari and the minor browsers. The minor browsers will be pretty easy since they generally use the same extension format as Chrome, but Safari has proven to be difficult. It may take a while, but as a Mac user myself, I have plenty of motivation to add a Safari extension as soon as possible.


Version history:
 
 0.1.0 - Basic functionality, adding back the image
 
 0.2.0 - Adding CSS to style the child elements of the background
 
 0.3.0 - Various updates
 
 0.4.0 - Custom images (links only)
 
 0.5.0 - Updated CSS to better accomodate mouse events
