const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listUl = document.getElementById("ingredients");
const arr = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const newItemLi = document.createElement("li");
  newItemLi.textContent = ingredients[i];
  newItemLi.classList.add("item");
  arr.push(newItemLi);
}
listUl.append(...arr);

// console.log(listUl);
