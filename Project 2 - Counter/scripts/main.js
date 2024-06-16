const title = document.getElementById('title'); // Get title Element

// step 1
// uncomment to change text on page load.
// title.innerHTML = "Hello World"; // Change the HTML wrapped in the tag to "Hello World"


// step 2
// let timeToWait = 1000
// let loopCount = 1

// queue the title change 1000ms in the future, execute on pageload
// setTimeout(function() { title.innerHTML = loopCount; }, (timeToWait * loopCount));

// step 3

let timeToWait = 1000; // 1 sec

for (let loopCount = 0; loopCount < 3; loopCount++) { // repeat 3 times
    console.log(loopCount); // Log which itteration is being executed
    setTimeout(function() { title.innerHTML = loopCount }, (timeToWait * loopCount));
};