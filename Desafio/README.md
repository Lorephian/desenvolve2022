# ⚠️ Importante
Por algum motivo, as vezes, ao carregar o site na plataforma [CodeSandbox](https://codesandbox.io/) o JS do `scrollReveal` buga e não revela da forma apropriada. Para resolver o problema basta **ATUALIZAR A PAGINA** que ele roda normalmente. 

> No liveServer do Visual Studio Code isso não ocorre. Apenas identifiquei ao utilizar a plataforma do codesandbox. Abrindo normalmente pelo navegador o erro também não ocorre.

# ❓ Sobre o Desafio

**Ao clicar no botão de envio, a página deve exibir uma das seguintes mensagens:**

- "Erro no envio: Insira uma mensagem", caso o campo de texto esteja em branco.
- "Erro no envio: Endereço de mail inválido", caso o email fornecido não siga o formato user@domain.com
- "Obrigado pelo contato, user!", para os demais casos.

**Para a validação de email, os critérios específicos de cada variável são:**

- user: `1` a `32` caracteres, incluindo `letras maiúsculas` e `minúsculas`, `numerais` e `ponto final`.
- domain: `1` a `16` caracteres, incluindo `letras minúsculas` e `numerais`.


# ♻️ Mudanças

Optei por fazer uma validação diferente da proposta pois nem sempre os emails terminam em `.com`.

Tambem alterei para a mensagem não utilizar o campo `user` do email, uma vez que um email `contato@domain.com.br` retornaria a mensagem *"obrigado contato, contato!"*.

> Caso fosse obrigatório manter este padrão, utilizaria o seguinte código JS que segue o padrão da página funcional de exemplo.

## Código

```js
const validateForm = () => {
  const validCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789.'
  const emailError = 'Erro no envio: Endereço de mail inválido'

  const email = document.getElementById('email').value
  const message = document.getElementById('message').value

  if (!email.includes('@')) alert(emailError)

  const [user, domain] = email.split('@')

  if (user.length > 32) alert(emailError)

  if (!domain.includes('.com')) alert(emailError)

  const [firstPart, secondPart] = domain.split('.com')

  if (secondPart) alert(emailError)

  if (firstPart.length > 16) alert(emailError)

  for (let char of user) {
    if (!validCharacters.includes(char.toLowerCase())) alert(emailError)
  }

  if (firstPart.includes('.')) alert(emailError)

  for (let char of firstPart) {
    if (!validCharacters.includes(char)) alert(emailError)
  }

  if (!message) alert('Erro no envio: Insira uma mensagem')
  else alert(`Obrigado pelo contato, ${user}!`)
}
```
