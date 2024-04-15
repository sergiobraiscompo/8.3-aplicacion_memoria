import { infoCartas } from "./constantes";
import { InfoCarta, tablero } from "./model";
import { iniciaPartida } from "./motor";

// Contenedor de imágenes cartas
const carta_1_element = document.getElementById("carta-element-1"); 
const carta_2_element = document.getElementById("carta-element-2"); 
const carta_3_element = document.getElementById("carta-element-3"); 
const carta_4_element = document.getElementById("carta-element-4"); 
const carta_5_element = document.getElementById("carta-element-5"); 
const carta_6_element = document.getElementById("carta-element-6"); 
const carta_7_element = document.getElementById("carta-element-7"); 
const carta_8_element = document.getElementById("carta-element-8"); 
const carta_9_element = document.getElementById("carta-element-9"); 
const carta_10_element = document.getElementById("carta-element-10"); 
const carta_11_element = document.getElementById("carta-element-11"); 
const carta_12_element = document.getElementById("carta-element-12");

// Elementos imágenes HTML
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



const mezcla_y_devuelve_array = (lista: InfoCarta[]) => {
    // Mientras queden elementos a mezclar
    let current_index = lista.length;

    while (current_index !=0) {
            // Coge un elemento restante
            let random_index = Math.floor(Math.random() * current_index);
            current_index--;
            
            // Mezcla la lista con el elemento aleatorio
            [lista[current_index], lista[random_index]] = 
            [lista[random_index], lista[current_index]];
    }
};

const gira_carta = (idCarta: number): void => {    
    // Recibe el número de carta y cambia el src de la imagen
    if (idCarta) {
        switch(idCarta) {
            case 1: {
                imagen_carta_1_element?.setAttribute("src", infoCartas[idCarta].imagen);
                break;
            }
            case 2: {
                imagen_carta_2_element?.setAttribute("src", infoCartas[idCarta].imagen);
                break;
            }
            case 3: {
                imagen_carta_3_element?.setAttribute("src", infoCartas[idCarta].imagen);
                break;
            }
            case 4: {
                imagen_carta_4_element?.setAttribute("src", infoCartas[idCarta].imagen);
                break;
            }
            case 5: {
                imagen_carta_5_element?.setAttribute("src", infoCartas[idCarta].imagen);
                break;
            }
            case 6: {
                imagen_carta_6_element?.setAttribute("src", infoCartas[idCarta].imagen);
                break;
            }
            case 7: {
                imagen_carta_7_element?.setAttribute("src", infoCartas[idCarta].imagen);
                break;
            }
            case 8: {
                imagen_carta_8_element?.setAttribute("src", infoCartas[idCarta].imagen);
                break;
            }
            case 9: {
                imagen_carta_9_element?.setAttribute("src", infoCartas[idCarta].imagen);
                break;
            }
            case 10: {
                imagen_carta_10_element?.setAttribute("src", infoCartas[idCarta].imagen);
                break;
            }
            case 11: {
                imagen_carta_11_element?.setAttribute("src", infoCartas[idCarta].imagen);
                break;
            }
            case 12: {
                imagen_carta_12_element?.setAttribute("src", infoCartas[idCarta].imagen);
                break;
            }
            default: {
                console.log("Ha ocurrido un error con el número de carta");
                break;
            }
        }
    } else {
        console.log(`Ha ocurrido un error con el elemento imagen-carta-element ${idCarta}`);
    }
};

// Gestiona el click en las cartas
carta_1_element?.addEventListener("click", () => gira_carta(1));
carta_2_element?.addEventListener("click", () => gira_carta(2));
carta_3_element?.addEventListener("click", () => gira_carta(3));
carta_4_element?.addEventListener("click", () => gira_carta(4));
carta_5_element?.addEventListener("click", () => gira_carta(5));
carta_6_element?.addEventListener("click", () => gira_carta(6));
carta_7_element?.addEventListener("click", () => gira_carta(7));
carta_8_element?.addEventListener("click", () => gira_carta(8));
carta_9_element?.addEventListener("click", () => gira_carta(9));
carta_10_element?.addEventListener("click", () => gira_carta(10));
carta_11_element?.addEventListener("click", () => gira_carta(11));
carta_12_element?.addEventListener("click", () => gira_carta(12));

mezcla_y_devuelve_array(infoCartas);
console.log(tablero);
iniciaPartida(tablero);
console.log(tablero);