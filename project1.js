// Define UI Variables

const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

// Load all event listeners
loadEventListeners()

// Load all event listeners
function loadEventListeners() {

  // Add task event
  form.addEventListener('submit', addTask)
  // Remove task event
  taskList.addEventListener('click', removeTask)
  // Clear task event
  clearBtn.addEventListener('click', clearTasks)


}

// add task function
function addTask(e) {

  if (taskInput.value === "") {
    alert("There is nothing to submit!")
  }

  // create li element
  const li = document.createElement('li')
  // Add class
  li.className = 'collection-item'
  // create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value))
  // create a link element
  const link = document.createElement('a')
  // add classname
  link.className = 'delete-item secondary-content'
  // add icon link
  link.innerHTML = '<i class="fa fa-remove"></i>'
  // append link to li
  li.appendChild(link)

  // append li to ul
  taskList.appendChild(li)
  // clear the input
  taskInput.value = ''



  e.preventDefault()
}
// Remove Task function
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove()
    }
  }
}

// Clear Task function
function clearTasks(e) {

  if (confirm('Are you sure?')) {
    // // slower way
    // taskList.innerHTML = ''

    // faster way
    while (taskList.firstChild) {
      taskList.removeChild()
    }
  }
}