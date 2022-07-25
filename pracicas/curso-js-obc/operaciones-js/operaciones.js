alturaCm = 186;
alturaM = 1.86;
peso = 110.3;
alturaR = Math.ceil(alturaM);
pesoR = Math.floor(peso);
igual = Number.MAX_VALUE == (Number.MAX_VALUE+1);

console.log(alturaCm, "cm");
console.log(alturaM, 'm');
console.log(peso, 'kg');
console.log(alturaR, `m redondeado`);
console.log(pesoR, `kg redondeado`);
console.log(igual, ": el máximo valor que se puede obtener en Javascript + 1 es igual al máximo valor que se puede obtener en Javascript");