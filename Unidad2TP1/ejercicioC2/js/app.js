const form = document.querySelector('#task-form');
const input = document.querySelector('#task-input');
const addButton = document.querySelector('#add-task-button');
const taskList = document.querySelector('#task-list');
const emptyMessage = document.querySelector('#empty-message');

function updateEmptyMessage() {
  emptyMessage.hidden = taskList.children.length > 0;
}

function configureDeleteButton(button) {
  button.textContent = 'X';
  button.classList.add('delete-task-button');
  button.type = 'button';
  button.setAttribute('aria-label', 'Eliminar tarea');

  button.addEventListener('click', () => {
    button.closest('li').remove();
    updateEmptyMessage();
  });
}

function addTask(event) {
  event.preventDefault();

  const taskText = input.value.trim();
  if (!taskText) {
    input.focus();
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');

  const taskLabel = document.createElement('span');
  taskLabel.textContent = taskText;

  const deleteButton = document.createElement('button');
  configureDeleteButton(deleteButton);

  taskItem.append(taskLabel, deleteButton);
  taskList.appendChild(taskItem);

  input.value = '';
  input.focus();
  updateEmptyMessage();
}

form.addEventListener('submit', addTask);
updateEmptyMessage();
