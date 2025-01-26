let amigos = []

function adicionarAmigo() {
  // Captura o valor inserido no campo de texto
  let nomeAmigo = document.getElementById("amigo").value

  // Validação: se o campo estiver vazio, exibe um alerta
  if (nomeAmigo === "") {
    alert("Por favor, insira um nome.")
    return
  }

  // Adiciona o nome do amigo ao array
  amigos.push(nomeAmigo)

  // Limpa o campo de entrada
  document.getElementById("amigo").value = ""

  // Atualiza a lista de amigos exibida na página
  atualizarListaAmigos()
}

function atualizarListaAmigos() {
  let listaAmigos = document.getElementById("listaAmigos")

  // Limpa a lista atual
  listaAmigos.innerHTML = ""

  // Percorre o array de amigos e adiciona cada um como <li>
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li")
    li.textContent = amigos[i] // Adiciona o nome do amigo
    listaAmigos.appendChild(li) // Adiciona o <li> à lista
  }
}

function sortearAmigo() {
  // Verifica se há amigos no array
  if (amigos.length === 0) {
    alert("Não há amigos disponíveis para sortear.")
    return
  }

  // Gera um índice aleatório entre 0 e o tamanho do array (amigos.length - 1)
  let indiceAleatorio = Math.floor(Math.random() * amigos.length)

  // Obtém o nome sorteado usando o índice aleatório
  let amigoSorteado = amigos[indiceAleatorio]

  // Exibe o amigo sorteado
  let resultadoElement = document.getElementById("resultado")
  resultadoElement.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`
}
