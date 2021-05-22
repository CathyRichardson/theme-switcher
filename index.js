let count  = 0;
let countDisplay = document.querySelector('.count');


function incrementCount () {
    // count++
    countDisplay.innerText = ++count;
    console.log(count)
}

function decrementCount () {
    count--
    countDisplay.innerText = count;
    console.log(count)
}

function resetCount () {
    count = 0;
    // countDisplay.innerText = count;
    countDisplay.innerHTML = `<mark> ${count} </mark>`;
    console.log(count)
}

function switchTheme(theme){
    document.querySelector('body').className = theme;
    document.querySelector('main').className = theme;

    const buttons = document.querySelectorAll('button');
    console.log(buttons)

    buttons.forEach(button => button.className = theme)
}

let incrementButton = document.getElementById("increment-button")
incrementButton.addEventListener('click', incrementCount);

let decrementButton = document.getElementById("decrement-button")
decrementButton.addEventListener('click', decrementCount);

let resetButton = document.getElementById("reset-button")
resetButton.addEventListener('click', resetCount);

document.getElementById('instructions').innerText = "Choose a theme"