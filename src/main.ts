import { imagenes } from "./datos";

const carta_1_element = document.getElementById("carta-element-1"); 
const carta_2_element = document.getElementById("carta-element-2"); 

const mezcla_y_devuelve_array = (lista:string[]) => {
    
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

const gira_carta = (carta: number): void => {    
    // Genera la imagen
    const imagen_carta_1_element = document.getElementById("imagen-carta-element-1");
    const imagen_carta_2_element = document.getElementById("imagen-carta-element-2");
    
    // Recibe el número de carta y cambia el src de la imagen
    if (carta) {
        switch(carta) {
            case 1: {
                imagen_carta_1_element?.setAttribute("src", imagenes[carta]);
                break;
            }
            case 2: {
                imagen_carta_2_element?.setAttribute("src", imagenes[carta]);
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
carta_1_element?.addEventListener("click", () => gira_carta(1));
carta_2_element?.addEventListener("click", () => gira_carta(2));

mezcla_y_devuelve_array(imagenes);