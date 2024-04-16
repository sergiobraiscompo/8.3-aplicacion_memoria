import { Tablero, Carta, tablero } from "./model";
import { esPartidaCompleta, iniciaPartida, sonPareja,  } from "./motor";

// sonPareja
describe("sonPareja", () => {
    it('Debería devolver true al tener las dos cartas el mismo idFoto', () => {
        // Arrange
        const indiceA: number = 0;
        const indiceB: number = 0;
        const tableroPartida: Tablero = tablero;

        // Act
        iniciaPartida(tableroPartida);
        const llamaFuncion: boolean = sonPareja(indiceA, indiceB, tableroPartida);

        //Assert
        expect(llamaFuncion).toEqual(true);
    })

    it('Debería devolver false al tener las dos cartas un idFoto diferente', () => {
        // Arrange
        const indiceA: number = 9;
        const indiceB: number = 11;
        const tableroPartida: Tablero = tablero;

        // Act
        iniciaPartida(tableroPartida);
        const llamaFuncion: boolean = sonPareja(indiceA, indiceB, tableroPartida);

        //Assert
        expect(llamaFuncion).toEqual(false);
    })
});

// esPartidaCompleta
describe("esPartidaCompleta", () => {
    it('Debería devolver true si encontrada es true en todas las cartas', () => {
        // Arrange
        const tableroPartida: Tablero = tablero;
        
        // Act
        const llamaFuncion: boolean = (esPartidaCompleta(tableroPartida));
        tableroPartida.cartas.every((carta: Carta): void => {
            carta.encontrada = true;
        })

        //Assert
        expect(llamaFuncion).toEqual(true);

        it('Debería devolver false si encontrada es false en todas o algunas de las cartas', () => {
            // Arrange
            const tableroPartida: Tablero = tablero;
            
            // Act
            const llamaFuncion: boolean = (esPartidaCompleta(tableroPartida));

            //Assert
            expect(llamaFuncion).toEqual(false);
        })
    })
});

// // iniciaPartida
// describe("iniciaPartida", () => {
//     it('', () => {
//         expect().toBe()
//     })
// });

