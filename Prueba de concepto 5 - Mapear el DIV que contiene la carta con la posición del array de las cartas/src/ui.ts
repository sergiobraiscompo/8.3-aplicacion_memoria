import { tablero } from "./model";
import * as constantes from "./constantes";


// Recibe y muestra el número de intentos
export const mostrarIntentos = () => {
    if (constantes.elemento_intentos instanceof HTMLDivElement) { 
        const texto: string = "Intento:";
        constantes.elemento_intentos.innerText = texto + tablero.intentos;
    }
}

// Recibe y muestra el estado de la partida
export const mostrarEstado = () => {
    if (constantes.elemento_intentos instanceof HTMLDivElement) { 
        const texto: string = "Estado partida:";
        constantes.elemento_intentos.innerText = texto + tablero.estadoPartida;
    }
}

// Recibe el índice de la carta actual y la muestra en el tablero
export const mostrarCarta = (indice: number) => {
    const elementoCarta = document.getElementById(constantes.elementosImagenHTML[indice].acceso);

    // Carga la carta guardada en los elementos de imagen
    if (elementoCarta) {
        elementoCarta.style.visibility = "visible";
    }
}

// Recibe un mensaje y lo muestra en pantalla
export const mostrarMensaje = (mensaje: string) => {
    if (constantes.elemento_mensaje instanceof HTMLDivElement) {
        constantes.elemento_mensaje.innerText = mensaje;
    }
}