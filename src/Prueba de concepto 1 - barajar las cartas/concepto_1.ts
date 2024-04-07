import { imagenes } from "../datos";

const mezcla_y_devuelve_array = (lista:string[]) => {
    let indice_actual =  lista.length;
    let lista_mezclada = []

    // Mientras queden elementos a mezclar
    while (indice_actual != 0) {
        // Coge un elemento restante
        let indice_aleatorio = Math.floor(Math.random() * indice_actual);
        indice_actual--;
    
        // Mezcla la lista con el elemento aleatorio
        [lista[indice_actual], lista[indice_aleatorio]] = 
        [lista[indice_aleatorio], lista[indice_actual]];

        lista_mezclada.push(lista[indice_actual]);
    }

    return lista_mezclada;
}

console.log(mezcla_y_devuelve_array(imagenes));