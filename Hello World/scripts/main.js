const title = document.getElementById('title'); // Get Title

function changeColor(color) {
    console.log("Turning text purple"); // Log for debug
    title.style.color = color; // set colour
};

// Uncomment below to execute on page load.
// ChangeColor('purple')

title.addEventListener('mouseover', function() { changeColor('purple') }); // Adds a listener to execute `changeColor` on hover.
title.addEventListener('mouseout', function() { changeColor('black') }); // Adds a listener to execute `changeColor` when hovering stops
