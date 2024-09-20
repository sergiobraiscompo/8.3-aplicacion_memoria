import { arrayPrueba } from './constantes';
import './style.css';


const mezclaYDevuelveArray = (lista:string[]) => {
    
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
    
    return lista;
}

console.log(mezclaYDevuelveArray(arrayPrueba));