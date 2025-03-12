// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigos() {
  let nombre = document.getElementById("amigo").value;
  if (nombre == "") {
    alert("Por favor, inserte un nombre.");
    document.getElementById('amigo') = "";
    return;
  } 
  if (amigos.includes(nombre)){
    alert("El amigo ya está en la lista");
    return;
  }else {
    amigos.push(nombre);
    console.log("Se ha ingresado el amigo: " + amigos);
    document.getElementById('amigo') = "";x
  }
}
