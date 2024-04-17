import { Tablero, Carta, tablero, InfoCarta, cartas } from "./model";
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
        const llamaFuncion: boolean = sonPareja(indiceA, indiceB, tablero);

        //Assert
        expect(llamaFuncion).toEqual(true);
    })

    it('Debería devolver false al tener las dos cartas un idFoto diferente', () => {
        // Arrange
        const indiceA: number = 9;
        const indiceB: number = 11;
        const llamaFuncion: boolean = sonPareja(indiceA, indiceB, tablero);

        // Act
        iniciaPartida(tablero);

        //Assert
        expect(llamaFuncion).toEqual(false);
    })
});

// esPartidaCompleta
describe("esPartidaCompleta", () => {
    it('Debería devolver true si encontrada es true en todas las cartas', () => {
        // Arrange
        const llamaFuncion: boolean = (esPartidaCompleta(tablero));
        const cambiaValorCartas = (): void => {
            let contador = 1;

            while(contador < tablero.cartas.length){
                tablero.cartas[contador].encontrada = true;
                contador += 1;
            }
        }

        // Act
        iniciaPartida(tablero);
        cambiaValorCartas();

        //Assert
        expect(llamaFuncion).toEqual(true);
        expect(tablero.estadoPartida).toBe("PartidaCompleta");
    })

    it('Debería devolver false si encontrada es fase en todas o algunas de las cartas', () => {
        // Arrange
        const llamaFuncion: boolean = (esPartidaCompleta(tablero));

        // Act
        iniciaPartida(tablero);
        
        //Assert
        expect(llamaFuncion).toEqual(false);
        expect(tablero.estadoPartida).toBe(!"PartidaCompleta");
    })
});