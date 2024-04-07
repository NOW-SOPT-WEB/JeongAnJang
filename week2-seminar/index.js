const fruitList = document.querySelector(".fruit__list");
const alertBtn = document.querySelector(".count");

function addList() {
  fruitList.innerHTML += `<li>mango</li>`;
}

function addClassList() {
  const banana = fruitList.children[2];

  banana.classList.add("blue");
}

function deleteRedList() {
  const redColorFruit = document.querySelectorAll(".red");
  console.log(redColorFruit);
  redColorFruit.forEach((item) => item.remove());
}

alertBtn.addEventListener("click", () => {
  alert(`현재 과일은 ${fruitList.children.length}개입니다`);
});

addList();
addClassList();
deleteRedList();
