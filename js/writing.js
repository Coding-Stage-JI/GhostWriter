import { Data, Ending } from "./data.js";

/* 데이터 불러와서 카테고리 생성 */
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
    event.target.nextElementSibling.childNodes.forEach((item) =>{
        item.classList.remove("hidden")
        item.classList.remove("detailsChoosen")
    });

    /* localStorage에 카테고리 저장 */
    localStorage.setItem("category",event.target.innerText);
}

/* 세부 항목 선택 시 => 서론 및 본론을 띄워야 함*/
let content_list = document.querySelector("#content-list");
function clickDetail(event) {
    event.target.parentNode.childNodes.forEach((item)=>{
        item.classList.remove("detailsChoosen")
    })
    event.target.classList.add("detailsChoosen");

    let parent = event.target.parentNode.previousSibling.innerText;
    let name = event.target.innerText;
    
    /* localStorage에 세부항목 저장 */
    localStorage.setItem("detailName",name);

    /* 서론 및 본론 리스트가 존재하는 경우 삭제하고 추가해야함 */
    removeAllChild(content_list);
    Data.forEach((item) => {
        if (item.category == parent) {
            item.details.forEach((detail) => {
                if (detail.name == name) {
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
        box.addEventListener("click",clickExample);
        place.appendChild(box);
    })
}

function clickExample(event){
    let parent=event.target.parentNode.className;
    let text=event.target.innerText;
    if(parent=="content-list-box"){
        localStorage.setItem("content",text);
        const textContent=document.querySelector("#textContent");
        textContent.value=text.replace("SUBJECT",`${localStorage.getItem("subject")}(${localStorage.getItem("classNum")})`);
    }else if(parent=="ending-list-box"){
        localStorage.setItem("ending",text);
        const textEnding=document.querySelector("#textEnding");
        textEnding.value=`${text}

${localStorage.getItem("myName")} 올림`;
    }
}

/* title 제출 시 */
const titleForm=document.querySelector("#title-form");
const titleItem=titleForm.querySelectorAll("input");
function onTitleSubmit(event){
    event.preventDefault();
    const subject=titleItem[0].value;
    const classNum=titleItem[1].value;

    localStorage.setItem("subject",subject);
    localStorage.setItem("classNum",classNum);

    const textTitle=document.querySelector("#textTitle");
    Data.forEach((item)=>{
        if(item.category==localStorage.getItem("category")){
            item.details.forEach((detail)=>{
                if(detail.name==localStorage.getItem("detailName")){
                    let text=detail.title;
                    textTitle.value=text.replace("SUBJECT",`${subject}(${classNum})`);

                    const textContent=document.querySelector("#textContent");
                    if(textContent.value){
                        textContent.value=localStorage.getItem("content").replace("SUBJECT",`${subject}(${classNum})`);
                    }
                }
            })
        }
    })
    
    
}
titleForm.addEventListener("submit",onTitleSubmit);

/* greeting 제출 시 */
const greetingForm=document.querySelector("#greeting-form");
const greetingItem=greetingForm.querySelectorAll("input");
function onGreetingSubmit(event){
    event.preventDefault();
    const prof=greetingItem[0].value;
    const myName=greetingItem[1].value;
    const major=greetingItem[2].value;
    const studentNum=greetingItem[3].value;

    localStorage.setItem("prof",prof);
    localStorage.setItem("myName",myName);
    localStorage.setItem("major",major);
    localStorage.setItem("studentNum",studentNum);

    const textGreeting=document.querySelector("#textGreeting");
    let text=`안녕하세요 ${prof} 교수님.
${localStorage.getItem("subject")}(${localStorage.getItem("classNum")}) 과목을 수강하고 있는 ${major} ${studentNum} ${myName}입니다.`
    textGreeting.value=text;

    const textEnding=document.querySelector("#textEnding");
    if(textEnding.value){
        textEnding.value=`${localStorage.getItem("ending")}

${localStorage.getItem("myName")} 올림`;
    }
}
greetingForm.addEventListener("submit",onGreetingSubmit);


/* 오른쪽 파트 */
const textPart=document.querySelector("#textPart");
const previewPart=document.querySelector("#previewPart");
const text=document.querySelector("#text");
const preview=document.querySelector("#preview");

textPart.addEventListener("click",clickPart);
previewPart.addEventListener("click",clickPart);
function clickPart(event){
    if(event.target.id=="textPart"){
        textPart.classList.add("tab")
        previewPart.classList.remove("tab");
        text.classList.remove("hidden");
        preview.classList.add("hidden");
    }else if(event.target.id=="previewPart"){
        textPart.classList.remove("tab");
        previewPart.classList.add("tab");
        text.classList.add("hidden");
        preview.classList.remove("hidden");

        setEmailContent();
    }
}

function setEmailContent(){
    const title=document.querySelector("#textTitle").value;
    const greeting=document.querySelector("#textGreeting").value;
    const content=document.querySelector("#textContent").value;
    const ending=document.querySelector("#textEnding").value;

    const previeBackground=document.querySelector("#previewBackground");
    let text=`${title}\n\n\n\n${greeting}\n\n${content}\n\n${ending}`;
    previeBackground.innerText=text;
}