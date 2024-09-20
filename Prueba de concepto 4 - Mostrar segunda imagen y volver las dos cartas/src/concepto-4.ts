import './style.css'
import * as constantes  from "./constantes";

const gira_cartas_de_nuevo = () => {
    setTimeout(() => {
        if (constantes.elementoImagen1 && constantes.elementoImagen1 != undefined && constantes.elementoImagen1 != null) {
            constantes.elementoImagen1?.setAttribute("src", "");
        }
        if (constantes.elementoImagen2 && constantes.elementoImagen2 != undefined && constantes.elementoImagen2 != null) {
            constantes.elementoImagen2?.setAttribute("src", "");
        }
    }, 1000);
}

const gira_carta = (carta: number): void => {
    // Recibe el número de carta y cambia el src de la imagen
    if (carta) {
        switch(carta) {
            case 1: {
                constantes.elementoImagen1?.setAttribute("src", constantes.infoCartas[0].imagen);
                break;
            }
            case 2: {
                constantes.elementoImagen2?.setAttribute("src", constantes.infoCartas[0].imagen);
                gira_cartas_de_nuevo();
                break;
            }
            default: {
                console.log("Ha ocurrido un error con el número de carta");
                break;
            }
        }
    } else {
        console.log(`Ha ocurrido un error con el elemento imagen-carta-element ${carta}`);
    }
};

// Gestiona el click en las cartas
constantes.carta1Element?.addEventListener("click", () => gira_carta(1));
constantes.carta2Element?.addEventListener("click", () => gira_carta(2));