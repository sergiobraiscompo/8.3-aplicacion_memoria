import { imagenes } from "../src/datos";

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

console.log(mezcla_y_devuelve_array(imagenes));