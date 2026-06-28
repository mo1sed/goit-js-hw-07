const items = document.querySelectorAll('.item');

const categoriesList = document.querySelector('#categories');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  const subItems = item.querySelectorAll('li');
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${subItems.length}`);
});
