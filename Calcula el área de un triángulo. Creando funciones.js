console.log("El área de un triangulo de base 5 y altura 7 es: " + 5 * 7 / 2);
console.log(`El área de un triangulo de base 5 y altura 7 es: ${5 * 7 / 2}`);

let base = 5
let height = 7
// Opción 1
// function triangleArea(base, height) {
// 	return base * height / 2
// }
// Opción 2
// let triangleArea = function(base, height) {
// 	return base * height / 2
// }
// Opción 3
const triangleArea = (base, height) => base * height / 2
console.log(`El área de un triangulo de base ${base} y altura ${height} es: ${triangleArea(base, height)}`)