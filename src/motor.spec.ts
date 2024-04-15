import { Tablero, tablero } from "./model";
import { iniciaPartida, sonPareja } from "./motor";

// sonPareja
describe("sonPareja", () => {
    it('Debería devolver false', () => {
        // Arrange
        const indiceA: number = 0;
        const indiceB: number = 1;
        const tableroPartida: Tablero = tablero;

        // Act
        iniciaPartida(tableroPartida);
        const llamaFuncion: boolean = sonPareja(indiceA, indiceB, tableroPartida);
        
        //Assert
        expect(llamaFuncion).toEqual(false);
    })
});

// // esPartidaCompleta
// describe("esPartidaCompleta", () => {
//     it('', () => {
//         expect().toBe()
//     })
// });

// // iniciaPartida
// describe("iniciaPartida", () => {
//     it('', () => {
//         expect().toBe()
//     })
// });

