const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listOfIngredients = [];

for (const ingredient of ingredients) {
  const newItem = document.createElement('li');
  newItem.textContent = ingredient;
  newItem.classList.add('item');
  listOfIngredients.push(newItem);
}

const list = document.querySelector('#ingredients');
list.after(...listOfIngredients);
