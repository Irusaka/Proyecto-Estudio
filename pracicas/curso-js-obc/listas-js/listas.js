const compras = ["Papas","Manzanas","Cepillos","Chocolates","Aceitunas","Fideos","Pollo"];

console.log(compras);

compras.push("Aceite de Girasol");

console.log(compras);

compras.pop();

console.log(compras);

const peliculas =[
    {titulo: "El Pianista",director:"Roman Polanski",fecha: "2002"},
    {titulo: "Soy leyenda",director:"Francis Lawrence",fecha: "2007"},
    {titulo: "Guerra de los mundos",director:"Steven Spielberg",fecha:"2005"}
];

const peliPost = peliculas.filter(obj=>Number(obj.fecha) > 2010);

const peliDire = peliculas.map(obj=>obj.director);

const peliTitu = peliculas.map(obj=>obj.titulo);

const peliDireTitu = peliDire.map((dire,i)=>{return dire.concat(" ",peliTitu[i])});

const peliDireTituProp = [...peliDire,...peliTitu];




console.log("peliculas",peliculas);
console.log("peliculas posteriores a 2010",peliPost);
console.log("directores de peliculas",peliDire);
console.log("titulos de peliculas",peliTitu);
console.log("concat",peliDireTitu);
console.log("factor de propagacion",peliDireTituProp);
