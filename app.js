function validarSoloLetras(input) {
    // Elimina cualquier carácter que no sea una letra o un espacio
    input.value = input.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '');
  }
  
  let amigos = [];
  
  function agregarAmigo() {
    let nameFriend = document.querySelector('#amigo').value.trim();
  
    if (nameFriend === '') {
      alert("Por favor, inserte un nombre.");
      return;
    }
  
    amigos.push(nameFriend);
  
    document.querySelector('#amigo').value = '';
  
    actualizarListaAmigos();
  }
  
  function actualizarListaAmigos() {
    let lista = amigos.map(amigo => `<li>${amigo}</li>`).join('');
    document.getElementById("listaAmigos").innerHTML = lista;
  }
  
  function sortearAmigo() {
   
    if (amigos.length === 0) {
      alert("No hay amigos en la lista para sortear.");
      return;
    }
 
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  
    
    const amigoSorteado = amigos[indiceAleatorio];
  
    
    document.getElementById("resultado").innerHTML = `<p>🎉 El amigo sorteado es: <strong>${amigoSorteado}</strong></p>`;
  
    document.getElementById("listaAmigos").innerHTML = '';
  
   
    amigos = [];
  }
  