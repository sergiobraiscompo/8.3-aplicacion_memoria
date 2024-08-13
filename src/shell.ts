import * as constantes from "./constantes";
import { tablero } from "./model";
import { iniciaPartida, sePuedeVoltearLaCarta } from "./motor";
import { mostrarEstado, mostrarIntentos } from "./ui";

constantes.botonEmpezarPartida?.addEventListener("click", () => (iniciaPartida(tablero), mostrarEstado(), mostrarIntentos()));

constantes.elemento_carta_1?.addEventListener("click", () => sePuedeVoltearLaCarta(tablero, 0));
constantes.elemento_carta_2?.addEventListener("click", () => sePuedeVoltearLaCarta(tablero, 1));
constantes.elemento_carta_3?.addEventListener("click", () => sePuedeVoltearLaCarta(tablero, 2));
constantes.elemento_carta_4?.addEventListener("click", () => sePuedeVoltearLaCarta(tablero, 3));
constantes.elemento_carta_5?.addEventListener("click", () => sePuedeVoltearLaCarta(tablero, 4));
constantes.elemento_carta_6?.addEventListener("click", () => sePuedeVoltearLaCarta(tablero, 5));
constantes.elemento_carta_7?.addEventListener("click", () => sePuedeVoltearLaCarta(tablero, 6));
constantes.elemento_carta_8?.addEventListener("click", () => sePuedeVoltearLaCarta(tablero, 7));
constantes.elemento_carta_9?.addEventListener("click", () => sePuedeVoltearLaCarta(tablero, 8));
constantes.elemento_carta_10?.addEventListener("click", () => sePuedeVoltearLaCarta(tablero, 9));
constantes.elemento_carta_11?.addEventListener("click", () => sePuedeVoltearLaCarta(tablero, 10));
constantes.elemento_carta_12?.addEventListener("click", () => sePuedeVoltearLaCarta(tablero, 11));