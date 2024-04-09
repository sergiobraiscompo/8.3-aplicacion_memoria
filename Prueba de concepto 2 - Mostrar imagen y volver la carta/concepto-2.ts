import { imagenes } from "./datos";
const carta_element = document.getElementById("carta-element");

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
}

const gira_carta = (carta: number): void => {    
    // Crea el elemento imagen-carta
    // const carta_element = document.getElementById("carta-element");
    const imagen_element = document.getElementById("imagen-element");
    
    // Genera la imagen
    imagen_element?.setAttribute("src", imagenes[carta]);
};

// Gestiona el click en las cartas
carta_element?.addEventListener("click", () => gira_carta(0));

mezcla_y_devuelve_array(imagenes);