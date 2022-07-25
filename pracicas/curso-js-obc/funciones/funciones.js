//siempre digo la verdad
const everTrue = ()=>true;
console.log(everTrue());


//funcion asincronica con promesa
function saludo(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hola soy una promesa")
        },5000);
    });
}

async function promesaDeSaludo(){
    try{
        console.log(await saludo());
    }catch(err){
        console.log(err)
    }
}
promesaDeSaludo();

//generador de indices pares

function* generaIndicesPares(final){
    let id=0;
    while(true){
        if(id+1>=final){
            return id;
        }
        yield id;
        id+=2;
    }
}
const indicesHasta10 = generaIndicesPares(10);
console.log(indicesHasta10.next().value);
console.log(indicesHasta10.next().value);
console.log(indicesHasta10.next().value);
console.log(indicesHasta10.next().value);
console.log(indicesHasta10.next().value);
console.log(indicesHasta10.next().value);
console.log("Aqui viene la promesa...");
