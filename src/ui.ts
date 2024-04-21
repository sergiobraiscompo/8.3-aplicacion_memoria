import { tablero } from "./model";
import { iniciaPartida, sePuedeVoltearLaCarta } from "./motor";

// Botón crear partida
const botonEmpezarPartida = document.getElementById("boton-empezar-partida");
botonEmpezarPartida?.addEventListener("click", () => iniciaPartida(tablero));

// Carta 1
const elemento_carta_1 = document.getElementById("carta-element-1");
elemento_carta_1?.addEventListener("click", () => sePuedeVoltearLaCarta(tablero, 0));

// Carta 2
const elemento_carta_2 = document.getElementById("carta-element-2");
elemento_carta_2?.addEventListener("click", () => iniciaPartida(tablero));

// Carta 3
const elemento_carta_3 = document.getElementById("carta-element-3");
elemento_carta_3?.addEventListener("click", () => iniciaPartida(tablero));

// Carta 4
const elemento_carta_4 = document.getElementById("carta-element-4");
elemento_carta_4?.addEventListener("click", () => iniciaPartida(tablero));

// Carta 5
const elemento_carta_5 = document.getElementById("carta-element-5");
elemento_carta_5?.addEventListener("click", () => iniciaPartida(tablero));

// Carta 6
const elemento_carta_6 = document.getElementById("carta-element-6");
elemento_carta_6?.addEventListener("click", () => iniciaPartida(tablero));

// Carta 7
const elemento_carta_7 = document.getElementById("carta-element-7");
elemento_carta_7?.addEventListener("click", () => iniciaPartida(tablero));

// Carta 8
const elemento_carta_8 = document.getElementById("carta-element-8");
elemento_carta_8?.addEventListener("click", () => iniciaPartida(tablero));

// Carta 9
const elemento_carta_9 = document.getElementById("carta-element-9");
elemento_carta_9?.addEventListener("click", () => iniciaPartida(tablero));

// Carta 10
const elemento_carta_10 = document.getElementById("carta-element-10");
elemento_carta_10?.addEventListener("click", () => iniciaPartida(tablero));

// Carta 11
const elemento_carta_11 = document.getElementById("carta-element-11");
elemento_carta_11?.addEventListener("click", () => iniciaPartida(tablero));

// Carta 12
const elemento_carta_12 = document.getElementById("carta-element-12");
elemento_carta_12?.addEventListener("click", () => iniciaPartida(tablero));


// Almacenan las cartas en su elemento HTML
const imagen_1 = document.getElementById("imagen-carta-element-1")?.setAttribute("src", tablero.cartas[0].imagen);
const imagen_2 = document.getElementById("imagen-carta-element-2")?.setAttribute("src", tablero.cartas[1].imagen);
const imagen_3 = document.getElementById("imagen-carta-element-3")?.setAttribute("src", tablero.cartas[2].imagen);
const imagen_4= document.getElementById("imagen-carta-element-4")?.setAttribute("src", tablero.cartas[3].imagen);
const imagen_5 = document.getElementById("imagen-carta-element-5")?.setAttribute("src", tablero.cartas[4].imagen);
const imagen_6 = document.getElementById("imagen-carta-element-6")?.setAttribute("src", tablero.cartas[5].imagen);
const imagen_7 = document.getElementById("imagen-carta-element-7")?.setAttribute("src", tablero.cartas[6].imagen);
const imagen_8 = document.getElementById("imagen-carta-element-8")?.setAttribute("src", tablero.cartas[7].imagen);
const imagen_9 = document.getElementById("imagen-carta-element-9")?.setAttribute("src", tablero.cartas[8].imagen);
const imagen_10 = document.getElementById("imagen-carta-element-10")?.setAttribute("src", tablero.cartas[9].imagen);
const imagen_11 = document.getElementById("imagen-carta-element-11")?.setAttribute("src", tablero.cartas[10].imagen);
const imagen_12 = document.getElementById("imagen-carta-element-12")?.setAttribute("src", tablero.cartas[11].imagen);


export const mostrarCarta = (indice: number) => {
    // Carga la carta guardada en los elementos de imagen
  if (typeof(indice) === "number") {
    switch(indice) {
        case 1: {
            imagen_1;
            break;
        }
        case 2: {
            imagen_2;
            break;
        }
        case 3: {
            imagen_3;
            break;
        }
        case 4: {
            imagen_4;
            break;
        }
        case 5: {
            imagen_5;
            break;
        }
        case 6: {
            imagen_6;
            break;
        }
        case 7: {
            imagen_7;
            break;
        }
        case 8: {
            imagen_8;
            break;
        }
        case 9: {
            imagen_9;
            break;
        }
        case 10: {
            imagen_10;
            break;
        }
        case 11: {
            imagen_11;
            break;
        }
        case 12: {
            imagen_12;
            break;
        }
        default: {
            console.log(`Ha ocurrido un error con al cargar la carta ${indice}`);
            break;
        }
    }}
}