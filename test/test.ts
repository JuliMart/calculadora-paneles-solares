import { calcularPanel } from "../src/calculatePanel";

// ✅ Test automatizado con Jest
test("calcularPanel con techo 3x5 y panel 1x2 debe ser 7", () => {
  expect(calcularPanel(3, 5, 1, 2)).toBe(7);
});

// 📦 Pruebas exploratorias (solo para ver valores en consola)
console.log("Test 1:", calcularPanel(2, 4, 1, 2));     // Esperado: 4
console.log("Test 2:", calcularPanel(3, 5, 1, 2));     // Esperado: 7
console.log("Test 3:", calcularPanel(2, 2, 1, 10));    // Esperado: 0

// 🧪 Más pruebas variadas
console.log("Test 4:", calcularPanel(4, 4, 2, 2));     // Esperado: 4
console.log("Test 5:", calcularPanel(3, 3, 2, 1));     // Esperado: 4
console.log("Test 6:", calcularPanel(4, 2, 3, 1));     // Esperado: 4
console.log("Test 7:", calcularPanel(5, 3, 2, 2));     // Esperado: 7
console.log("Test 8:", calcularPanel(0, 0, 1, 1));     // Esperado: 0
console.log("Test 9:", calcularPanel(100, 100, 10, 10)); // Esperado: 100
console.log("Test 10:", calcularPanel(5, 5, 2, 3));    // Esperado: 7
