myFirstName = "Ezequiel";

myLastName = "cof-cof";

estudiante = `${myFirstName} ${myLastName}`;

estudianteMayus = estudiante.toUpperCase();

estudianteMinus = estudiante.toLowerCase();

estudianteLength = estudiante.length;

firstLetterName = myFirstName.charAt(0);

lastLetterName = myLastName.charAt(myLastName.length-1);

estSinEspacios = estudiante.replace(" ","");

nameInside = estudiante.includes(myFirstName);



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