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

#### Step 1:

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

#### Step 2:

Let's go to step 2, change the color of the text on page load.

After adding the function to the script we can see that the color has changed:

![Picture of the site after JS](./progress%20assests/project1-after-js-on-load.png)

We also get some console output:

```js
"Turning text purple"
```

#### Step 3:

now let's add a function to change the color on hover.

Using the `mouseover` and `mouseout` events, you can execute code when each is triggered.

I have `mouseover` change the color to purple and `mouseout` change it back to black.

## Project - 2: Counter

### Plan:
 - Change the text in the title
 - Change that text again 1 second later
 - Change that text again 2 seconds later
 - Change text on loop, every second, for 10 seconds

### Execution:

#### Step 1:

First I am gonna copy over the same basic layout and code as before.

I did change a few things like the title and the text in the body.

Now let's change the text in the title on page load.

The current text is `Counter`. Let's change that to `Hello World`.

Using `.innerHTML` we can change the text in the title.

#### Step 2:

Now that that's working, let's queue a change to happen after 1 second.

We can do that by using `setTimeout`.

It accepts two arguements, first is a function, second is the number of milliseconds to wait.

Here is the code I used:
```js
setTimeout(function() { title.innerHTML = "Hello World"; }, 1000);
```

I make use of the JS feature which allows you to make an anonymous function on the fly. This is called a "lambda" function.

#### Step 3:

Now let's add two steps, change at 1 second, and then again at 2 seconds.

We can do that by using `setTimeout` again.

Looping this, we can repeat it 2 times.

#### Step 4:

All we need to change from the code in step 3 is the number of times to itterate on the loop!