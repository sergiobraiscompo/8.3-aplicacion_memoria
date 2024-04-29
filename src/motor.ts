/*
En el motor nos va a hacer falta un método para barajar cartas
*/

// import * as constantes from "./constantes";
import { Carta, Tablero, tablero } from "./model";
import { mostrarCarta } from "./ui";
import { elementosImagenHTML } from "./constantes";

const barajarCartas = (cartas : Carta[]): Carta[] => {
    // Mientras queden elementos a mezclar
    let current_index = cartas.length;
    let contador = 0;

    while (contador < tablero.cartas.length) {
      // Coge un elemento restante
      let random_index = Math.floor(Math.random() * current_index);
      current_index--;
      
      // Mezcla la lista con el elemento aleatorio
      [cartas[current_index], tablero.cartas[random_index]] = 
      [tablero.cartas[random_index], cartas[current_index]];
      contador += 1;
    }
    
    return cartas;
  };
  
/*
  Una carta se puede voltear si no está encontrada y no está ya volteada, o no hay dos cartas ya volteadas
*/
export const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number ): boolean => {
  // Variable que almacena si la carta es volteable
  let cartaVolteable: boolean = false;
  const indiceAcceso = indice - 1;

  // Comprueba si no hay 2 cartas volteadas y el índice no aparece en el tablero
  if (tablero.estadoPartida === "UnaCartaLevantada" && !tablero.cartas[indiceAcceso].estaVuelta) {
    cartaVolteable = true;
    tablero.indiceCartaVolteadaB = indiceAcceso;
    tablero.estadoPartida = "DosCartasLevantadas";
    voltearLaCarta(tablero, indice);
    console.log("estado partida:", tablero.estadoPartida);

    if (tablero.estadoPartida === "DosCartasLevantadas" && tablero.indiceCartaVolteadaA && tablero.indiceCartaVolteadaB ) {
      console.log("estado partida:", tablero.estadoPartida);
      sonPareja(tablero.indiceCartaVolteadaA, tablero.indiceCartaVolteadaB, tablero);
    }
  }
  
  if (tablero.estadoPartida === "CeroCartasLevantadas" && !tablero.cartas[indiceAcceso].estaVuelta) {
    cartaVolteable = true;
    tablero.indiceCartaVolteadaA = indiceAcceso;
    tablero.estadoPartida = "UnaCartaLevantada";
    voltearLaCarta(tablero, indice);
    console.log("estado partida:", tablero.estadoPartida)
  }

  return cartaVolteable;
};

