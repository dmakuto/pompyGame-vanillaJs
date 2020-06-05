// DOM elements
const rotateLeftButton = document.getElementById('rotate-left-button');
const rotateRightButton = document.getElementById('rotate-right-button');
const pompyBorder = document.getElementById('pompy-border');
const pomperForm = document.getElementById('pomper-form');

// global variables
let rotation = 0;

// event handlers
function togglePompy() {
    const pompyT = document.getElementById('toggle-pompy');
    toggleVisibility(pompyT);
}

function rotatePompy(event) {
    const pompyR = document.getElementById('small-pompy');
    rotate(pompyR, event);
}

function addPomp(event) {
    event.preventDefault();
    const pomp = pomperForm.pomp.value;
    const newPompLi = document.createElement('li');
    const newPompAvatar = document.createElement('div');
    newPompAvatar.className = "avatar";
    const newPompText = document.createElement('span');
    newPompText.innerText = pomp;
    const pomps = document.getElementById('pomps').getElementsByTagName('ul')[0];
    const newerPompLi = pomps.appendChild(newPompLi);
    newerPompLi.appendChild(newPompAvatar);
    newerPompLi.appendChild(newPompText);
    pomperForm.pomp.value = "";
}


// helpers
// given a DOM element, change it's visibilty style property from hidden to visible
function toggleVisibility(element) {
    if (element.style.visibility === 'hidden') {
        element.style.visibility = 'visible'
    } else {
        element.style.visibility = 'hidden'
    }
}

// given a DOM element and a direction, rotate the element that direction
function rotate(element, event) {
    if (event.target.id === 'rotate-left-button') {
        rotation = rotation - 15;
    } else {
        rotation = rotation + 15;
    }
    element.style.transform = 'rotate(' + rotation + 'deg)';
} 

// add event handlers when mouse events are triggered
pompyBorder.onmouseenter = togglePompy;
pompyBorder.onmouseleave = togglePompy;
rotateLeftButton.onclick = rotatePompy;
rotateRightButton.onclick = rotatePompy;
pomperForm.onsubmit = addPomp;