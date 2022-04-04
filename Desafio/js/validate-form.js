/*====  Regular Expression and e-mail validation function ============================ */

function validateEmail(email) {
  var re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

function validateForm() {
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value
  const name = document.getElementById('name').value

  const sendingError = 'Erro no envio: '

  if (!validateEmail(email) && !message && !name) return

  if (!validateEmail(email))
    return alert(`${sendingError}Endereço de e-mail inválido`)

  if (!message) return alert(`${sendingError}Insira uma mensagem`)

  if (!name) return alert(`${sendingError}Insira seu nome`)

  return alert(`Obrigado pelo contato, ${name}!`)
}
