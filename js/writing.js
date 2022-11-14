import { Data, Ending } from "./data.js";

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

/* 카테고리 선택 시 */
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

/* 세부 항목 선택 시 => 서론 및 본론을 띄워야 함*/
let content_list = document.querySelector("#content-list");
function clickDetail(event) {
    let parent = event.target.parentNode.previousSibling.innerText;
    let name = event.target.innerText;
    console.log(parent, name);

    removeAllChild(content_list); //서론 및 본론 리스트가 존재하는 경우 삭제

    Data.forEach((item) => {
        if (item.category == parent) {
            item.details.forEach((detail) => {
                if (detail.name == name) {
                    console.log(detail.type);
                    console.log(detail.title);
                    console.log(detail.content.length);

                    /* 서론 및 본론 리스트 추가 */
                    makeBoxAndAppend(detail.content,content_list,"content-list-box");
                }
            });
        }
    });

    showEndingList();
}

function removeAllChild(tag){ // tag의 자식 태그 삭제
    while(tag.hasChildNodes()){
        tag.removeChild(tag.firstChild);
    }
}

/* 마무리 및 끝인사 세팅*/
function showEndingList(){
    let ending_list=document.querySelector("#ending-list");
    if(ending_list.childElementCount==0){
        makeBoxAndAppend(Ending,ending_list,"ending-list-box");
    }
}

/* content와 ending에 태그 만들어서 내용 추가해주는 함수 */
function makeBoxAndAppend(list, place,className){
    list.forEach((text)=>{
        let box = document.createElement("div"); //텍스트를 감싸는 흰박스
        let insideBox = document.createElement("div"); //텍스트
        insideBox.innerText = text;
        box.appendChild(insideBox);
        box.classList.add(className); //흰 박스에 클래스 추가
        place.appendChild(box);
    })
}

/* title 제출 시 */
const titleForm=document.querySelector("#title-form");
const subject=document.querySelector("#subject");
const classNum=document.querySelector("#classNum");
function onTitleSubmit(event){
    event.preventDefault();
    console.log(subject.value,classNum.value);
    localStorage.setItem("subject",subject.value);
    localStorage.setItem("classNum",classNum.value);
}
titleForm.addEventListener("submit",onTitleSubmit);

/* greeting 제출 시 */
const greetingForm=document.querySelector("#greeting-form");
const prof=document.querySelector("#prof");
const myName=document.querySelector("#myName");
const major=document.querySelector("#major");
const studentNum=document.querySelector("#studentNum");
function onGreetingSubmit(event){
    event.preventDefault();
    console.log(prof.value,myName.value,major.value,studentNum.value)
    localStorage.setItem("prof",prof.value);
    localStorage.setItem("myName",myName.value);
    localStorage.setItem("major",major.value);
    localStorage.setItem("studentNum",studentNum.value);
}
greetingForm.addEventListener("submit",onGreetingSubmit);