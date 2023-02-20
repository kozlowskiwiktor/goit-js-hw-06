function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor())
const changeColor = document.querySelector('.change-color');
const nameColor = document.querySelector('.color')

changeColor.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor()
  nameColor.textContent = getRandomHexColor();
})