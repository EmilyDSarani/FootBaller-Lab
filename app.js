// import functions and grab DOM elements
const MonteupButton = document.querySelector('#mUp');
const MontedownButton = document.querySelector('#mDown');
const Montecounter = document.querySelector('#mCounter');


// initialize state
let counterM = 0;

// set event listeners 
MonteupButton.addEventListener('click', () => {

    // - the variable goes UP by one
    counterM = counterM + 7;
    // - display the new value to the user (inject it into the div)
    Montecounter.textContent = counterM;
});

MontedownButton.addEventListener('click', () => {

    // - the variable goes UP by one
    counterM = counterM - 7;
    // - display the new value to the user (inject it into the div)
    Montecounter.textContent = counterM;
});

const CapupButton = document.querySelector('#cUp');
const CapdownButton = document.querySelector('#cDown');
const Capcounter = document.querySelector('#cCounter');

let counterC = 0;

CapupButton.addEventListener('click', () => {

    counterC = counterC + 7;
    Capcounter.textContent = counterC;
});

CapdownButton.addEventListener('click', () => {

    counterC = counterC - 7;
    Capcounter.textContent = counterC;
});