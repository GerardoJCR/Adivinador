//Seleccionamos los elementos del Dom
const inputNumero = document.getElementById("numeroUsuario");
const botonAdivinar = document.getElementById("adivinar");
const mensaje = document.getElementById("mensaje");
const intentos = document.getElementById("intentos");

//Inicializamos las variables del juego
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let contadorIntentos = 0;

// Funcion para manejar el intento del usuario
function adivinarNumero() {
  const numeroUsuario = parseInt(inputNumero.value, 10);
  contadorIntentos++;

  //Validacion del numero ingresado
  if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 10) {
    mensaje.textContent = "Por favor ingrese un número entre 1 y 10";
    return;
  }
  //Comparamos el numero del usuario con el numero secreto
  if (numeroUsuario === numeroSecreto) {
    mensaje.textContent = `Felicidades! Adivinaste el numero en ${contadorIntentos} intentos`;
    mensaje.style.backgroundColor = "green";
  } else if (numeroUsuario < numeroSecreto) {
    mensaje.textContent = "El numero secreto es mayor";
  } else {
    mensaje.textContent = "El numero secreto es menor";
  }

  //Mostramos los intentos
  intentos.textContent = `Intentos: ${contadorIntentos}`;
  intentos.style.color = "yellow";

  //Funcion para reiniciar el juego

  function reiniciarJuego() {
    setTimeout(() => {
      numeroSecreto = Math.floor(Math.random() * 100) + 1;
      contadorIntentos = 0;
      mensaje.textContent = "";
      intentos.textContent = "";
    }, 2000);
  }
}

//Añadimos la funcion reiniciarJuego
botonAdivinar.addEventListener("click", adivinarNumero);
