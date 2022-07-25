let myFirstName = "Ezequiel";

let myLastName = "cof-cof";

let estudiante = `${myFirstName} ${myLastName}`;

let estudianteMayus = estudiante.toUpperCase();

let estudianteMinus = estudiante.toLowerCase();

let estudianteLength = estudiante.length;

let firstLetterName = myFirstName.charAt(0);

let lastLetterName = myLastName.charAt(myLastName.length-1);

let estSinEspacios = estudiante.replace(" ","");

let nameInside = estudiante.includes(myFirstName);



console.log(myFirstName);
console.log(myLastName);
console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(estudianteLength);
console.log(firstLetterName);
console.log(lastLetterName);
console.log(estSinEspacios);
console.log(nameInside);