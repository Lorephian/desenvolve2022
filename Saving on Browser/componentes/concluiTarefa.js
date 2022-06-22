const concluirTarefa = (update, id) => {
    const registeredTasks = JSON.parse(localStorage.getItem('tasks')) 
 
    registeredTasks[id].finished = !registeredTasks[id].finished
 
    localStorage.setItem('tasks', JSON.stringify(registeredTasks))
 
    update()
 }

const BotaoConclui = () => { 
    const botaoConclui = document.createElement('button')  
    
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir'

    botaoConclui.addEventListener('click', ()=> concluirTarefa(update, id))

    return botaoConclui

}



export default BotaoConclui

