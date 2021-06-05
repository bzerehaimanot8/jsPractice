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
  // DOM Load Event
  document.addEventListener('DOMContentLoaded', getTasks)
  // add task event (event, f(x) that executes event)
  form.addEventListener('submit', addTask)
  // remove task event
  taskList.addEventListener('click', removeTask)
  // clear list event
  clearBtn.addEventListener('click', clearTasks)
  // filter through task list event
  filter.addEventListener('keyup', filterTasks)
}

//Get Tasks from local storage
function getTasks() {
  // intialize tasks
  let tasks;
  // checking to see if there's anything in LS
  if (localStorage.getItem('tasks') === null) {
    // if there isnt set it to an empty array
    tasks = []
  } else {
    //if there is, set it to whatever is there
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }



  tasks.forEach(function (task) {
    // create li element
    const li = document.createElement('li')
    // attach a class to the li 
    li.className = 'collection-item'
    // create text node and append to the li
    li.appendChild(document.createTextNode(task))
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
  })

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

  // store in local storage
  storeTaskInLocalStorage(taskInput.value)

  // clear input
  taskInput.value = ''

  e.preventDefault()
}

// store in local storage function

function storeTaskInLocalStorage(task) {
  // intialize tasks
  let tasks;
  // checking to see if there's anything in local storage
  if (localStorage.getItem('tasks') === null) {
    // if there isnt set it to an empty array
    tasks = []
  } else {
    //if there is, set it to whatever is there
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

// removing task from the tasklist
function removeTask(e) {
  //
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you Sure?')) {
      e.target.parentElement.parentElement.remove()

      //Remove from local storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement)
    }
  }
  // console.log(e.target);
}
//Remove from Local Storage
function removeTaskFromLocalStorage(taskItem) {
  // console.log(taskItem);
  // intialize tasks
  let tasks;
  // checking to see if there's anything in LS
  if (localStorage.getItem('tasks') === null) {
    // if there isnt set it to an empty array
    tasks = []
  } else {
    //if there is, set it to whatever is there
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1)
    }
    localStorage.setItem('tasks', JSON.stringify(tasks))
  })
}

// clearing task list
function clearTasks() {
  // slower way
  // taskList.innerHTML = ''

  // faster way
  // while there is a first child in this ul...
  while (taskList.firstChild) {
    // remove it until there are no more
    taskList.removeChild(taskList.firstChild)
  }
}

// filtering through task list

function filterTasks(e) {
  // setting variable for the filter input in lowercase
  const text = e.target.value.toLowerCase()

  // for each list item in the ul, we want to check if it's child (textnode) matches any part of the filter input. If there is any character match, the if statement will hold true, and the matching text will display. otherwise, it will not
  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent
    // looks for the index of text within item
    if (item.toLowerCase().indexOf(text) != -1) {
      //if theres a match, it'll display
      task.style.display = 'block'

    } else {
      // if no match, nothing is shown
      task.style.display = 'none'
    }
  })
}