const categories = document.querySelectorAll('#categories .item');
const categoriesAmount = categories.length;

console.log(`Number of categories: ${categoriesAmount}`);


categories.forEach(category => {
    const title = category.querySelector('h2');
    const list = category.querySelector('ul');
    const items = list.querySelectorAll('li');


    console.log(`Category: ${title.textContent}`)
    console.log(`Elements: ${items.length}`)
});