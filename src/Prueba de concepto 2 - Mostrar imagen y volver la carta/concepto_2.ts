import { imagenes } from "../datos";
const carta_element = document.getElementById("carta-element");
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

const gira_carta = (lista: string[]): void => {    
    // Crea el elemento imagen-carta
    // const carta_element = document.getElementById("carta-element");
    const imagen_element = document.getElementById("imagen-element");
    
    // Genera la imagen
    imagen_element?.setAttribute("src", lista[0]);
    // imagen_element?.setAttribute("class", "imagen-carta");
    // imagen_element?.setAttribute("id", "imagen-carta");
};



mezcla_y_devuelve_array(imagenes);

// Gestiona el click en las cartas
carta_element?.addEventListener("click", () => gira_carta(lista_mezclada));