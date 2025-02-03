let Amigos = []; // Array para almacenar los nombres

function agregarAmigo() {
    // Obtener el valor del input con id 'amigo'
    const nuevoAmigo = document.getElementById('amigo').value;

    // Validar que el valor no esta vacio
    if (nuevoAmigo !== '') {
        Amigos.push(nuevoAmigo); // Agrega el nuevo amigo al array
        limpiar();
        mostrarAmigos();
        console.log(Amigos); // Muestra el array en la consola
        return;
    } else {
        console.log('No puedes agregar un amigo vacio.');
        alert('Por favor, inserte un nombre');
        return;
    }
}

function limpiar() {
    document.querySelector('#amigo').value = ''; // Limpia el input
    return;
}

function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');

    // Limpiar la lista para evitar duplicados
    lista.innerHTML = '';

    if (Amigos.length > 0) {
        for (let amigo of Amigos) {
            const elemento = document.createElement('li');
            elemento.innerHTML = amigo;
            lista.appendChild(elemento); // Agrega cada amigo como
        }
    } else {
        alert('La lista de amigos esta vacia');
        }

    }


    function sortearAmigo(){
        let sorteado = document.querySelector('.button-draw');

        if(Amigos.length < 1){
            alert('No hay ningun amigo en la lista');
            return;
        }
        else{
            indice = random();
            let seleccionado;
            seleccionado = Amigos[indice];
            sorteado.innerHTML = (`El sorteado es: ${seleccionado}`);
            return;
        }

    }

    function random(){
        let numeroGenerado = Math.floor(Math.random()*Amigos.length);
        return numeroGenerado;
    }



