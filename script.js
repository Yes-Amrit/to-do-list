const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("lis-con");
const buttonSound = document.getElementById("task-done-sound");

function addTask(){
    if(inputBox.value === ''){
        alert("You must add task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
inputBox.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTask(); 
    }
});

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        if(e.target.classList.contains("checked")){
            buttonSound.play();
        }
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();