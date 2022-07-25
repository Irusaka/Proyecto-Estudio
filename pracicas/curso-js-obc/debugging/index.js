function listaDeNumeros(num){
    let lista = [1,1];
    for(let i=2;i<num;i++){
        lista.push(lista[i-2]+lista[i-1]);
    }
    return lista;
}
listaDeNumeros(15);