import './style.css';
import { infoCartas, cartaElement, imagenElement } from "./constantes";


const giraCarta = (carta: number): void => {
    // Genera la imagen
    if (imagenElement && imagenElement != undefined && imagenElement != null)
    imagenElement.setAttribute("src", infoCartas[carta].imagen);
};

// Gestiona el click en las cartas
cartaElement?.addEventListener("click", () => giraCarta(0));