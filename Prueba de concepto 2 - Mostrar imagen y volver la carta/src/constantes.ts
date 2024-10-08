export const cartaElement = document.getElementById("carta-element");
export const imagenElement = document.getElementById("imagen-carta-element");


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
    {idFoto: 2, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png"},
    {idFoto: 3, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png"},
    {idFoto: 4, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/4.png"},
    {idFoto: 5, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/5.png"},
    {idFoto: 6, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png"},
];