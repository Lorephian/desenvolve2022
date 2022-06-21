import {handleNewItem} from './componentes/createTask.js'
import {loadTasks} from './componentes/loadTasks.js'

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', handleNewItem)

loadTasks()