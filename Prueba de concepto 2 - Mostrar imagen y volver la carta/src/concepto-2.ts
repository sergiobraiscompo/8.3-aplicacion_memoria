import './style.css';
import { infoCartas, carta_element } from "./constantes";


const gira_carta = (carta: number): void => {
    const imagen_element = document.getElementById("imagen-carta-element");

    // Genera la imagen
    imagen_element?.setAttribute("src", infoCartas[carta].imagen);
};

// Gestiona el click en las cartas
carta_element?.addEventListener("click", () => gira_carta(0));