const button = document.querySelector('button')
const input = document.querySelector('input')
const todoList = JSON.parse(localStorage.getItem('todoList')) || []


function renderTodos(){
    const ul = document.querySelector('ul')
    ul.innerHTML = ''
    todoList.forEach( item => {                  
        const li = document.createElement('li')
        li.textContent = item.task
        ul.appendChild(li)
    });
}
   
button.addEventListener('click', () =>{
    const todos = { task: input.value, completed: false }
    todoList.push(todos)
    localStorage.setItem('todoList', JSON.stringify(todoList))
    input.value = ''
    renderTodos()    
})
