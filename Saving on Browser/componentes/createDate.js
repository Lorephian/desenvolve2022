import { Task } from './createTask.js'


export const createDate = (date) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    const dateMoment = moment(date, 'DD/MM/YYYY')
    const topDate = document.createElement('li')
    const content = `<p class="content-date"> ${dateMoment.format('DD/MM/YYYY')}</p>`

    topDate.innerHTML = content

    tasks.forEach(((task, id) => {
        const day = moment(task.formatedDate, 'DD/MM/YYYY')

        const diff = dateMoment.diff(day)
        if(diff === 0) {

            topDate.appendChild(Task(task, id))
        }
    }))

    return topDate
}

