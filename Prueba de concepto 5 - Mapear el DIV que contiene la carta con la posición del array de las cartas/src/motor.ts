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
  let cartaVolteable: boolean = false;
  const carta = tablero.cartas[indice];
  
  // Comprueba si no hay 2 cartas volteadas y el índice no aparece en el tablero
  if (tablero.estadoPartida === "UnaCartaLevantada" || tablero.estadoPartida === "CeroCartasLevantadas") {
    if (!carta.estaVuelta && !carta.encontrada) {
      cartaVolteable = true;
    }
  }
  
  return cartaVolteable;
};

// Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa
const parejaEncontrada = (tablero: constantes.Tablero, indiceA: number, indiceB: number) : void => {
  // Comprueba si las cartas son pareja
  console.log("Pareja encontrada.");
  tablero.cartas[indiceA].encontrada = true;
  tablero.cartas[indiceB].encontrada = true;
  tablero.estadoPartida = "CeroCartasLevantadas";
  
  tablero.indiceCartaVolteadaA = -1;
  tablero.indiceCartaVolteadaB = -1;
  
  esPartidaCompleta(tablero);
  mostrarEstado();
  mostrarIntentos();
};

// Aquí asumimos que no son pareja y las volvemos a poner boca abajo
const parejaNoEncontrada = (tablero: constantes.Tablero, indiceA :number, indiceB :number) : void => {
  console.log("Pareja no encontrada.");
  
  setTimeout(() => {
    console.log("Volteando carta de nuevo.");
    const imagenA = document.getElementById(constantes.elementosImagenHTML[indiceA].acceso);
    const imagenB = document.getElementById(constantes.elementosImagenHTML[indiceB].acceso);
    
    if (imagenA && imagenB) {
      imagenA.setAttribute("src", "");
      imagenB.setAttribute("src", "");
    }
    
    tablero.indiceCartaVolteadaA = -1;
    tablero.indiceCartaVolteadaB = -1;
    
    tablero.cartas[indiceA].estaVuelta = false;
    tablero.cartas[indiceB].estaVuelta = false;
    
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
  console.log(`Volteando carta: ${indice+1}`);
  mostrarMensaje("");
  console.log(`carta: ${indice}`)
  
  // Recibe el número de carta y llama a mostrarCarta
  if (sePuedeVoltearLaCarta(tablero, indice)) {
    mostrarCarta(indice),
    tablero.cartas[indice].estaVuelta = true
  }
  
  // Comprueba si no hay 2 cartas volteadas y el índice no aparece en el tablero
  if (tablero.indiceCartaVolteadaA && tablero.indiceCartaVolteadaB) {
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
    
    mostrarEstado();
    mostrarIntentos();
  };
}


// Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
export const esPartidaCompleta = (tablero: constantes.Tablero): boolean => {
  // Almacena el estado de la partida en local
  let partidaGanada: boolean = false;

  // Comprueba si se han encontrado todas las parejas
  tablero.cartas.every((carta) => {return carta.encontrada});

  partidaGanada
  ? tablero.estadoPartida = "PartidaCompleta"
  : tablero.estadoPartida = "CeroCartasLevantadas";
  
  mostrarEstado();
  mostrarIntentos();
  return partidaGanada;
};

export const iniciaPartida = (tablero: constantes.Tablero): void => {
  tablero.estadoPartida = "CeroCartasLevantadas";
  console.log("iniciando partida")
  
  // Estableciendo tablero inicial
  tablero.cartas.forEach(carta => {
    carta.estaVuelta = false;
    carta.encontrada = false;
  })

  // Voltea todas las cartas al estado incial
  for (let indice = 0; indice++; indice < 11) {
    const imagen = document.getElementById(constantes.elementosImagenHTML[indice].acceso);

    if (imagen instanceof HTMLImageElement) {
      imagen.setAttribute("src", "");
      mostrarCarta(indice);
    }  
  }

  tablero.indiceCartaVolteadaA = -1;
  tablero.indiceCartaVolteadaB = -1;
  
  // Cambia el estado de la partida y la prepara
  barajarCartas(tablero.cartas);
  mostrarEstado();
  mostrarIntentos();
};