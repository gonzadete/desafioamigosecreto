let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if(nombre == ""){
        alert('Debe ingresar un nombre');
    }else{
        amigos.push(nombre);
        document.getElementById('amigo').value = "";
        mostrarAmigos();
    }
}

function mostrarAmigos(){
    let html = '';
    for(let i=0; i<amigos.length; i++){
        html += `<li>${amigos[i]}</li>`;
    }
    document.getElementById('listaAmigos').innerHTML = html;
}
 
function sortearAmigo(){
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('resultado').innerHTML = amigoSorteado;
}
