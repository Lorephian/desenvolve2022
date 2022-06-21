import { loadTasks } from './loadTasks.js'
import BotaoConclui from './concluiTarefa.js'
import BotaoDeleta from './deletaTarefa.js'
 


    export const handleNewItem = (event) => {

        event.preventDefault()

        const tasks = JSON.parse(localStorage.getItem('tasks')) || []
        
        const input = document.querySelector('[data-form-input]')
        const valor = input.value
    
        const calendar = document.querySelector('[data-form-date]')
        const date = moment(calendar.value)
    
        const formatedDate = date.format('DD/MM/YYYY')

        const data = {
            valor,
            formatedDate
        }

        const updatedTasks = [...tasks, data]

        localStorage.setItem('tasks', JSON.stringify(updatedTasks))

        input.value = " "

        loadTasks()

    }

    export const Task = ( { valor, formatedDate } ) => {

    const task = document.createElement('li')
    task.classList.add('task')
    const content = `<p class="content">${formatedDate} * ${valor}</p>`

    task.innerHTML = content

    task.appendChild(BotaoConclui())
    task.appendChild(BotaoDeleta())
   
    return task

}

