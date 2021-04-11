const todoInput = document.querySelector('input')
const addBtn = document.getElementById('addBtn')
const todoList = document.getElementById('todoList')
const todoContent = document.getElementsByClass('todoContent')


addBtn.addEventListener('click', addElement)

function addElement(e) {
    e.preventDefault()
    let newLine = document.createElement('p');
    newLine.innerHTML = (todoInput.value)
    todoList.appendChild(newLine)
    todoInput.reset()
}



console.log(todoInput.value)