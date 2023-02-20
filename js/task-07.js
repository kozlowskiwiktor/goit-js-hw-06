const range = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

range.addEventListener('input', () => {
    const rangevalue = range.value;
    text.style.fontSize = rangevalue + 'px';

// lub text.style.fontSize = range.value + 'px';
});