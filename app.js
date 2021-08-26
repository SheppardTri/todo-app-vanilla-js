//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const completedList = document.querySelector('.completed-list');
const hideButton = document.querySelector('.hide-completed-btn');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', completeOrTrash);
completedList.addEventListener('click', unDelete);
hideButton.addEventListener('click', hideCompleted);

//Functions
function addTodo(event) {
  event.preventDefault();
  //create div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  //create li
  const newTodo = document.createElement('li');
  //take form input and store in li
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');

  //append li to div
  todoDiv.appendChild(newTodo);

  //create completed button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-paw"></i>';
  completedButton.classList.add('completed-btn');
  todoDiv.appendChild(completedButton);

  //create edit button
  const editButton = document.createElement('button');
  editButton.innerHTML = '<i class="fas fa-edit"></i>';
  editButton.classList.add('edit-btn');
  todoDiv.appendChild(editButton);

  //create trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);

  //append all to html document
  todoList.appendChild(todoDiv);
  //clear input value
  todoInput.value = '';
};

function completeOrTrash(e) {
  const item = e.target;
  //move item to completed section
  if(item.classList[0] === 'completed-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('finished');
    todo.addEventListener('transitionend', function() {
      completedList.appendChild(todo);
    });
  };
  //slide animate and remove item
  if(item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    todo.classList.add('slide');
    todo.addEventListener('transitionend', function() {
      todo.remove();
    });
  };
};

function unDelete(e) {
  const item = e.target;
  //move back to todo
  if(item.classList[0] === 'completed-btn') {
    const todo = item.parentElement;
    todo.classList.remove('finished');
    todo.addEventListener('transitionend', function() {
      todoList.appendChild(todo);
    });
  };
  //slide animate and remove item
  if(item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    todo.classList.add('slide');
    todo.addEventListener('transitionend', function() {
      todo.remove();
    });
  };
};

function hideCompleted(e) {
  const item = e.target;
  //select completed container and add hidden class
  if(item.classList[0] === 'hide-completed-btn') {
    completedList.classList.toggle('hide-completed');
  };
};