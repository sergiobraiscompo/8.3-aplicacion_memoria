import { tablero } from "./model";
import * as constantes from "./constantes";


// Recibe y muestra el número de intentos
export const mostrarIntentos = () => {
    if (constantes.elemento_intentos instanceof HTMLDivElement) { 
        const titulo = document.createElement("h3");
        titulo.innerText = "INTENTOS";

        const intentos = document.createElement("span");
        intentos.innerText = tablero.intentos.toString();

        constantes.elemento_intentos.appendChild(titulo);
        constantes.elemento_intentos.appendChild(intentos)
    }
}

// Recibe el índice de la carta actual y la muestra en el tablero
export const mostrarCarta = (indice: number) => {
    const elementoCarta = document.getElementById(constantes.elementosImagenHTML[indice].acceso);

    // Carga la carta guardada en los elementos de imagen
    if (elementoCarta) {
       elementoCarta.setAttribute("src", tablero.cartas[indice].imagen);
    }
}

// Recibe un mensaje y lo muestra en pantalla
export const mostrarMensaje = (mensaje: string) => {
    if (constantes.elemento_mensaje instanceof HTMLDivElement) {
        constantes.elemento_mensaje.innerText = mensaje;
    }
}