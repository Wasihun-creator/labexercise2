const taskInput = document.querySelector('#task');
const form = document.querySelector('#task-form');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const allLinks = document.querySelectorAll('.delete-item');
const reloadIcon = document.querySelector('.brand-logo');

form.addEventListener('submit', addNewTask);

clearBtn.addEventListener('click', clearAllTasks);

filter.addEventListener('keyup', filterTasks);

taskList.addEventListener('click', removeTask);
reloadIcon.addEventListener('click', reloadPage);


function addNewTask(e) {
    e.preventDefault();

    if (taskInput.value === '') {
        taskInput.style.borderColor = 'red';
        return;
    }

    const li = document.createElement('li');

    li.className = 'collection-item';

    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');

    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';

    li.appendChild(link);
    taskList.appendChild(li);
    taskInput.value = '';
}

function clearAllTasks() {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure about that ?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

function reloadPage() {
    location.reload();
}

function filterTasks(e) {
    var all = Array.from(taskList.children);
    var fl = all.forEach((el) => {
        if (el.textContent.includes(e.target.value)) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    });
}

function sortIt(direction) {
    var tasks = Array.from(taskList.children).sort(function(a, b) {
        if (a.item1 == b.item1) {
            return a.innerHTML > b.innerHTML ? 1 : a.innerHTML < b.innerHTML ? -1 : 0;
        }
        return a.innerHTML > b.innerHTML ? 1 : -1;
    });

    if (direction == '2') {
        tasks = tasks.reverse();
    }
    clearAllTasks();
    taskList.append(...tasks);
}

