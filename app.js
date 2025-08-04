// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const amigoNombre = amigoInput.value.trim();
    
    if (amigoNombre && !amigos.includes(amigoNombre)) {
        amigos.push(amigoNombre);
        actualizarListaAmigos();
        amigoInput.value = '';
    } else if(!amigoNombre) {
        alert("Por favor, inserte un nombre.");
    } else {
        alert("El nombre ya fue registrado.");
    }
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("No se puede realizar el sorteo con una sola persona");
        return;
    }
    const indiceSorteo = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceSorteo];

    mostrarResultado(amigoSeleccionado);
}

function mostrarResultado(amigoSeleccionado) {
    const resultadoList = document.getElementById('resultado');
    resultadoList.innerHTML = '';
    
    const li = document.createElement('li');
    li.textContent = `El amigo secreto seleccionado es: ${amigoSeleccionado}`;
    resultadoList.appendChild(li);
}
