# LEARNING JAVASCRIPT

Let's learn some JS. I've been working with Python, CSS, HTML for long enough, JS is what's between me and a full stach web application.

This document will act as my "learning journal" for JS. 

To follow along here, you will need a basic understanding of HTML and CSS. However one of my goals is to have all files fully commented.

## VSCode Setup

Plugins:
 - Live Server
 - Thunder Client
 - Prettier

## Project - 1: Hello World

Let's play around with the DOM and see if we can get a simple "Hello World" with some dynamic behavior.

### Plan:
 - Step 1 : Create a .js file and link it to the HTML.
 - Step 2 : Call a function when the page loads that changes the color of the text.
 - Step 3 : Call a function on hover.

### Execution:

First I am going to setup a basic file structure.

Key:
 - \> is a directory
 - \- is a file 

```
> Hello World
  > assets
  > scripts
    - main.js
  > styles
    - main.css
  - index.html
```
Once I get those files setup, I can start working on the HTML and CSS.

For project 1, I am going with something, VERY, simple.

Seek the files to understand more so what's going on under the hood. But for now, here is a picture of the site before JS:

![Picture of the site before JS](./progress%20assests/project1-before-js.png)

Some simple HTML and a centered div with a heading.

Now let's add some JavaScript!

Note that I have linked the JavaScript file to the HTML file.
```html
<script defer src="scripts/main.js"></script> <!-- Link the JavaScript file -->
```

The script is loaded in the header but defered to load after the page has loaded. This is so I can access the DOM inside my script. 

If you don't defer, the only DOM avaliable is the stuff that was loaded before the script was loaded.

Step 1, check!

Let's go to step 2, change the color of the text on page load.

After adding the function to the script we can see that the color has changed:

![Picture of the site after JS](./progress%20assests/project1-after-js-on-load.png)

We also get some console output:

```js
"Turning text purple"
```

now let's add a function to change the color on hover.

Using the `mouseover` and `mouseout` events, you can execute code when each is triggered.

I have `mouseover` change the color to purple and `mouseout` change it back to black.

## Project - 2: Counter