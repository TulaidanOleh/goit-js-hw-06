const numOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numOfCategories.length}`);

const nameCategories = document.querySelectorAll("h2");
const numOfElementsCategories = document.querySelectorAll("ul");
nameCategories.forEach((element) => {
  console.log(`Category: ${element.textContent}`);
});
