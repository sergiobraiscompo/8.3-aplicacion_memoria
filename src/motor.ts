/*
En el motor nos va a hacer falta un método para barajar cartas
*/

// import { infoCartas } from "./constantes";
import { infoCartas } from "./constantes";
import { Carta, Tablero, cartas, tablero } from "./model";



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
const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number ): boolean => {
  // Variable que almacena si la carta es volteable
  let cartaVolteable = false;

  // Comprueba si no hay 2 cartas volteadas y el índice no aparece en el tablero
  if (tablero.estadoPartida === "CeroCartasLevantadas" || tablero.estadoPartida === "UnaCartaLevantada") {
    if(indice === tablero.indiceCartaVolteadaA || indice === tablero.indiceCartaVolteadaB) {
      cartaVolteable = true;
      tablero.indiceCartaVolteadaA
    }
  }

  return cartaVolteable;
};

// Llama a sePuedeVoltearLaCarta y si devuelve true cambia la imagen y el estado de la carta
const voltearLaCarta = (tablero: Tablero, indice: number) : void => {
  const imagen_carta_1_element = document.getElementById("imagen-carta-element-1");
  const imagen_carta_2_element = document.getElementById("imagen-carta-element-2");
  const imagen_carta_3_element = document.getElementById("imagen-carta-element-3");
  const imagen_carta_4_element = document.getElementById("imagen-carta-element-4");
  const imagen_carta_5_element = document.getElementById("imagen-carta-element-5");
  const imagen_carta_6_element = document.getElementById("imagen-carta-element-6");
  const imagen_carta_7_element = document.getElementById("imagen-carta-element-7");
  const imagen_carta_8_element = document.getElementById("imagen-carta-element-8");
  const imagen_carta_9_element = document.getElementById("imagen-carta-element-9");
  const imagen_carta_10_element = document.getElementById("imagen-carta-element-10");
  const imagen_carta_11_element = document.getElementById("imagen-carta-element-11");
  const imagen_carta_12_element = document.getElementById("imagen-carta-element-12");

  // Recibe el número de carta y cambia el src de la imagen
  if (sePuedeVoltearLaCarta(tablero, indice)) {
      switch(indice) {
        case 1: {
          imagen_carta_1_element?.setAttribute("src", cartas[indice].imagen);
          cartas[indice].estaVuelta = true;
          break;
        }
        case 2: {
          imagen_carta_2_element?.setAttribute("src", cartas[indice].imagen);
          cartas[indice].estaVuelta = true;
          break;
        }
        case 3: {
          imagen_carta_3_element?.setAttribute("src", cartas[indice].imagen);
          cartas[indice].estaVuelta = true;
          break;
        }
        case 4: {
          imagen_carta_4_element?.setAttribute("src", cartas[indice].imagen);
          cartas[indice].estaVuelta = true;
          break;
        }
        case 5: {
          imagen_carta_5_element?.setAttribute("src", cartas[indice].imagen);
          cartas[indice].estaVuelta = true;
          break;
        }
        case 6: {
          imagen_carta_6_element?.setAttribute("src", cartas[indice].imagen);
          cartas[indice].estaVuelta = true;
          break;
        }
        case 7: {
          imagen_carta_7_element?.setAttribute("src", cartas[indice].imagen);
          cartas[indice].estaVuelta = true;
          break;
        }
        case 8: {
          imagen_carta_8_element?.setAttribute("src", cartas[indice].imagen);
          cartas[indice].estaVuelta = true;
          break;
        }
        case 9: {
          imagen_carta_9_element?.setAttribute("src", cartas[indice].imagen);
          cartas[indice].estaVuelta = true;
          break;
        }
        case 10: {
          imagen_carta_10_element?.setAttribute("src", cartas[indice].imagen);
          cartas[indice].estaVuelta = true;
          break;
        }
        case 11: {
          imagen_carta_11_element?.setAttribute("src", cartas[indice].imagen);
          cartas[indice].estaVuelta = true;
          break;
        }
        case 12: {
          imagen_carta_12_element?.setAttribute("src", cartas[indice].imagen);
          cartas[indice].estaVuelta = true;
          break;
        }
        default: {
          console.log("Ha ocurrido un error con el número de carta");
          break;
        }
      }
  } else {
      console.log(`Ha ocurrido un error con al cargar el elemento imagen-carta-element ${indice}`);
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
};

/*
  Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
*/
export const esPartidaCompleta = (tablero: Tablero): boolean => {
  // Almacena el estado de la partida en local
  let partidaGanada = true;

  // Comprueba si se han encontrado todas las parejas
  cartas.every((carta) => {
    if(!carta.encontrada) {
      partidaGanada = false;
      tablero.estadoPartida = "DosCartasLevantadas";
    } else {
      tablero.estadoPartida = "PartidaCompleta";
    }
  })

  return partidaGanada;
};

/*
Iniciar partida
*/

export const iniciaPartida = (tablero: Tablero): void => {
  // Almacenta el estado de la partida
  let estadoPartida: string = tablero.estadoPartida;

  // Cambia el estado de la partida y la prepara
  if(estadoPartida === "PartidaNoIniciada") {
    barajarCartas(tablero.cartas);
    estadoPartida = "CeroCartasLevantadas";
  }
};
