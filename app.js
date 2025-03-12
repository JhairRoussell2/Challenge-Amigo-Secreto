// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Jhair Roussell Melendez Blas
let amigos = [];

function agregarAmigo() {
  let nombre = document.getElementById("amigo").value.trim();
  if (nombre == "") {
    alert("Por favor, inserte un nombre.");
    document.getElementById("amigo").value = "";
    return;
  }
  if (amigos.includes(nombre)) {
    alert("El amigo ya está en la lista");
    return;
  } else {
    amigos.push(nombre);
    console.log("Se ha ingresado un amigo, por ahora: " + amigos);
    document.getElementById("amigo").value = "";
  }
  listaAmigos();
}

function listaAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo, index) => {
    lista.innerHTML += `
    <li class="amigo-item">
        <span>${amigo}</span> 
        <button class="delete-button" onclick="eliminarAmigo(${index})">Eliminar</button>
        </li>`;
  });
}

function eliminarAmigo(index) {
  amigos.splice(index, 1);
  console.log("Se ha eliminado el siguiente amigo: " + amigos);
  listaAmigos();
}

function sortearAmigo() {
  if (amigos.length == 0) {
    alert("No hay amigos en la lista");
    return;
  } else {
    let indiceRandom = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceRandom];
    document.getElementById("resultado").innerHTML = amigoSorteado;
  }
}

document.getElementById("amigo").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    agregarAmigo();
  }
});
