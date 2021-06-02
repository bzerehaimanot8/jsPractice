// Define UI variables

const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-task')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

// Load all event listeners
loadEventListeners()

// loadEventListners function
function loadEventListeners() {
  // add task event
  form.addEventListener('submit', addTask)
}

// Add task
function addTask(e){
  if(taskInput.value === '') {
  alert('Add a task!')
}

  // create li element
  const li = document.createElement('li')
  // add a class
  li.className = 'collection-item'
  // create text node and append to the li
  li.appendChild(document.createTextNode(taskInput.value))
  // create new link element
  const link = document.createElement('a')
  // add a class
  link.className = 'delete-item secondary-content'
  // add icon inner html
  link.innerHTML = '<i class="fa fa-remove"></i>'
  // append link to li
  li.appendChild(link)

  // append li to ul;
  taskList.appendChild(li)

  // clear input
  taskInput.value = ''

  e.preventDefault()
}


