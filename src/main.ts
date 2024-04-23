import { botonEmpezarPartida } from "./ui";
import { iniciaPartida } from "./motor";
import { tablero } from "./model";

botonEmpezarPartida?.addEventListener("click", () => iniciaPartida(tablero));