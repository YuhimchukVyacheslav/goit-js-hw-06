const allCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${allCategories.length}`);

const categoriesArray = [...allCategories]
  .map(
    (categories) => `Category: ${categories.querySelector("h2").textContent}
Elements: ${categories.querySelectorAll("ul li").length}`
  )
  .join("\n");
console.log(categoriesArray);
