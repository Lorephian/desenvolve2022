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
        const time = date.format('HH:MM')
    
        const formatedDate = date.format('DD/MM/YYYY')
        const finished = false
        const data = {
            valor,
            formatedDate,
            time,
            finished
        }

        const updatedTasks = [...tasks, data]

        localStorage.setItem('tasks', JSON.stringify(updatedTasks))

        input.value = " "

        loadTasks()

    }

    export const Task = ( { valor, time, finished }, id ) => {

    const task = document.createElement('li')
    
    const content = `<p class="content">${time} * ${valor}</p>`
    if(finished){
        task.classList.add('done')
    }

    task.classList.add('task')
    task.innerHTML = content

    task.appendChild(BotaoConclui(loadTasks, id))
    task.appendChild(BotaoDeleta(loadTasks, id))
   
    return task

}

