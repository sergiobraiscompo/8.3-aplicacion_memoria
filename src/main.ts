import { array_pruebas } from "./datos";

let i = 0;
const muestra_elementos_array = (lista: string[]) => {
    while (i < lista.length) {
        console.log(i, lista[i]);
        i++;
    }
}

const mezcla_y_devuelve_array = (lista:string[]) => {
    let current_index =  lista.length;
    let lista_mezclada = []

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


muestra_elementos_array(array_pruebas);
console.log(mezcla_y_devuelve_array(array_pruebas));