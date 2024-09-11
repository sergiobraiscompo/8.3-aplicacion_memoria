// import * as constantes from "./constantes";
import { tablero } from "./model";
import { mostrarCarta, mostrarEstado, mostrarIntentos, mostrarMensaje } from "./ui";
import * as constantes from "./constantes";

// Rebice el array tablero.cartas y devuelve los elementos mezclados
const barajarCartas = (cartas : constantes.Carta[]): constantes.Carta[] => {
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

// Una carta se puede voltear si no está encontrada y no está ya volteada, o no hay dos cartas ya volteadas
export const sePuedeVoltearLaCarta = (tablero: constantes.Tablero, indice: number ): boolean => {
  // Variable que almacena si la carta es volteable
  const carta = tablero.cartas[indice];
  
  if (carta.estaVuelta) {
    mostrarMensaje("Esta carta ya está girada, elige otra carta que esté boca abajo.");
  }

  if (carta.encontrada) {
    mostrarMensaje("Esta carta ya tiene pareja, elige otra carta que esté boca abajo.");
  }

  if(tablero.estadoPartida === "PartidaNoIniciada" || tablero.estadoPartida === "PartidaCompleta") {
    mostrarMensaje("Por favor inicia una nueva  partida.")
  }

  // Comprueba si no hay 2 cartas volteadas y el índice no aparece en el tablero
  return (!carta.estaVuelta && !carta.encontrada) && (tablero.estadoPartida === "UnaCartaLevantada" || tablero.estadoPartida === "CeroCartasLevantadas")
    ? true
    : false;
}

// Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa
const parejaEncontrada = (tablero: constantes.Tablero, indiceA: number, indiceB: number) :void => {
  // Comprueba si las cartas son pareja
  tablero.cartas[indiceA].encontrada = true;
  tablero.cartas[indiceB].encontrada = true;
  tablero.estadoPartida = "CeroCartasLevantadas";
  
  tablero.indiceCartaVolteadaA = -1;
  tablero.indiceCartaVolteadaB = -1;
  
  esPartidaCompleta(tablero);
  mostrarEstado();
  mostrarIntentos();
  mostrarMensaje("¡Pareja encontrada!");
};

// Aquí asumimos que no son pareja y las volvemos a poner boca abajo
const parejaNoEncontrada = (tablero: constantes.Tablero, indiceA :number, indiceB :number) : void => {
  
  setTimeout(() => {
    const imagenA = document.getElementById(constantes.elementosImagenHTML[indiceA].acceso);
    const imagenB = document.getElementById(constantes.elementosImagenHTML[indiceB].acceso);
    
    if (imagenA && imagenB) {
      imagenA.setAttribute("src", "");
      imagenB.setAttribute("src", "");
    }

    tablero.cartas[indiceA].estaVuelta = false;
    tablero.cartas[indiceB].estaVuelta = false;
    tablero.indiceCartaVolteadaA = -1;
    tablero.indiceCartaVolteadaB = -1;
    
    tablero.estadoPartida = "CeroCartasLevantadas";
  }, 1000);
  
  mostrarEstado();
  mostrarIntentos();
};

/*
Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
*/
export const sonPareja = (indiceA: number, indiceB: number, tablero: constantes.Tablero): boolean => {
  // Variable que almacena si el id de ambas fotos coinciden
  let ambasSonPareja: boolean = tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto;
  mostrarIntentos();
  return ambasSonPareja;
};

// Llama a sePuedeVoltearLaCarta y si devuelve true cambia la imagen y el estado de la carta
export const voltearLaCarta = (tablero: constantes.Tablero, indice: number): void => {
  mostrarMensaje("");

  // Recibe el número de carta y llama a mostrarCarta
  if (sePuedeVoltearLaCarta(tablero, indice)) {
    mostrarCarta(indice),
    tablero.cartas[indice].estaVuelta = true
    
    // Comprueba si no hay 2 cartas volteadas y el índice no aparece en el tablero
    if (tablero.indiceCartaVolteadaA && tablero.indiceCartaVolteadaB) {
      console.log("Comprobando si son pareja");
      (tablero.indiceCartaVolteadaA > -1)
      ? (
        tablero.indiceCartaVolteadaB = indice,
        tablero.intentos += 1,
        tablero.estadoPartida = "DosCartasLevantadas",
        
        sonPareja(tablero.indiceCartaVolteadaA, tablero.indiceCartaVolteadaB, tablero)      
        ? parejaEncontrada(tablero, tablero.indiceCartaVolteadaA, tablero.indiceCartaVolteadaB)
        : parejaNoEncontrada(tablero, tablero.indiceCartaVolteadaA, tablero.indiceCartaVolteadaB)
      )
      : (
        tablero.indiceCartaVolteadaA = indice,
        tablero.estadoPartida = "UnaCartaLevantada"
      )
    }

    mostrarEstado();
    mostrarIntentos();
  };
}


// Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
export const esPartidaCompleta = (tablero: constantes.Tablero): boolean => {

  // Comprueba si se han encontrado todas las parejas
  let partidaGanada: boolean = tablero.cartas.every(carta => carta.encontrada === true);

  
  mostrarEstado();
  mostrarIntentos();

  partidaGanada
  ? (tablero.estadoPartida = "PartidaCompleta", mostrarMensaje("¡¡¡Patrida Ganada!!!"))
  : (tablero.estadoPartida = "CeroCartasLevantadas");
  
  return partidaGanada;
};

export const iniciaPartida = (tablero: constantes.Tablero): void => {
  tablero.estadoPartida = "CeroCartasLevantadas";
  
  // Estableciendo tablero inicial
  tablero.cartas.forEach(carta => {
    carta.estaVuelta = false;
    carta.encontrada = false;
  })
  
  tablero.indiceCartaVolteadaA = -1;
  tablero.indiceCartaVolteadaB = -1;
  tablero.intentos = 0;

  // Voltea todas las cartas al estado incial
  for (const elementoImagenHTML of constantes.elementosImagenHTML) {
    if (elementoImagenHTML.acceso) {
      const elementoImagen = document.getElementById(elementoImagenHTML.acceso);
      elementoImagen?.setAttribute("src", "");
    }
  }
  
  // Cambia el estado de la partida y la prepara
  barajarCartas(tablero.cartas);
  mostrarEstado();
  mostrarIntentos();
  mostrarMensaje("");
};