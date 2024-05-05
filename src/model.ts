import { infoCartas } from "./constantes";

export interface Carta {
    idFoto: number; // id del 1 al 6 para 12 cartas, así identificamos rápido si es un gatito ,un perrito...
    // el ID se repete 2 veces en el array de cartas (hay dos cartas de un perro, hay dos cartas de un gato)
    imagen: string; // por comodidad repetimos la url de la imagen
    estaVuelta: boolean;
    encontrada: boolean;
}
  
export interface InfoCarta {
    idFoto: number;
    imagen: string;
}
  
const crearCartaInicial = (idFoto: number, imagen: string): Carta => ({
    idFoto,
    imagen,
    estaVuelta: false,
    encontrada: false,
});

const crearColeccionDeCartasInicial = (infoCartas: InfoCarta[]): Carta[] => {
/* Aquí crearemos un array de cartas a partir de un array de infoCartas
    y duplicaremos las cartas para que haya dos de cada tipo.
*/
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

/*
Aquí definimos el tipo de estado de la partida, la idea es que cuando empiece la partida todas las cartas estén boca abajo y si se hacen click sobre ellas no se volteen.
EstadoPartida = "PartidaNoIniciada", una vez que se pulse Iniciar partida el estado de la partida cambiaría a "CeroCartasLevantadas" y así sucesivamente.
*/

type EstadoPartida =
| "PartidaNoIniciada"
| "CeroCartasLevantadas"
| "UnaCartaLevantada"
| "DosCartasLevantadas"
| "PartidaCompleta";

export interface Tablero {
    cartas: Carta[];
    intentos: number;
    estadoPartida: EstadoPartida;
    indiceCartaVolteadaA?: number;
    indiceCartaVolteadaB?: number;
}

const crearTableroInicial = (): Tablero => ({
    cartas: cartas,
    intentos: 0,
    estadoPartida: "PartidaNoIniciada",
});

export let tablero: Tablero = crearTableroInicial();