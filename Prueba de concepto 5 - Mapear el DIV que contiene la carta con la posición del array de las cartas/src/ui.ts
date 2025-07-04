import { tablero } from "./model";
import * as constantes from "./constantes";

// Recibe y muestra el número de intentos
export const mostrarIntentos = () => {
    const elementoTitulo = document.getElementById("elemento-titulo");

    if (!elementoTitulo && elementoTitulo === null && elementoTitulo === undefined) {
        const titulo = document.createElement("h3");
        titulo.id="elemento-titulo";
    }

    if (
        constantes.elementoIntentos && constantes.elementoIntentos != null && constantes.elementoIntentos != undefined
        && elementoTitulo && elementoTitulo != null && elementoTitulo != undefined
    ) { 
        elementoTitulo.innerText = "INTENTOS";

        const intentos = document.createElement("span");
        intentos.innerText = tablero.intentos.toString();

        constantes.elementoIntentos.appendChild(elementoTitulo);
        constantes.elementoIntentos.appendChild(intentos)
    }
}

// Recibe el índice de la carta actual y la muestra en el tablero
export const mostrarCarta = (indice: number) => {
    const elementoCarta = document.getElementById(constantes.elementosImagenHTML[indice]);

    // Carga la carta guardada en los elementos de imagen
    if (elementoCarta && elementoCarta != undefined && elementoCarta != null) {
       elementoCarta.setAttribute("src", tablero.cartas[indice].imagen);
    }
}

// Llama a sePuedeVoltearLaCarta y si devuelve true cambia la imagen y el estado de la carta
export const voltearLaCarta = (tablero: constantes.Tablero, indice: number): void => {
  // Recibe el número de carta y llama a mostrarCarta
  if (sePuedeVoltearLaCarta(tablero, indice)) {
    mostrarCarta(indice),
    tablero.cartas[indice].estaVuelta = true

// Recibe un mensaje y lo muestra en pantalla
export const mostrarMensaje = (mensaje: string) => {
    if (constantes.elementoMensaje && constantes.elementoMensaje != undefined && constantes.elementoMensaje != null) {
        constantes.elementoMensaje.innerText = mensaje;
    }
}