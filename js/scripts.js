// querySelector // 0 a 1 elemento

// const heading = document.querySelector(".header__texto h2");
// console.log(heading);

// querySelectorAll // 0 a todos

// const enlaces = document.querySelectorAll(".navegacion a");
// console.log(enlaces[0]);
// enlaces[0].textContent = "Nuevo nombre"; // cambiar el texto o nombre
// enlaces[0].classList.add("nueva_clase"); // agregar nuevas clases
// enlaces[0].classList.remove("nueva_clase"); // remueve la elimina la clase creada

// Generar un nuevo enlace

// const nuevoEnlace = document.createElement("A"); // siemore es recomendable dejarlo en mayusculas ejemplos ('DIV') ('P')

// agregar el href

// nuevoEnlace.href = "nuevo-enlace.html";

// agregar el texto

// nuevoEnlace.textContent = "Nuevo enlace";

// agregar la clase

// nuevoEnlace.classList.add("navegacion__enlace");

// agregar al documento

// const navegacion = document.querySelector(".navegacion");
// navegacion.appendChild(nuevoEnlace);

// console.log(nuevoEnlace);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Eventos js
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// console.log(1);

// window.addEventListener("load", function () {
// esta funcion es un colbat
// load espera a que el js y los archivos que dependen del HTML esten listos para descargar
//   console.log(4);
// });

// document.addEventListener("DOMContentLoaded", function () {
// solo se descarga el HTML no espera que se descargue los demas archivos
//   console.log(5);
// });

// window.onscroll = function () {
//   console.log("scrolling..");
// };

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Seleccionar elementos y asociar un evento
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// const btnEnviar = document.querySelector(".boton--primario");
// btnEnviar.addEventListener("click", function (e) {
//   console.log(e);
//   console.log(e.target); // sirve para ver que le estamos dando click

//   e.preventDefault(); // sirve para validar un formulario

//   console.log("enviar algo");
// });

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// eventos de input y textarea
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Para validar en tiempo real utilisamos input

const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// eventos de submit
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  // Validar el formulario

  // destroction

  const { nombre, email, mensaje } = datos;

  if (nombre === "" || email === "" || mensaje === "") {
    // mostrarError("Todos los campos son obligatorios");
    mostrarAlerta("Todos los campos son obligatorios", "error");
    return; //corta la ejecucion del codigo
  }

  //   crear otra alerta enviar mensaje correctamente
  //   mostrarMensaje("Mensaje enviado correctamente");
  mostrarAlerta("Mensaje enviado correctamente");
});

function leerTexto(e) {
  datos[e.target.id] = e.target.value;

  //   console.log(datos);
}

// Refactorizado

function mostrarAlerta(mensaje, error = null) {
  const alerta = document.createElement("p");
  alerta.textContent = mensaje;

  if (error) {
    alerta.classList.add("error");
  } else {
    alerta.classList.add("correcto");
  }

  formulario.appendChild(alerta);

  //   desaparezca despues de un tiempo

  setTimeout(() => {
    alerta.remove(alerta);
  }, 3000);
}

// mostrar mensaje correctamente enviado

function mostrarMensaje(mensaje) {
  //   const alerta = document.createElement("P");
  //   alerta.textContent = mensaje;
  //   alerta.classList.add("correcto");
  //   formulario.appendChild(alerta);
  //   desaparezca despues de un tiempo
  //   setTimeout(() => {
  //     alerta.remove(alerta);
  //   }, 3000);
}

// mostrar error en pantalla

function mostrarError(mensaje) {
  //   const error = document.createElement("P");
  //   error.textContent = mensaje;
  //   error.classList.add("error");
  //   formulario.appendChild(error);
  //   Desaparezca despues de un tiempo
  //   setTimeout(() => {
  //     error.remove();
  //   }, 3000);
}
