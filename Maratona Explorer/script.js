const answers = [
    "Certeza.",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso!",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, Definitivamente.",
    "Minha respsota é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem que não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim",
]


const askButton = document.querySelector("#askButton")
const elementAnswer = document.querySelector("#answer")
const questionInput = document.querySelector("#questionInput")



function makeQuestion() {

    if(questionInput.value == "") {
        elementAnswer.style.opacity = 1;
        elementAnswer.innerHTML = "Digite uma pergunta."
        setTimeout(function() {
            elementAnswer.style.opacity = 0;
        }, 3000)
        return
    } 

        askButton.setAttribute("disabled", true)

        const question = "<div>" + questionInput.value + "</div>"
        const totalAnswers = answers.length
        const randomNumber = Math.floor(Math.random() * totalAnswers)
    
        elementAnswer.innerHTML = question +  answers[randomNumber]
        elementAnswer.style.opacity = 1;
        setTimeout(function() {
            elementAnswer.style.opacity = 0;
            askButton.removeAttribute("disabled")
        }, 3000)

    }

   



