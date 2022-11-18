const basic=document.querySelector("#basic");
const score=document.querySelector("#score");
const attendance=document.querySelector("#attendance");

const basicSec=document.querySelector("#basicSec");
const scoreSec=document.querySelector("#scoreSec");
const attendanceSec=document.querySelector("#attendanceSec");

basic.addEventListener("click",clickHeader);
score.addEventListener("click",clickHeader);
attendance.addEventListener("click",clickHeader);
function clickHeader(event){
    basicSec.classList.add("hidden");
    scoreSec.classList.add("hidden");
    attendanceSec.classList.add("hidden");

    if(event.target.innerText=="기본형식"){
        basicSec.classList.remove("hidden");
    }else if(event.target.innerText=="성적문의"){
        scoreSec.classList.remove("hidden");
    }else if(event.target.innerText="출결문의"){
        attendanceSec.classList.remove("hidden");
    }
}