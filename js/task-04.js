let counterValue = 0;

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

let display = document.getElementById("value");

const minusButton = () => {
    counterValue--;
    display.textContent = counterValue;
    console.log('-')
};

const plusButton = () => {
    counterValue++;
    display.textContent = counterValue;
     console.log('+')
};

decrementButton.addEventListener('click', minusButton);
incrementButton.addEventListener('click', plusButton);



