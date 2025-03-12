// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
  let nombre = document.getElementById("amigo").value;
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

  amigos.forEach((amigo) => {
    lista.innerHTML += `<li>${amigo}</li>`;
  });
}
