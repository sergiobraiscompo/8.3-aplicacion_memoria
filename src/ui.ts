import { tablero } from "./model";
import { iniciaPartida } from "./motor";

// Botón crear partida
const botonEmpezarPartida = document.getElementById("boton-empezar-partida");
botonEmpezarPartida?.addEventListener("click", () => iniciaPartida(tablero));


// Carta 1
const clickCarta1 = document.getElementById("boton-empezar-partida");
clickCarta1?.addEventListener("click", () => voltea(tablero));

// Carta 2
const clickCarta2 = document.getElementById("boton-empezar-partida");
clickCarta2?.addEventListener("click", () => iniciaPartida(tablero));

// Carta 3
const clickCarta3 = document.getElementById("boton-empezar-partida");
clickCarta3?.addEventListener("click", () => iniciaPartida(tablero));

// Carta 4
const clickCarta4 = document.getElementById("boton-empezar-partida");
clickCarta4?.addEventListener("click", () => iniciaPartida(tablero));

// Carta 5
const clickCarta5 = document.getElementById("boton-empezar-partida");
clickCarta5?.addEventListener("click", () => iniciaPartida(tablero));

// Carta 6
const clickCarta6 = document.getElementById("boton-empezar-partida");
clickCarta6?.addEventListener("click", () => iniciaPartida(tablero));

// Carta 7
const clickCarta7 = document.getElementById("boton-empezar-partida");
clickCarta7?.addEventListener("click", () => iniciaPartida(tablero));

// Carta 8
const clickCarta8 = document.getElementById("boton-empezar-partida");
clickCarta8?.addEventListener("click", () => iniciaPartida(tablero));

// Carta 9
const clickCarta9 = document.getElementById("boton-empezar-partida");
clickCarta9?.addEventListener("click", () => iniciaPartida(tablero));

// Carta 10
const clickCarta10 = document.getElementById("boton-empezar-partida");
clickCarta10?.addEventListener("click", () => iniciaPartida(tablero));

// Carta 11
const clickCarta11 = document.getElementById("boton-empezar-partida");
clickCarta11?.addEventListener("click", () => iniciaPartida(tablero));

// Carta 12
const clickCarta12 = document.getElementById("boton-empezar-partida");
clickCarta12?.addEventListener("click", () => iniciaPartida(tablero));

const imagen_element_1 = document.getElementById("imagen-carta-element-1")?.setAttribute("src", tablero.cartas[1].imagen);
const imagen_element_2 = document.getElementById("imagen-carta-element-2")?.setAttribute("src", tablero.cartas[2].imagen);
const imagen_element_3 = document.getElementById("imagen-carta-element-3")?.setAttribute("src", tablero.cartas[3].imagen);
const imagen_element_4 = document.getElementById("imagen-carta-element-4")?.setAttribute("src", tablero.cartas[4].imagen);
const imagen_element_5 = document.getElementById("imagen-carta-element-5")?.setAttribute("src", tablero.cartas[5].imagen);
const imagen_element_6 = document.getElementById("imagen-carta-element-6")?.setAttribute("src", tablero.cartas[6].imagen);
const imagen_element_7 = document.getElementById("imagen-carta-element-7")?.setAttribute("src", tablero.cartas[7].imagen);
const imagen_element_8 = document.getElementById("imagen-carta-element-8")?.setAttribute("src", tablero.cartas[8].imagen);
const imagen_element_9 = document.getElementById("imagen-carta-element-9")?.setAttribute("src", tablero.cartas[9].imagen);
const imagen_element_10 = document.getElementById("imagen-carta-element-10")?.setAttribute("src", tablero.cartas[10].imagen);
const imagen_element_11 = document.getElementById("imagen-carta-element-11")?.setAttribute("src", tablero.cartas[11].imagen);
const imagen_element_12 = document.getElementById("imagen-carta-element-12")?.setAttribute("src", tablero.cartas[12].imagen);

export const mostrarCarta = (indice: number) => {
    // Recibe el número de carta y cambia el src de la imagen
    const cartas = tablero.cartas;

  if (typeof(indice) === "number") {
    switch(indice) {
        case 1: {
            cartas[indice].estaVuelta = true;
            break;
        }
        case 2: {
            cartas[indice].estaVuelta = true;
            break;
        }
        case 3: {
            cartas[indice].estaVuelta = true;
            break;
        }
        case 4: {
            cartas[indice].estaVuelta = true;
            break;
        }
        case 5: {
            cartas[indice].estaVuelta = true;
            break;
        }
        case 6: {
            cartas[indice].estaVuelta = true;
            break;
        }
        case 7: {
            cartas[indice].estaVuelta = true;
            break;
        }
        case 8: {
            cartas[indice].estaVuelta = true;
            break;
        }
        case 9: {
            cartas[indice].estaVuelta = true;
            break;
        }
        case 10: {
            cartas[indice].estaVuelta = true;
            break;
        }
        case 11: {
            cartas[indice].estaVuelta = true;
            break;
        }
        case 12: {
            cartas[indice].estaVuelta = true;
            break;
        }
        default: {
        console.log(`Ha ocurrido un error con al cargar el elemento imagen-carta-element ${indice}`);
        break;
        }
    }}
}