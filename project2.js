// Define UI variables

const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-task')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

// Loads up all event listeners
loadEventListeners()

// loadEventListners function
function loadEventListeners() {
  // add task event (event, f(x) that executes event)
  form.addEventListener('submit', addTask)
  // remove task event
  taskList.addEventListener('click', removeTask)
  // clear list event
  clearBtn.addEventListener('click', clearTasks)
}

// Add task
function addTask(e) {
  // if input field is empty when submitting, alert user, otherwise create list item and append it to the tasklist with the input's value
  if (taskInput.value === '') {
    alert('Add a task!')
  }

  // create li element
  const li = document.createElement('li')
  // attach a class to the li 
  li.className = 'collection-item'
  // create text node and append to the li
  li.appendChild(document.createTextNode(taskInput.value))
  // create new link element
  const link = document.createElement('a')
  // attach a class (in materialize "secondary content" is needed to add an innerHTML) 
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

// removing task from the tasklist
function removeTask(e) {
  //
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you Sure?')) {
      e.target.parentElement.parentElement.remove()
    }
  }
  // console.log(e.target);
}

function clearTasks() {
// slower way
taskList.innerHTML = ''

// faster way
while(taskList.firstChild) {

taskList.removeChild(taskList.firstChild)

}
}