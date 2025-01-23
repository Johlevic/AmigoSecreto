function validarSoloLetras(input) {
    // Elimina cualquier carácter que no sea una letra o un espacio
    input.value = input.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '');
}

let amigos = [];

function agregarAmigo() {
    let nameFriend = document.querySelector('#amigo').value.trim();

    if (nameFriend === '') {
        Swal.fire({
            icon: 'warning', 
            title: '¡Alerta!',
            text: 'Por favor, inserte un nombre.',
        });
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
        Swal.fire({
            icon: 'info', 
            title: 'Lista vacía',
            text: 'No hay amigos en la lista para sortear.',
        });
        return;
    }
    else if (amigos.length >= 2){

        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceAleatorio];
        document.getElementById("resultado").innerHTML = `<p>🎉 El amigo sorteado es: <strong>${amigoSorteado}</strong></p>`;

        amigos = [];
        document.getElementById("listaAmigos").innerHTML = '';

        
        lanzarConfeti();
        ocultarMostrarButton();
    }
    else{
        Swal.fire({
            icon: 'warning', 
            title: 'Información',
            text: 'La lista debe tener más de 1 registro para continuar.',
        });
    }

    
}

function lanzarConfeti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });
}

//Variables de los botones

let buttonNuevo = document.getElementById('nuevoSorteo');
let buttonSorteo = document.getElementById('sorteo');

//Estado inicial del boton de reiniciar

buttonNuevo.classList.add('hidden');

function ocultarMostrarButton() {
    
    buttonSorteo.classList.add('hidden');   
    buttonNuevo.classList.remove('hidden'); 
}

function reiniciarSorteo() {
    document.getElementById("resultado").innerHTML = '';
    
    buttonSorteo.classList.remove('hidden');   
    buttonNuevo.classList.add('hidden');       
}

