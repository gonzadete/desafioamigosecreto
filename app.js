// Declaracion de variables
let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if(nombre == ""){                    // Valida que nombre sea distinto de blanco
        alert('Debe ingresar un nombre');
    }else{
        amigos.push(nombre);            // Agrega nombre a tabla
        document.getElementById('amigo').value = "";
        mostrarAmigos();
    }
}

function mostrarAmigos(){
    let html = '';
    for(let i=0; i<amigos.length; i++){        // Muestra amigos en tabla
        html += `<li>${amigos[i]}</li>`;
    }
    document.getElementById('listaAmigos').innerHTML = html;
}
 
function sortearAmigo(){        // elige amigo tomando numero random como puntero para leer tabla del elegido 
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('resultado').innerHTML = amigoSorteado;
}
