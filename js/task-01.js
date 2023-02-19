const quantityCategories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${quantityCategories.length}`);

quantityCategories.forEach(quantityCategories => {
    const header = quantityCategories.querySelector('h2');
    const headerText = header.textContent;
    console.log(`Category: ${headerText}`)
    const element = quantityCategories.querySelectorAll('li');
    console.log(`Elements: ${element.length}`)
});
