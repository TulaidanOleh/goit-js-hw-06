const numOfCategoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${numOfCategoriesEl.length}`);
console.log("");
numOfCategoriesEl.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.innerText}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
  console.log("");
});
