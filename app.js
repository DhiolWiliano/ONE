let amigos = [];
let sorteio = [];

function adicionarAmigo() {
  let amigo = document.getElementById('amigo').value;

  if (amigo) {
    amigos.push(amigo);
    document.getElementById('amigo').value = '';
    atualizarListaAmigos();
  }
}

function atualizarListaAmigos() {
  let listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = '';

  for (let amigo of amigos) {
    let itemLista = document.createElement('li');
    itemLista.textContent = amigo;
    listaAmigos.appendChild(itemLista);
  }
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert('Adicione pelo menos dois amigos para sortear.');
    return;
  }

  sorteio = embaralharAmigos(amigos.slice()); // Cria uma cópia embaralhada

  let resultado = document.getElementById('resultado');
  resultado.innerHTML = '';

  for (let i = 0; i < amigos.length; i++) {
    let itemResultado = document.createElement('li');
    itemResultado.textContent = `${amigos[i]} : ${sorteio[i]}`;
    resultado.appendChild(itemResultado);
  }
}

function embaralharAmigos(lista) {
  for (let i = lista.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [lista[i], lista[j]] = [lista[j], lista[i]]; // Troca os elementos
  }
  return lista;
}