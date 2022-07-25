const ar_myFamily = ["Pepito", "Rolombo", "Girbertucena", "Robertanasia"]

const myFamily = new Set(ar_myFamily);

console.log("Original: ", myFamily);

myFamily.add("Rolombo");

console.log("Añadiendome otra vez: ",myFamily);

myFamily.add("Javascript");

console.log("Añadiendo a JS: ",myFamily);