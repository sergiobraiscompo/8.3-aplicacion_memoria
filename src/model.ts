import { Carta, InfoCarta, infoCartas, Tablero } from "./constantes";

// Crea carta por defecto
const crearCartaInicial = (idFoto: number, imagen: string): Carta => ({
    idFoto,
    imagen,
    estaVuelta: false,
    encontrada: false,
});

/* Crea un array de 12 cartas de tipo infoCarta */
const crearColeccionDeCartasInicial = (infoCartas: InfoCarta[]): Carta[] => {
    let coleccion_inicial_cartas: Carta[] = [];
    let contador = 0;

    while (contador < infoCartas.length){
        const carta = infoCartas[contador];
        coleccion_inicial_cartas.push(crearCartaInicial(carta.idFoto, carta.imagen));
        contador += 1;
    }
    
    return coleccion_inicial_cartas;
};

export let cartas: Carta[] = crearColeccionDeCartasInicial(infoCartas);

const crearTableroInicial = (): Tablero => ({
    cartas: cartas,
    intentos: 0,
    estadoPartida: "PartidaNoIniciada",
});

export let tablero: Tablero = crearTableroInicial();