/*
Aquí definimos el tipo de estado de la partida, la idea es que cuando empiece la partida todas las cartas estén boca abajo y si se hacen click sobre ellas no se volteen.
EstadoPartida = "PartidaNoIniciada", una vez que se pulse Iniciar partida el estado de la partida cambiaría a "CeroCartasLevantadas" y así sucesivamente.
*/

// Elemento botón crear partida
export const botonEmpezarPartida = document.getElementById("boton-empezar-partida");

// elemento intentos
export const elementoIntentos = document.getElementById("intentos-element");

// elemento mensajes
export const elementoMensaje = document.getElementById("mensaje-element");

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
    {idFoto: 2, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png"},
    {idFoto: 3, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png"},
    {idFoto: 4, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/4.png"},
    {idFoto: 5, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/5.png"},
    {idFoto: 6, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png"},
];

// Contenedores cartas
export const elementoCarta1 = document.getElementById("carta-element-1");
export const elementoCarta2 = document.getElementById("carta-element-2");
export const elementoCarta3 = document.getElementById("carta-element-3");
export const elementoCarta4 = document.getElementById("carta-element-4");
export const elementoCarta5 = document.getElementById("carta-element-5");
export const elementoCarta6 = document.getElementById("carta-element-6");
export const elementoCarta7 = document.getElementById("carta-element-7");
export const elementoCarta8 = document.getElementById("carta-element-8");
export const elementoCarta9 = document.getElementById("carta-element-9");
export const elementoCarta10 = document.getElementById("carta-element-10");
export const elementoCarta11 = document.getElementById("carta-element-11");
export const elementoCarta12 = document.getElementById("carta-element-12");





//  Imágenes de las cartas del tablero
export const elementosImagenHTML = [
    "imagen-carta-element-1",
    "imagen-carta-element-2",
    "imagen-carta-element-3",
    "imagen-carta-element-4",
    "imagen-carta-element-5",
    "imagen-carta-element-6",
    "imagen-carta-element-7",
    "imagen-carta-element-8",
    "imagen-carta-element-9",
    "imagen-carta-element-10",
    "imagen-carta-element-11",
    "imagen-carta-element-12"
]