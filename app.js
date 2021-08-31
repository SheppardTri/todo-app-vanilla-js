//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const completedList = document.querySelector('.completed-list');
const hideButton = document.querySelector('.hide-completed-btn');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', completeEditTrash);
completedList.addEventListener('click', unDelete);
hideButton.addEventListener('click', hideCompleted);

//Functions
function addTodo(event) {
  event.preventDefault();

  //create li
  const newTodo = document.createElement('li');
  newTodo.classList.add('list')
  //create viewdiv
  const viewDiv = document.createElement('div')
  viewDiv.innerText = todoInput.value
  viewDiv.classList.add('view');
  newTodo.appendChild(viewDiv)
  //child div for li
  const editDiv = document.createElement('div')
  newTodo.appendChild(editDiv)
  //child input for div for li
  const hiddenEdit = document.createElement('input');
  hiddenEdit.type = 'text';
  hiddenEdit.onchange = function() {
    viewDiv.innerText = hiddenEdit.value;
  }
  hiddenEdit.placeholder = newTodo.innerText
  hiddenEdit.innerText = todoInput.value;
  hiddenEdit.classList.add('edit-field');
  editDiv.appendChild(hiddenEdit);


  //create completed button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-paw"></i>';
  completedButton.classList.add('completed-btn');
  newTodo.appendChild(completedButton);

  //create edit button
  const editButton = document.createElement('button');
  editButton.innerHTML = '<i class="fas fa-edit"></i>';
  editButton.classList.add('edit-btn');
  newTodo.appendChild(editButton);

  //create trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  newTodo.appendChild(trashButton);

  //append all to html document
  todoList.appendChild(newTodo);
  //clear input value
  todoInput.value = '';
};

function completeEditTrash(e) {
  const item = e.target;
  //move item to completed section
  if(item.classList[0] === 'completed-btn') {
    const todo = item.closest('li');
    todo.classList.toggle('finished');
    todo.addEventListener('transitionend', function() {
      completedList.appendChild(todo);
    });
  };
  //edit input
  if(item.classList[0] === 'edit-btn') {
    item.closest('li').classList.toggle('editing')
    
  };

  //slide animate and remove item
  if(item.classList[0] === 'trash-btn') {
    const todo = item.closest('li');
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
    const todo = item.closest('li');
    todo.classList.remove('finished');
    todo.addEventListener('transitionend', function() {
      todoList.appendChild(todo);
    });
  };
  //slide animate and remove item
  if(item.classList[0] === 'trash-btn') {
    const todo = item.closest('li');
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