import { tablero } from "./model";
import * as constantes from "./constantes";


// Recibe y muestra el número de intentos
export const mostrarIntentos = () => {
    if (constantes.elementoIntentos instanceof HTMLDivElement) { 
        const titulo = document.createElement("h3");
        titulo.innerText = "INTENTOS";

        const intentos = document.createElement("span");
        intentos.innerText = tablero.intentos.toString();

        constantes.elementoIntentos.appendChild(titulo);
        constantes.elementoIntentos.appendChild(intentos)
    }
}

// Recibe el índice de la carta actual y la muestra en el tablero
export const mostrarCarta = (indice: number) => {
    const elementoCarta = document.getElementById(constantes.elementosImagenHTML[indice]);

    // Carga la carta guardada en los elementos de imagen
    if (elementoCarta) {
       elementoCarta.setAttribute("src", tablero.cartas[indice].imagen);
    }
}

// Recibe un mensaje y lo muestra en pantalla
export const mostrarMensaje = (mensaje: string) => {
    if (constantes.elementoMensaje instanceof HTMLDivElement) {
        constantes.elementoMensaje.innerText = mensaje;
    }
}