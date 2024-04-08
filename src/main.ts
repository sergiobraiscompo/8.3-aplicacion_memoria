import { imagenes } from "./datos";
const carta_1_element = document.getElementById("carta-element-1"); 
const carta_2_element = document.getElementById("carta-element-2"); 

let lista_mezclada: string[] = [];

const mezcla_y_devuelve_array = (lista:string[]) => {
    let current_index =  lista.length;

    // Mientras queden elementos a mezclar
    while (current_index != 0) {
        // Coge un elemento restante
        let random_index = Math.floor(Math.random() * current_index);
        current_index--;
    
        // Mezcla la lista con el elemento aleatorio
        [lista[current_index], lista[random_index]] = 
        [lista[random_index], lista[current_index]];

        lista_mezclada.push(lista[current_index]);
    }

    return lista_mezclada;
}

const gira_carta = (carta: number): void => {    
    // Genera la imagen
    console.log("Cargando fotos", carta);
    const imagen_carta_1_element = document.getElementById("imagen-carta-element-1");
    const imagen_carta_2_element = document.getElementById("imagen-carta-element-2");
    
    if (carta) {
        switch(carta) {
            case 0: {
                imagen_carta_1_element?.setAttribute("src", lista_mezclada[carta]);
                break;
            }
            case 1: {
                imagen_carta_2_element?.setAttribute("src", lista_mezclada[carta]);
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
carta_1_element?.addEventListener("click", () => gira_carta(0));
carta_2_element?.addEventListener("click", () => gira_carta(1));

mezcla_y_devuelve_array(imagenes);