/*
Aquí definimos el tipo de estado de la partida, la idea es que cuando empiece la partida todas las cartas estén boca abajo y si se hacen click sobre ellas no se volteen.
EstadoPartida = "PartidaNoIniciada", una vez que se pulse Iniciar partida el estado de la partida cambiaría a "CeroCartasLevantadas" y así sucesivamente.
*/

// Elemento botón crear partida
export const botonEmpezarPartida = document.getElementById("boton-empezar-partida");

// elemento intentos
export const elemento_intentos = document.getElementById("intentos-element");

// elemento mensajes
export const elemento_mensaje = document.getElementById("mensaje-element");

// Elementos cartas
export const elemento_carta_1 = document.getElementById("carta-element-1");
export const elemento_carta_2 = document.getElementById("carta-element-2");
export const elemento_carta_3 = document.getElementById("carta-element-3");
export const elemento_carta_4 = document.getElementById("carta-element-4");
export const elemento_carta_5 = document.getElementById("carta-element-5");
export const elemento_carta_6 = document.getElementById("carta-element-6");
export const elemento_carta_7 = document.getElementById("carta-element-7");
export const elemento_carta_8 = document.getElementById("carta-element-8");
export const elemento_carta_9 = document.getElementById("carta-element-9");
export const elemento_carta_10 = document.getElementById("carta-element-10");
export const elemento_carta_11 = document.getElementById("carta-element-11");
export const elemento_carta_12 = document.getElementById("carta-element-12");

export type EstadoPartida =
| "PartidaNoIniciada"
| "CeroCartasLevantadas"
| "UnaCartaLevantada"
| "DosCartasLevantadas"
| "PartidaCompleta";

export interface Carta {
    idFoto: number;
    imagen: string;
    estaVuelta: boolean;
    encontrada: boolean;
}

export interface InfoCarta {
    idFoto: number;
    imagen: string;
}

export interface Tablero {
    cartas: Carta[];
    intentos: number;
    estadoPartida: EstadoPartida;
    indiceCartaVolteadaA?: number;
    indiceCartaVolteadaB?: number;
}

// Relaciona Los ids de las cartas con sus respectivas URL
export const infoCartas: InfoCarta[] = [
    {idFoto: 1, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png"},
    {idFoto: 1, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png"},
    {idFoto: 2, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png"},
    {idFoto: 2, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png"},
    {idFoto: 3, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png"},
    {idFoto: 3, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png"},
    {idFoto: 4, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/4.png"},
    {idFoto: 4, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/4.png"},
    {idFoto: 5, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/5.png"},
    {idFoto: 5, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/5.png"},
    {idFoto: 6, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png"},
    {idFoto: 6, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png"}
];

// Almacenan las cartas en su elemento HTML
export const elementosImagenHTML = [
    { elemento: "imagen_1", acceso: "imagen-carta-element-1" },
    { elemento: "imagen_2", acceso: "imagen-carta-element-2" },
    { elemento: "imagen_3", acceso: "imagen-carta-element-3" },
    { elemento: "imagen_4", acceso: "imagen-carta-element-4" },
    { elemento: "imagen_5", acceso: "imagen-carta-element-5" },
    { elemento: "imagen_6", acceso: "imagen-carta-element-6" },
    { elemento: "imagen_7", acceso: "imagen-carta-element-7" },
    { elemento: "imagen_8", acceso: "imagen-carta-element-8" },
    { elemento: "imagen_9", acceso: "imagen-carta-element-9" },
    { elemento: "imagen_10", acceso: "imagen-carta-element-10" },
    { elemento: "imagen_11", acceso: "imagen-carta-element-11" },
    { elemento: "imagen_12", acceso: "imagen-carta-element-12" }
];