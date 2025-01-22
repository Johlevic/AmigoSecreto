let amigos = [];

function agregarAmigo() {
  let nameFriend = document.querySelector('input').value;

  amigos.push(nameFriend);

  let lista = '';

  for (let i = 0; i < amigos.length; i++) {
    lista += `<li>${amigos[i]}</li>`;
  }

  
  document.getElementById("listaAmigos").innerHTML = lista;
}