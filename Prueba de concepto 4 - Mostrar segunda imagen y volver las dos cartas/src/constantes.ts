
export const carta_element = document.getElementById("carta-element");
export const carta_1_element = document.getElementById("carta-element-1"); 
export const carta_2_element = document.getElementById("carta-element-2"); 
export const imagen_carta_1_element = document.getElementById("imagen-carta-element-1");
export const imagen_carta_2_element = document.getElementById("imagen-carta-element-2");


export interface Carta {
    idFoto: number;
    imagen: string;
    estaVuelta: boolean;
    encontrada: boolean;
}

export interface InfoCarta {
    idFoto: number;
    imagen: string;
}

// Relaciona Los ids de las cartas con sus respectivas URL
export const infoCartas: InfoCarta[] = [
    {idFoto: 1, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png"},
];