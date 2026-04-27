// ============================================
// script.js — Interactividad básica (TASK 5)
// ============================================

// 1. MENSAJE DE BIENVENIDA al cargar la página (alerta visible para el usuario)
document.addEventListener("DOMContentLoaded", function () {
alert("🎸 ¡Bienvenido a Rock Universe!\nEl templo del rock más grande del mundo. 🤘");
console.log("🎸 Rock Universe cargado correctamente");
});

// 2. BOTÓN DE BIENVENIDA — cambia el texto del párrafo al hacer clic
const btnBienvenida = document.getElementById("btn-bienvenida");
const mensajeBienvenida = document.getElementById("mensaje-bienvenida");

btnBienvenida.addEventListener("click", function () {
  // Cambiamos el texto del párrafo (manipulación del DOM)
mensajeBienvenida.textContent = "🤘 ¡El rock está en tu sangre! Sube el volumen.";
mensajeBienvenida.style.color = "#e8002d";
btnBienvenida.textContent = "¡Mensaje actualizado!";
btnBienvenida.disabled = true;
});

// 3. BOTONES DE ESTILO — cambian el texto dinámico según el botón pulsado
const botonesRock = document.querySelectorAll(".btn-rock");
const textoDinamico = document.getElementById("texto-dinamico");

botonesRock.forEach(function (boton) {
boton.addEventListener("click", function () {
    // Leemos el atributo data-estilo del botón clickeado
    const estilo = boton.getAttribute("data-estilo");
    textoDinamico.textContent = "Tu estilo es: " + estilo;
    textoDinamico.style.fontSize = "1.4rem";
});
});

// 4. MOSTRAR / OCULTAR contenido extra con un botón (toggle)
const btnToggle = document.getElementById("btn-toggle");
const contenidoExtra = document.getElementById("contenido-extra");

btnToggle.addEventListener("click", function () {
  // Si está oculto, lo mostramos; si está visible, lo ocultamos
if (contenidoExtra.classList.contains("oculto")) {
    contenidoExtra.classList.remove("oculto");
    btnToggle.textContent = "Ocultar info";
} else {
    contenidoExtra.classList.add("oculto");
    btnToggle.textContent = "Ver más info";
}
});

