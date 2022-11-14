import { Data } from "./data.js";

let category = document.querySelector("#category");
Data.forEach((item) => {
  /*카테고리 */
  let li = document.createElement("li");
  li.innerText = item.category;
  li.classList.add("category");
  li.addEventListener("click", clickCategory);
  category.appendChild(li);

  /* 카테고리 안의 detail*/
  let ul = document.createElement("ul");
  item.details.forEach((detail) => {
    let insideLi = document.createElement("li");
    insideLi.innerText = detail.name;
    insideLi.classList.add("details");
    insideLi.classList.add("hidden");
    insideLi.addEventListener("click", clickDetail);
    ul.appendChild(insideLi);
  });
  category.appendChild(ul);
});

function clickCategory(event) {
  /*css 수정 */
  category.childNodes.forEach((item) => item.classList.remove("choosen"));
  event.target.classList.add("choosen");

  /* js 하위 요소 추가 */
  category.childNodes.forEach((item) => {
    if (!item.classList.contains("category")) {
      item.childNodes.forEach((i) => i.classList.add("hidden"));
    }
  });
  event.target.nextElementSibling.childNodes.forEach((item) =>
    item.classList.remove("hidden")
  );
}

function clickDetail(event) {
  let parent = event.target.parentNode.previousSibling.innerText;
  let name = event.target.innerText;
  console.log(parent, name);
  Data.forEach((item) => {
    if (item.category == parent) {
      item.details.forEach((detail) => {
        if (detail.name == name) {
          console.log(detail.type);
          console.log(detail.title);
          console.log(detail.content);
        }
      });
    }
  });
}
