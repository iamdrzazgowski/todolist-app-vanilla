const todo = [];
const addItemBtn = document.querySelector('.add-item');
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todolist');

const renderItems = () => {
    todoList.innerHTML = '';

    todo.forEach((item, index) => {
        const element = document.createElement('li');

        element.innerHTML = `
            <div class="todo-item">
                <p class="item-text ${item.disable ? 'disable' : ''}">${item.text}</p>
                <button class="del-item"">X</button>
            </div>
        `;

        element.querySelector('.del-item').addEventListener('click', () => {
            removeTask(index);
        });

        element.querySelector('.todo-item').addEventListener('click', () => {
            checkTask(item);
        });

        todoList.appendChild(element);
    });
};

const removeTask = (index) => {
    todo.splice(index, 1);
    renderItems();
};

const checkTask = (item) => {
    item.disable = !item.disable;
    renderItems();
};

addItemBtn.addEventListener('click', () => {
    let todoItemValue = todoInput.value.trim();

    if (todoItemValue !== '') {
        todo.push({ text: todoItemValue, disable: false });
        todoInput.value = '';
        renderItems();
    }
});
