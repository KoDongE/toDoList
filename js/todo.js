const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let toDos = [];

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";

    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    };

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);

    saveToDos(toDos);
}

function saveToDos() {
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function paintToDo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.appendChild(button);
    button.innerText = "❌";

    button.addEventListener("click", removeToDo);

    li.appendChild(span);
    span.innerText = newTodoObj.text;

    todoList.appendChild(li);
}

function removeToDo(event) {
    const li = event.target.parentElement;
    
    toDos = toDos.filter((toDo) =>toDo.id !== parseInt(li.id));
    
    console.log(toDos);
    
    saveToDos();
    
    li.remove();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("toDos");

console.log(savedToDos);

if(savedToDos !== null) {
    const parseToDos = JSON.parse(savedToDos);
    console.log(savedToDos); 
    console.log(parseToDos);
    parseToDos.forEach(paintToDo);

    toDos = parseToDos;
}

function sayHello(item) {
    console.log("Index of ", item);
}