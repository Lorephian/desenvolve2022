


const deletarTarefa = (update, id) => { 
    
    const index = id


const registeredTasks = JSON.parse(localStorage.getItem('tasks'))

registeredTasks.splice(index, 1)

localStorage.setItem('tasks', JSON.stringify(registeredTasks))

update()
}


const BotaoDeleta = (update, id) => { 
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', ()=> deletarTarefa(update, id))

    return botaoDeleta
}



export default BotaoDeleta