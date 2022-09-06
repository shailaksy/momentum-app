export const toDoToggle = document.querySelector("#todo-btn-toggle");
export const toDoContainerToggle = document.querySelector("#todo-toggle-container");
export const toDoInput = document.querySelector('[data-input-form]');
export const saveBtn = document.querySelector('[data-save-btn]');
export const toDoList = document.querySelector('[data-list]');

let todos = [];

if(JSON.parse(localStorage.getItem('todo'))) {
    todos = JSON.parse(localStorage.getItem('todo'))
}

let editedIndex = -1;

const createTask = (item) => {
    if (item === '' || null || undefined) {
        toDoInput.value = '';
        alert('Input a task.');
    } else {
        todos.push(item);
        localStorage.setItem('todo', JSON.stringify(todos));
    }
}

export const displayList = () => {
    toDoList.innerHTML = '';
    todos.forEach((item, indx) => {
        const newLi = document.createElement('li');
        const newSpan = document.createElement('span');
        const editBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');

        newSpan.textContent = item;
        editBtn.innerHTML = '<i class="uil-pen"></i>';
        deleteBtn.innerHTML = '<i class="uil-trash-alt"></i>';

        editBtn.style.position = 'absolute';
        deleteBtn.style.position = 'absolute';

        editBtn.style.right = '7%';
        deleteBtn.style.right = '3.5%';

        newLi.appendChild(newSpan);
        newLi.appendChild(editBtn);
        newLi.appendChild(deleteBtn);

        editBtn.addEventListener('click', () => {
            editedIndex = indx;
            toDoInput.value = item;
        })

        deleteBtn.addEventListener('click', () => {
            deleteTask(indx);
            displayList();
        })

        toDoList.appendChild(newLi);
    })
}

const updateTask = (updatedItem, indx) => {
    todos[indx] = updatedItem;
    localStorage.setItem('todo', JSON.stringify(todos));
}

const deleteTask = (indx) => {
    todos = todos.filter((_, index) => index !== indx);
}

export function saveTask() {
    if (editedIndex > -1) {
        updateTask(toDoInput.value, editedIndex);
        editedIndex = -1;
    } else {
        createTask(toDoInput.value);
    }
    toDoInput.value = '';
    displayList();
}