// Llama a sePuedeVoltearLaCarta y si devuelve true cambia la imagen y el estado de la carta
const voltearLaCarta = (tablero: Tablero, indice: number): void => {
  const indiceAcceso = indice - 1;

  // Recibe el número de carta y cambia el src de la imagen
  if (indice && !tablero.cartas[indiceAcceso].estaVuelta && !tablero.cartas[indiceAcceso].encontrada) {
    switch(indice) {
      case 1: {
        mostrarCarta(indice);
        tablero.cartas[indiceAcceso].estaVuelta = true;
        break;
      }
      case 2: {
        mostrarCarta(indice);
        tablero.cartas[indiceAcceso].estaVuelta = true;
        break;
      }
      case 3: {
        mostrarCarta(indice);
        tablero.cartas[indiceAcceso].estaVuelta = true;
        break;
      }
      case 4: {
        mostrarCarta(indice);
        tablero.cartas[indiceAcceso].estaVuelta = true;
        break;
      }
      case 5: {
        mostrarCarta(indice);
        tablero.cartas[indiceAcceso].estaVuelta = true;
        break;
      }
      case 6: {
        mostrarCarta(indice);
        tablero.cartas[indiceAcceso].estaVuelta = true;
        break;
      }
      case 7: {
        mostrarCarta(indice);
        tablero.cartas[indiceAcceso].estaVuelta = true;
        break;
      }
      case 8: {
        mostrarCarta(indice);
        tablero.cartas[indiceAcceso].estaVuelta = true;
        break;
      }
      case 9: {
        mostrarCarta(indice);
        tablero.cartas[indiceAcceso].estaVuelta = true;
        break;
      }
      case 10: {
        mostrarCarta(indice);
        tablero.cartas[indiceAcceso].estaVuelta = true;
        break;
      }
      case 11: {
        mostrarCarta(indice);
        tablero.cartas[indiceAcceso].estaVuelta = true;
        break;
      }
      case 12: {
        mostrarCarta(indice);
        tablero.cartas[indiceAcceso].estaVuelta = true;
        break;
      }
      default: {
        console.log(`Ha ocurrido un error con al cargar el elemento ${indice}`);
        break;
      }
    }
  }

  // Recibe el número de carta y quita el src de la imagen
  if (indice && tablero.cartas[indiceAcceso].estaVuelta && !tablero.cartas[indiceAcceso].encontrada) {
    switch(indice) {
      case 1: {
        document.getElementById(elementosImagenHTML[indiceAcceso].acceso)?.setAttribute("src", "");
        console.log(tablero.cartas[indiceAcceso].estaVuelta)
        break;
      }
      case 2: {
        document.getElementById(elementosImagenHTML[indiceAcceso].acceso)?.setAttribute("src", "");
        console.log(tablero.cartas[indiceAcceso].estaVuelta)
        break;
      }
      case 3: {
        document.getElementById(elementosImagenHTML[indiceAcceso].acceso)?.setAttribute("src", "");
        console.log(tablero.cartas[indiceAcceso].estaVuelta)
        break;
      }
      case 4: {
        document.getElementById(elementosImagenHTML[indiceAcceso].acceso)?.setAttribute("src", "");
        console.log(tablero.cartas[indiceAcceso].estaVuelta)
        break;
      }
      case 5: {
        document.getElementById(elementosImagenHTML[indiceAcceso].acceso)?.setAttribute("src", "");
        console.log(tablero.cartas[indiceAcceso].estaVuelta)
        break;
      }
      case 6: {
        document.getElementById(elementosImagenHTML[indiceAcceso].acceso)?.setAttribute("src", "");
        console.log(tablero.cartas[indiceAcceso].estaVuelta)
        break;
      }
      case 7: {
        document.getElementById(elementosImagenHTML[indiceAcceso].acceso)?.setAttribute("src", "");
        console.log(tablero.cartas[indiceAcceso].estaVuelta)
        break;
      }
      case 8: {
        document.getElementById(elementosImagenHTML[indiceAcceso].acceso)?.setAttribute("src", "");
        console.log(tablero.cartas[indiceAcceso].estaVuelta)
        break;
      }
      case 9: {
        document.getElementById(elementosImagenHTML[indiceAcceso].acceso)?.setAttribute("src", "");
        console.log(tablero.cartas[indiceAcceso].estaVuelta)
        break;
      }
      case 10: {
        document.getElementById(elementosImagenHTML[indiceAcceso].acceso)?.setAttribute("src", "");
        console.log(tablero.cartas[indiceAcceso].estaVuelta)
        break;
      }
      case 11: {
        document.getElementById(elementosImagenHTML[indiceAcceso].acceso)?.setAttribute("src", "");
        console.log(tablero.cartas[indiceAcceso].estaVuelta)
        break;
      }
      case 12: {
        document.getElementById(elementosImagenHTML[indiceAcceso].acceso)?.setAttribute("src", "");
        console.log(tablero.cartas[indiceAcceso].estaVuelta)
        break;
      }
      default: {
          console.log(`Ha ocurrido un error con al cargar la carta ${indice}`);
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
  const indicesAcceso = [indiceA, indiceB];
  let ambasSonPareja: boolean = tablero.cartas[indicesAcceso[0]].idFoto === tablero.cartas[indicesAcceso[1]].idFoto;

  if (ambasSonPareja) {
    parejaEncontrada(tablero, indiceA, indiceB);
  } else {
    parejaNoEncontrada(tablero, indiceA, indiceB);
  }

  console.log("indice a:", tablero.cartas[indicesAcceso[0]].idFoto, "indice b:", tablero.cartas[indicesAcceso[1]].idFoto, "ambas son pareja:", ambasSonPareja);
  return ambasSonPareja;
};

/*
  Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
*/
const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number) : void => {
  // Comprueba si las cartas son pareja
  // En caso de serlo inicia esPartidaCompleta
  console.log("pareja encontrada");
  tablero.cartas[indiceA - 1].encontrada = true;
  tablero.cartas[indiceB - 1].encontrada = true;
  esPartidaCompleta(tablero);
};

/*
Aquí asumimos que no son pareja y las volvemos a poner boca abajo
*/
const parejaNoEncontrada = (tablero: Tablero, indiceA :number, indiceB :number) : void => {
  // Comprueba si las cartas son pareja
  // En caso de no serlo voltea las cartas
  // let cartasNoPareja: number[] = [indiceA, indiceB];
  console.log("pareja no encontrada");
  setTimeout(() => {
    sePuedeVoltearLaCarta(tablero, indiceA);
    sePuedeVoltearLaCarta(tablero, indiceB);
  }, 1000);

  // cartasNoPareja.every((carta => {  , tablero.estadoPartida = "CeroCartasLevantadas"}))
  
};

/*
  Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
*/
export const esPartidaCompleta = (tablero: Tablero): boolean => {
  // Almacena el estado de la partida en local
  let partidaGanada: boolean = false;
  let contador: number = 0;

  // Comprueba si se han encontrado todas las parejas
  // TODO Pendiente hacer con array method every
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
  if (tablero.estadoPartida === "PartidaNoIniciada" || tablero.estadoPartida === "PartidaCompleta" || "DosCartasLevantadas") {
    console.log("Iniciando partida.");
    
    // Tablero inicial
    tablero.cartas.forEach(carta => {
      
      carta.estaVuelta = false;
      carta.encontrada = false;
    })

    tablero.estadoPartida = "CeroCartasLevantadas";
    tablero.indiceCartaVolteadaA = -1;
    tablero.indiceCartaVolteadaB = -1;
    console.log(tablero.estadoPartida);

    // Cambia el estado de la partida y la prepara
    barajarCartas(tablero.cartas);
  }
};