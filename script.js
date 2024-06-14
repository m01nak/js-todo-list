const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === '') {
        alert("Task cannot be empty!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";

    persistState();
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        persistState();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        persistState();
    }
}, false);

inputBox.addEventListener("keyup", function(e) {
    if(e.key === "Enter") {
        addTask();
    }
 }, false);


function persistState() {
    localStorage.setItem("moinak-todo-data", listContainer.innerHTML);
}

function loadState() {
    listContainer.innerHTML = localStorage.getItem("moinak-todo-data");
}

loadState();