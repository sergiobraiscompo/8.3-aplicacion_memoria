import * as constantes from "./constantes";
import { tablero } from "./model";
import { iniciaPartida, voltearLaCarta } from "./motor";

constantes.botonEmpezarPartida?.addEventListener("click", () => (iniciaPartida(tablero), eventos()));

const eventos = () => {
    if (constantes.elementoCarta1 && constantes.elementoCarta1 != undefined && constantes.elementoCarta1 != null) {
        constantes.elementoCarta1.addEventListener("click", () => voltearLaCarta(tablero, 0));
    }
    if (constantes.elementoCarta2 && constantes.elementoCarta2 != undefined && constantes.elementoCarta2 != null) {
        constantes.elementoCarta2.addEventListener("click", () => voltearLaCarta(tablero, 1));
    }
    if (constantes.elementoCarta3 && constantes.elementoCarta3 != undefined && constantes.elementoCarta3 != null) {
        constantes.elementoCarta3.addEventListener("click", () => voltearLaCarta(tablero, 2));
    }
    if (constantes.elementoCarta4 && constantes.elementoCarta4 != undefined && constantes.elementoCarta4 != null) {
        constantes.elementoCarta4.addEventListener("click", () => voltearLaCarta(tablero, 3));
    }
    if (constantes.elementoCarta5 && constantes.elementoCarta5 != undefined && constantes.elementoCarta4 != null) {
        constantes.elementoCarta5.addEventListener("click", () => voltearLaCarta(tablero, 4));
    }
    if (constantes.elementoCarta6 && constantes.elementoCarta6 != undefined && constantes.elementoCarta6 != null) {
        constantes.elementoCarta6.addEventListener("click", () => voltearLaCarta(tablero, 5));
    }
    if (constantes.elementoCarta7 && constantes.elementoCarta7 != undefined && constantes.elementoCarta7 != null) {
        constantes.elementoCarta7.addEventListener("click", () => voltearLaCarta(tablero, 6));
    }
    if (constantes.elementoCarta8 && constantes.elementoCarta8 != undefined && constantes.elementoCarta8 != null) {
        constantes.elementoCarta8.addEventListener("click", () => voltearLaCarta(tablero, 7));
    }
    if (constantes.elementoCarta9 && constantes.elementoCarta9 != undefined && constantes.elementoCarta9 != null) {
        constantes.elementoCarta9.addEventListener("click", () => voltearLaCarta(tablero, 8));
    }
    if (constantes.elementoCarta10 && constantes.elementoCarta10 != undefined && constantes.elementoCarta10 != null) {
        constantes.elementoCarta10.addEventListener("click", () => voltearLaCarta(tablero, 9));
    }
    if (constantes.elementoCarta11 && constantes.elementoCarta11 != undefined && constantes.elementoCarta11 != null) {
        constantes.elementoCarta11.addEventListener("click", () => voltearLaCarta(tablero, 10));
    }
    if (constantes.elementoCarta12 && constantes.elementoCarta12 != undefined && constantes.elementoCarta12 != null) {
        constantes.elementoCarta12.addEventListener("click", () => voltearLaCarta(tablero, 11));
    }
}
