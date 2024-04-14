import { Tablero, tablero } from "./model";
import { sonPareja, esPartidaCompleta, iniciaPartida } from "./motor";

// sonPareja
describe("sonPareja", () => {
    it('Debería devolver false', () => {
        // Arrange
        const indiceA: number = 2;
        const indiceB: number = 3;
        const tableroPartida: Tablero = tablero;

        // Act
        const llamaFuncion: boolean = sonPareja(indiceA, indiceB, tableroPartida);

        //Assert
        expect(llamaFuncion).toBe(false);
    })

    it('Debería devolver true', () => {
        // Arrange
        
        // Act

        //Assert
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

