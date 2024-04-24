import { tablero } from "./model";
import { sePuedeVoltearLaCarta } from "./motor";
import * as htmlElements from "./constantes";


// Botón crear partida
export const botonEmpezarPartida = document.getElementById("boton-empezar-partida");

// Carta 1
export const elemento_carta_1 = document.getElementById("carta-element-1");
elemento_carta_1?.addEventListener("click", () => sePuedeVoltearLaCarta(tablero, 1));

// Carta 2
const elemento_carta_2 = document.getElementById("carta-element-2");
elemento_carta_2?.addEventListener("click", () => sePuedeVoltearLaCarta(tablero, 2));

// Carta 3
const elemento_carta_3 = document.getElementById("carta-element-3");
elemento_carta_3?.addEventListener("click", () => sePuedeVoltearLaCarta(tablero, 3));

// Carta 4
const elemento_carta_4 = document.getElementById("carta-element-4");
elemento_carta_4?.addEventListener("click", () => sePuedeVoltearLaCarta(tablero, 4));

// Carta 5
const elemento_carta_5 = document.getElementById("carta-element-5");
elemento_carta_5?.addEventListener("click", () => sePuedeVoltearLaCarta(tablero, 5));

// Carta 6
const elemento_carta_6 = document.getElementById("carta-element-6");
elemento_carta_6?.addEventListener("click", () => sePuedeVoltearLaCarta(tablero, 6));

// Carta 7
const elemento_carta_7 = document.getElementById("carta-element-7");
elemento_carta_7?.addEventListener("click", () => sePuedeVoltearLaCarta(tablero, 7));

// Carta 8
const elemento_carta_8 = document.getElementById("carta-element-8");
elemento_carta_8?.addEventListener("click", () => sePuedeVoltearLaCarta(tablero, 8));

// Carta 9
const elemento_carta_9 = document.getElementById("carta-element-9");
elemento_carta_9?.addEventListener("click", () => sePuedeVoltearLaCarta(tablero, 9));

// Carta 10
const elemento_carta_10 = document.getElementById("carta-element-10");
elemento_carta_10?.addEventListener("click", () => sePuedeVoltearLaCarta(tablero, 10));

// Carta 11
const elemento_carta_11 = document.getElementById("carta-element-11");
elemento_carta_11?.addEventListener("click", () => sePuedeVoltearLaCarta(tablero, 11));

// Carta 12
const elemento_carta_12 = document.getElementById("carta-element-12");
elemento_carta_12?.addEventListener("click", () => sePuedeVoltearLaCarta(tablero, 12));


export const mostrarCarta = (indice: number) => {
    // Carga la carta guardada en los elementos de imagen
    if (typeof(indice) === "number") {
        switch(indice) {
            case 1: {
                htmlElements.imagen_1?.setAttribute("src", tablero.cartas[indice].imagen);
                break;
            }
            case 2: {
                htmlElements.imagen_2?.setAttribute("src", tablero.cartas[indice].imagen);
                break;
            }
            case 3: {
                htmlElements.imagen_3?.setAttribute("src", tablero.cartas[indice].imagen);
                break;
            }
            case 4: {
                htmlElements.imagen_4?.setAttribute("src", tablero.cartas[indice].imagen);
                break;
            }
            case 5: {
                htmlElements.imagen_5?.setAttribute("src", tablero.cartas[indice].imagen);
                break;
            }
            case 6: {
                htmlElements.imagen_6?.setAttribute("src", tablero.cartas[indice].imagen);
                break;
            }
            case 7: {
                htmlElements.imagen_7?.setAttribute("src", tablero.cartas[indice].imagen);
                break;
            }
            case 8: {
                htmlElements.imagen_8?.setAttribute("src", tablero.cartas[indice].imagen);
                break;
            }
            case 9: {
                htmlElements.imagen_9?.setAttribute("src", tablero.cartas[indice].imagen);
                break;
            }
            case 10: {
                htmlElements.imagen_10?.setAttribute("src", tablero.cartas[indice].imagen);
                break;
            }
            case 11: {
                htmlElements.imagen_11?.setAttribute("src", tablero.cartas[indice].imagen);
                break;
            }
            case 12: {
                htmlElements.imagen_12?.setAttribute("src", tablero.cartas[indice].imagen);
                break;
            }
            default: {
                console.log(`Ha ocurrido un error con al cargar la carta ${indice}`);
                break;
            }
        }
    }
}