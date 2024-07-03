const toDo = document.getElementById('toDo');
const toDoList = document.getElementById('toDoList');
const btn = document.getElementById ('btn');

btn.addEventListener('click', addTask);

function addTask () {
    
    let safeValue = toDo.value.trim();
    const toDoListItem = document.createElement('li');
    toDoListItem.innerText = toDo.value;
    toDoList.append(toDoListItem);
    toDo.value = "";
    toDo.focus();
}