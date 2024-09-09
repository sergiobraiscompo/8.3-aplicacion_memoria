import './style.css'
import * as constantes  from "./constantes";

const gira_cartas_de_nuevo = () => {
    setTimeout(() => {
        constantes.imagen_carta_1_element?.setAttribute("src", "");
        constantes.imagen_carta_2_element?.setAttribute("src", "");
    }, 1000);
}

const gira_carta = (carta: number): void => {
    // Recibe el número de carta y cambia el src de la imagen
    if (carta) {
        switch(carta) {
            case 1: {
                constantes.imagen_carta_1_element?.setAttribute("src", constantes.infoCartas[0].imagen);
                break;
            }
            case 2: {
                constantes.imagen_carta_2_element?.setAttribute("src", constantes.infoCartas[0].imagen);
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
constantes.carta_1_element?.addEventListener("click", () => gira_carta(1));
constantes.carta_2_element?.addEventListener("click", () => gira_carta(2));