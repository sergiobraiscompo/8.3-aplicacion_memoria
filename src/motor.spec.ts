import { tablero } from "./model";
import { esPartidaCompleta, iniciaPartida, sonPareja } from "./motor";



// iniciarPartida
describe("iniciaPartida", () => {
    it('Llama a barajar cartas y cambia el estado de la partida a "CeroCartasLevantadas" ', () => {
        // Arrange
        const estadoEsperado: string = "CeroCartasLevantadas";

        // Act
        iniciaPartida(tablero);

        //Assert
        expect(tablero.estadoPartida).toBe(estadoEsperado);
    })
});

// sonPareja
describe("sonPareja", () => {
    it('Debería devolver true al tener las dos cartas el mismo idFoto', () => {
        // Arrange
        const indiceA: number = 0;
        const indiceB: number = 0;

        // Act
        iniciaPartida(tablero);
        
        //Assert
        expect(sonPareja(indiceA, indiceB, tablero)).toEqual(true);

    })

    it('Debería devolver false al tener las dos cartas un idFoto diferente', () => {
        // Arrange
        const indiceA: number = 9;
        const indiceB: number = 11;

        // Act
        iniciaPartida(tablero);

        //Assert
        expect(sonPareja(indiceA, indiceB, tablero)).toEqual(false);
    })
});

// esPartidaCompleta
describe("esPartidaCompleta", () => {
    it('Debería devolver false si encontrada es false en todas o algunas de las cartas', () => {
        // Arrange

        // Act
        iniciaPartida(tablero);
        
        //Assert
        expect(esPartidaCompleta(tablero)).toBe(false);
        expect(tablero.estadoPartida).toEqual("CeroCartasLevantadas");
    });

    it('Debería devolver true si encontrada es true en todas las cartas', () => {
        // Arrange
        const cambiaValorCartas = (): void => {
            let contador = 0;

            while(contador < tablero.cartas.length){
                const cartaActual = tablero.cartas[contador];
                cartaActual.encontrada = true;
                contador += 1;
            }
        }

        // Act
        iniciaPartida(tablero);
        cambiaValorCartas();

        //Assert
        expect(esPartidaCompleta(tablero)).toEqual(true);
        expect(tablero.estadoPartida).toBe("PartidaCompleta");
    })
});