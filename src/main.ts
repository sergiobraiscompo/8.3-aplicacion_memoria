import { imagenes } from "./datos";

const muestra_elementos_array = (lista: string[]) => {
    let i = 0;
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

const muestra_carta = (lista: string[]) => {
    let contador = 0;

    while (contador < lista.length) {
        const imagen_element = document.createElement("div");
        imagen_element.setAttribute("class", "imagen_element");

        // Crea una nueva imagen
        const imagen_actual = document.createElement("img");
        imagen_actual.setAttribute("src", lista[contador]);
        imagen_actual.setAttribute("class", "carta-element");
        imagen_actual.setAttribute("alt", lista[contador]);

        // Añade la imagen dentro del contenedor imagen_element
        imagen_element?.appendChild(imagen_actual);

        contador+= 1;
    }
}

const gira_carta = (lista: string[]) => {
    const carta_1 = document.getElementById("carta_1");
    const carta_2 = document.getElementById("carta_2");
    const carta_3 = document.getElementById("carta_3");
    const carta_4 = document.getElementById("carta_4");
    const carta_5 = document.getElementById("carta_5");
    const carta_6 = document.getElementById("carta_6");

    switch() {

    }

};

mezcla_y_devuelve_array(imagenes);

// Gestiona el click en las cartas
const carta_element = document.getElementById("carta-element");
carta_element?.addEventListener("click", () => gira_carta());
