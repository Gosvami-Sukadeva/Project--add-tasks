const toDoList = [];


const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('input');
const search = document.getElementById('search');


const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    console.log(searchText);
    let tasksSearch = toDoList;
    tasksSearch = tasksSearch.filter(li => li.textContent.toLowerCase().includes(searchText));
    console.log(tasksSearch);
    ul.textContent = "";
    tasksSearch.forEach(li => ul.appendChild(li))
}



search.addEventListener('input', searchTask);

const removeTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    console.log(toDoList);
    taskNumber.textContent = listItems.length;
    renderList();
}



const addTask = (e) => {
    e.preventDefault()
    const titleTask = input.value;
    if (titleTask === "") return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask + " <button>Usuń</button>";
    toDoList.push(task);
    renderList();

    ul.appendChild(task);
    input.value = "";
    // const liItems = document.querySelectorAll('li.task').length;
    taskNumber.textContent = listItems.length;
    task.querySelector('button').addEventListener('click', removeTask);
}

const renderList = () => {
    ul.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement)
    })
}
form.addEventListener('submit', addTask)