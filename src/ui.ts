import { tablero } from "./model";
import { sePuedeVoltearLaCarta } from "./motor";


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


// Almacenan las cartas en su elemento HTML
const imagen_1 = document.getElementById("imagen-carta-element-1");
const imagen_2 = document.getElementById("imagen-carta-element-2");
const imagen_3 = document.getElementById("imagen-carta-element-3");
const imagen_4 = document.getElementById("imagen-carta-element-4");
const imagen_5 = document.getElementById("imagen-carta-element-5");
const imagen_6 = document.getElementById("imagen-carta-element-6");
const imagen_7 = document.getElementById("imagen-carta-element-7");
const imagen_8 = document.getElementById("imagen-carta-element-8");
const imagen_9 = document.getElementById("imagen-carta-element-9");
const imagen_10 = document.getElementById("imagen-carta-element-10");
const imagen_11 = document.getElementById("imagen-carta-element-11");
const imagen_12 = document.getElementById("imagen-carta-element-12");

export const mostrarCarta = (indice: number) => {
    // Carga la carta guardada en los elementos de imagen
    if (typeof(indice) === "number") {
        switch(indice) {
            case 1: {
                imagen_1?.setAttribute("src", tablero.cartas[indice].imagen);
                break;
            }
            case 2: {
                imagen_2?.setAttribute("src", tablero.cartas[indice].imagen);
                break;
            }
            case 3: {
                imagen_3?.setAttribute("src", tablero.cartas[indice].imagen);
                break;
            }
            case 4: {
                imagen_4?.setAttribute("src", tablero.cartas[indice].imagen);
                break;
            }
            case 5: {
                imagen_5?.setAttribute("src", tablero.cartas[indice].imagen);
                break;
            }
            case 6: {
                imagen_6?.setAttribute("src", tablero.cartas[indice].imagen);
                break;
            }
            case 7: {
                imagen_7?.setAttribute("src", tablero.cartas[indice].imagen);
                break;
            }
            case 8: {
                imagen_8?.setAttribute("src", tablero.cartas[indice].imagen);
                break;
            }
            case 9: {
                imagen_9?.setAttribute("src", tablero.cartas[indice].imagen);
                break;
            }
            case 10: {
                imagen_10?.setAttribute("src", tablero.cartas[indice].imagen);
                break;
            }
            case 11: {
                imagen_11?.setAttribute("src", tablero.cartas[indice].imagen);
                break;
            }
            case 12: {
                imagen_12?.setAttribute("src", tablero.cartas[indice].imagen);
                break;
            }
            default: {
                console.log(`Ha ocurrido un error con al cargar la carta ${indice}`);
                break;
            }
        }
    }
}