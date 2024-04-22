/*
En el motor nos va a hacer falta un método para barajar cartas
*/

import { infoCartas } from "./constantes";
import { Carta, Tablero, cartas, tablero } from "./model";
import { mostrarCarta } from "./ui";

const barajarCartas = (cartas : Carta[]): Carta[] => {
    // Mientras queden elementos a mezclar
    let current_index = cartas.length;

    while (current_index !=0) {
      // Coge un elemento restante
      let random_index = Math.floor(Math.random() * current_index);
      current_index--;
      
      // Mezcla la lista con el elemento aleatorio
      [tablero.cartas[current_index], tablero.cartas[random_index]] = 
      [tablero.cartas[random_index], tablero.cartas[current_index]];
    }

    return cartas;
  };

/*
  Una carta se puede voltear si no está encontrada y no está ya volteada, o no hay dos cartas ya volteadas
*/
export const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number ): boolean => {
  // Variable que almacena si la carta es volteable
  let cartaVolteable: boolean = false;
  let estadoPartida = tablero.estadoPartida;

  // Comprueba si no hay 2 cartas volteadas y el índice no aparece en el tablero
  if (estadoPartida === "UnaCartaLevantada") {
    cartaVolteable = true;
    tablero.indiceCartaVolteadaB = indice;
    estadoPartida = "DosCartasLevantadas";
  }

  if (estadoPartida === "CeroCartasLevantadas") {
    cartaVolteable = true;
    tablero.indiceCartaVolteadaA = indice;
    estadoPartida = "UnaCartaLevantada";
  } 

  if (estadoPartida === "DosCartasLevantadas" && tablero.indiceCartaVolteadaA && tablero.indiceCartaVolteadaB ) {
    sonPareja(tablero.indiceCartaVolteadaA, tablero.indiceCartaVolteadaB, tablero);
  }

  return cartaVolteable;
};

// Llama a sePuedeVoltearLaCarta y si devuelve true cambia la imagen y el estado de la carta
const voltearLaCarta = (tablero: Tablero, indice: number) : void => {

  // Recibe el número de carta y cambia el src de la imagen
  if (sePuedeVoltearLaCarta(tablero, indice)) {
    switch(indice) {
      case 1: {
        mostrarCarta(indice);
        cartas[indice].estaVuelta = true;
        break;
      }
      case 2: {
        mostrarCarta(indice);
        cartas[indice].estaVuelta = true;
        break;
      }
      case 3: {
        mostrarCarta(indice);
        cartas[indice].estaVuelta = true;
        break;
      }
      case 4: {
        mostrarCarta(indice);
        cartas[indice].estaVuelta = true;
        break;
      }
      case 5: {
        mostrarCarta(indice);
        cartas[indice].estaVuelta = true;
        break;
      }
      case 6: {
        mostrarCarta(indice);
        cartas[indice].estaVuelta = true;
        break;
      }
      case 7: {
        mostrarCarta(indice);
        cartas[indice].estaVuelta = true;
        break;
      }
      case 8: {
        mostrarCarta(indice);
        cartas[indice].estaVuelta = true;
        break;
      }
      case 9: {
        mostrarCarta(indice);
        cartas[indice].estaVuelta = true;
        break;
      }
      case 10: {
        mostrarCarta(indice);
        cartas[indice].estaVuelta = true;
        break;
      }
      case 11: {
        mostrarCarta(indice);
        cartas[indice].estaVuelta = true;
        break;
      }
      case 12: {
        mostrarCarta(indice);
        cartas[indice].estaVuelta = true;
        break;
      }
      default: {
        console.log(`Ha ocurrido un error con al cargar el elemento ${indice}`);
        break;
      }
    }
  }
};

/*
  Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
*/
export const sonPareja = (indiceA: number, indiceB: number, tablero: Tablero): boolean => {
  // Variable que almacena si el id de ambas fotos coinciden
  let ambasSonPareja: boolean = false;

  // Comprueba si las dos cartas volteadas son pareja
  if (infoCartas[indiceA].idFoto === infoCartas[indiceB].idFoto) {
    ambasSonPareja = true;
    parejaEncontrada(tablero, indiceA, indiceB);
  } else {
    ambasSonPareja = false;
    parejaNoEncontrada(tablero, indiceA, indiceB);
  }

  return ambasSonPareja;
};

/*
  Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
*/
const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number) : void => {
  // Comprueba si las cartas son pareja
  // En caso de serlo inicia esPartidaCompleta
    tablero.cartas[indiceA].encontrada = true;
    tablero.cartas[indiceB].encontrada = true;
    esPartidaCompleta(tablero);
};

/*
  Aquí asumimos que no son pareja y las volvemos a poner boca abajo
*/
const parejaNoEncontrada = (tablero: Tablero, indiceA :number, indiceB : number) : void => {
  // Comprueba si las cartas son pareja
  // En caso de no serlo voltea las cartas
  let cartasNoPareja: number[] = [indiceA, indiceB];
  cartasNoPareja.every((carta => {voltearLaCarta(tablero, carta);}))
  tablero.estadoPartida = "CeroCartasLevantadas";
};

/*
  Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
*/
export const esPartidaCompleta = (tablero: Tablero): boolean => {
  // Almacena el estado de la partida en local
  let partidaGanada: boolean = false;
  let contador: number = 0;

  // Comprueba si se han encontrado todas las parejas
  while (contador < tablero.cartas.length) {
    const estadoCarta = tablero.cartas[contador].encontrada;
    if (estadoCarta) {
      partidaGanada = true;
      tablero.estadoPartida = "PartidaCompleta";
    } else {
      partidaGanada = false;
      tablero.estadoPartida = "CeroCartasLevantadas";
    }

  contador += 1;
}

return partidaGanada;
};

export const iniciaPartida = (tablero: Tablero): void => {
  console.log("Iniciando partida.");
  if (tablero.estadoPartida === "PartidaNoIniciada") {
    // Cambia el estado de la partida y la prepara
    barajarCartas(tablero.cartas);
    tablero.estadoPartida = "CeroCartasLevantadas";
  }
};