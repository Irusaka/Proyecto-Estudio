//Hoy
const fechaHoy = new Date();
console.log(fechaHoy);

//Nacimiento
const birthday = new Date("december 12, 1967");
console.log(birthday);

//Naci hoy?
let tarde = fechaHoy.getTime() > birthday.getTime();
console.log(tarde);

//Nacimiento-Dia
const birthdayDay = birthday.getDay();

//Nacimiento-Mes
const birthdayMonth = birthday.getMonth()+1;

//Nacimiento-Año
const birthdayYear = birthday.getFullYear();

console.log(birthdayDay,"del",birthdayMonth, ",",birthdayYear);