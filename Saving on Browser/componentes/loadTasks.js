import { Task } from './createTask.js'

export const loadTasks = () => {

    const list = document.querySelector('[data-list]')

    const registeredTasks = JSON.parse(localStorage.getItem('tasks')) || []

    list.innerHTML = " "
    registeredTasks.forEach((task) => {
        list.appendChild(Task(task))

        
    })

}

