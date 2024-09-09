import * as constantes from "./constantes";
import { tablero } from "./model";
import { iniciaPartida, voltearLaCarta } from "./motor";

constantes.botonEmpezarPartida?.addEventListener("click", () => (iniciaPartida(tablero)));

constantes.elemento_carta_1?.addEventListener("click", () => voltearLaCarta(tablero, 0));
constantes.elemento_carta_2?.addEventListener("click", () => voltearLaCarta(tablero, 1));
constantes.elemento_carta_3?.addEventListener("click", () => voltearLaCarta(tablero, 2));
constantes.elemento_carta_4?.addEventListener("click", () => voltearLaCarta(tablero, 3));
constantes.elemento_carta_5?.addEventListener("click", () => voltearLaCarta(tablero, 4));
constantes.elemento_carta_6?.addEventListener("click", () => voltearLaCarta(tablero, 5));
constantes.elemento_carta_7?.addEventListener("click", () => voltearLaCarta(tablero, 6));
constantes.elemento_carta_8?.addEventListener("click", () => voltearLaCarta(tablero, 7));
constantes.elemento_carta_9?.addEventListener("click", () => voltearLaCarta(tablero, 8));
constantes.elemento_carta_10?.addEventListener("click", () => voltearLaCarta(tablero, 9));
constantes.elemento_carta_11?.addEventListener("click", () => voltearLaCarta(tablero, 10));
constantes.elemento_carta_12?.addEventListener("click", () => voltearLaCarta(tablero, 11));