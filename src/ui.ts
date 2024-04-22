import { tablero } from "./model";
import { sePuedeVoltearLaCarta } from "./motor";


// Botón crear partida
export const botonEmpezarPartida = document.getElementById("boton-empezar-partida");

// Carta 1
const elemento_carta_1 = document.getElementById("carta-element-1");
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
    // Borrar
    console.log("mostrarCarta")
    console.log("cargando carta ", indice);
    
    // Almacenan las cartas en su elemento HTML
    const imagen_1 = document.getElementById("imagen-carta-element-1")?.setAttribute("src", tablero.cartas[0].imagen);
    const imagen_2 = document.getElementById("imagen-carta-element-2")?.setAttribute("src", tablero.cartas[1].imagen);
    const imagen_3 = document.getElementById("imagen-carta-element-3")?.setAttribute("src", tablero.cartas[2].imagen);
    const imagen_4 = document.getElementById("imagen-carta-element-4")?.setAttribute("src", tablero.cartas[3].imagen);
    const imagen_5 = document.getElementById("imagen-carta-element-5")?.setAttribute("src", tablero.cartas[4].imagen);
    const imagen_6 = document.getElementById("imagen-carta-element-6")?.setAttribute("src", tablero.cartas[5].imagen);
    const imagen_7 = document.getElementById("imagen-carta-element-7")?.setAttribute("src", tablero.cartas[6].imagen);
    const imagen_8 = document.getElementById("imagen-carta-element-8")?.setAttribute("src", tablero.cartas[7].imagen);
    const imagen_9 = document.getElementById("imagen-carta-element-9")?.setAttribute("src", tablero.cartas[8].imagen);
    const imagen_10 = document.getElementById("imagen-carta-element-10")?.setAttribute("src", tablero.cartas[9].imagen);
    const imagen_11 = document.getElementById("imagen-carta-element-11")?.setAttribute("src", tablero.cartas[10].imagen);
    const imagen_12 = document.getElementById("imagen-carta-element-12")?.setAttribute("src", tablero.cartas[11].imagen);

    // Carga la carta guardada en los elementos de imagen
    if (typeof(indice) === "number") {
        switch(indice) {
            case 1: {
                console.log(imagen_1);
                imagen_1;
                break;
            }
            case 2: {
                console.log(imagen_2);
                imagen_2;
                break;
            }
            case 3: {
                console.log(imagen_3);
                imagen_3;
                break;
            }
            case 4: {
                console.log(imagen_4);
                imagen_4;
                break;
            }
            case 5: {
                console.log(imagen_5);
                imagen_5;
                break;
            }
            case 6: {
                console.log(imagen_6);
                imagen_6;
                break;
            }
            case 7: {
                console.log(imagen_7);
                imagen_7;
                break;
            }
            case 8: {
                console.log(imagen_8);
                imagen_8;
                break;
            }
            case 9: {
                console.log(imagen_9);
                imagen_9;
                break;
            }
            case 10: {
                console.log(imagen_10);
                imagen_10;
                break;
            }
            case 11: {
                console.log(imagen_11);
                imagen_11;
                break;
            }
            case 12: {
                console.log(imagen_12);
                imagen_12;
                break;
            }
            default: {
                console.log(`Ha ocurrido un error con al cargar la carta ${indice}`);
                break;
            }
        }
    }
}