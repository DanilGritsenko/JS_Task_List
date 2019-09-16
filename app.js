//Define UI elements

const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task')
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');

loadEventListener();

function loadEventListener(){
    // Add task
    form.addEventListener('submit', addTask);
    // Remove Task
    taskList.addEventListener('click', removeTask);
}

function addTask(e){
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    const deleteLink = document.createElement('a');
    deleteLink.className = 'delete-item secondary-content';
    deleteLink.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(deleteLink);
    taskList.appendChild(li);

    storeTaskInLocalStorage(taskInput.value);


    e.preventDefault();
}

function storeTaskInLocalStorage(task){
    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.getItem('tasks');
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are you sure you want to delete this item?')){
            e.target.parentElement.parentElement.remove();
        }
    }
}