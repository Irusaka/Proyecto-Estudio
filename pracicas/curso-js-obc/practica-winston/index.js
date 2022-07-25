const logger = require("./logger");


const doble = a =>{
    if(typeof a === "number"){
        return a*2;
    }
    throw new Error("Este es un error de los mas graves");
} 

try{
    doble(5);
    doble("pepe");
}catch(err){
    logger.error(err.message);
}finally{
    logger.info("Eso eseso esoeso eso es todo amigos");
}