// import * as constantes from "./constantes";
import { Carta, Tablero, tablero } from "./model";
import { mostrarCarta } from "./ui";
import { elementosImagenHTML } from "./constantes";

// Rebice el array tablero.cartas y devuelve los elementos mezclados
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

  // Recibe el número de carta y llama a mostrarCarta
  !tablero.cartas[indice - 1].estaVuelta && !tablero.cartas[indice - 1].encontrada
  ? (
    mostrarCarta(indice), 
    tablero.cartas[indice - 1].estaVuelta = true,
    console.log(`carta ${indice - 1} volteada: ${tablero.cartas[indice - 1].estaVuelta}`)
    ) 
  : (
    console.log("quitando src de la imagen"),
    document.getElementById(elementosImagenHTML[indice].acceso)?.setAttribute("src", "")
  )
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
  // En caso de no serlo voltea las cartas
  console.log("pareja no encontrada");

  setTimeout(() => {
    voltearLaCarta(tablero, indiceA);
    voltearLaCarta(tablero, indiceB);
    tablero.estadoPartida = "CeroCartasLevantadas";
    console.log("Volteando cartas de nuevo");
    console.log(`La carta ${indiceA} volteada: ${tablero.cartas[indiceA].estaVuelta}`);
    console.log(`La carta ${indiceB} volteada: ${tablero.cartas[indiceB].estaVuelta}`);
  }, 1000);
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
  tablero.cartas.every((carta) => {
    carta.encontrada;
  })

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