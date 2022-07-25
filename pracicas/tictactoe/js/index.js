let turnCount = 1;
let turnContainer="x";
const playerOne = [];
const playerTwo = [];
const playerCpu = [];
const celdas = document.querySelectorAll(".celdas");
celdas.forEach(elem=>{
    elem.addEventListener("click",()=>{
        if(elem.innerHTML === ""){
            if(turnPlace()===`<div id="x"></div>`){
                elem.innerHTML = `<div id="x"></div>`;
                playerOne.push(Number(elem.id));
                anyWon();
                cpu();
            }else{
                elem.innerHTML = `<div id="o"></div>`;
                playerTwo.push(Number(elem.id));
                anyWon();
                cpu();
            }
        }
    })
})
document.querySelectorAll(".turn").forEach(elem=>{
    elem.addEventListener("click",()=>{
        turnContainer = elem.id;
        celdas.forEach(elem=>{
            elem.innerHTML = ""
        })
        playerOne.length=0;
        playerTwo.length=0;
        playerCpu.length=0;
        turnCount = 1;
        if(turnContainer==="o"){
            turnCount=3;
            cpu();
        }
    })
})
const turnPlace = ()=>{
    if(turnContainer==="o" && turnCount == 1){
        turnCount++;
    }
    turnCount++;
    return turnCount % 2 === 0 ? `<div id="x"></div>` : `<div id="o"></div>`
}
const winCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const anyWon = ()=>{
    winCondition.forEach(arr=>{
        if(arr.every(elem=>playerOne.includes(elem))){
            console.log("player one Win");
        }else if(arr.every(elem=>playerTwo.includes(elem))){
            console.log("player two Win");
        }
    })
}
const cpu = ()=>{
    /* Si la cpu va primero */
    try {
        /* paso uno */
        if(celdas[4].innerHTML === ""){
            celdas[4].innerHTML = turnPlace();
            playerCpu.push(4);
            throw cpuPlayed;
        }
        /* paso dos */
        /* paso tres */
        winCondition.forEach(arr=>{
            let cpuCount = 0;
            let cpuAux = 4;
            arr.forEach(elem=>{
                if(playerCpu.includes(elem)){
                    cpuCount++;
                }else{
                    cpuAux = elem;
                }
                console.log(`contador=${cpuCount}   numeroDelElemento=${cpuAux}   comparacionEnElIf=${cpuCount>1 && celdas[cpuAux].innerHTML === ""}`)
                if(cpuCount>1 && celdas[cpuAux].innerHTML === ""){
                    celdas[cpuAux].innerHTML = turnPlace();
                    playerCpu.push(cpuAux);
                    throw cpuPlayed;
                }
            })
        })
        winCondition.forEach(arr=>{
            let playerCount = 0;
            let playerAux = 4;
            arr.map(elem=>{
                if(playerOne.includes(elem) || playerTwo.includes(elem)){
                    playerCount++;
                }else{
                    playerAux = elem;
                }
                if(playerCount>1 && celdas[playerAux].innerHTML === ""){
                    celdas[playerAux].innerHTML = turnPlace();
                    playerCpu.push(playerAux);
                    throw cpuPlayed;
                }
            })
        })
        /* cuanto paso */
        /* Estrategias */
        /* Si el otro jugador puso en el centro, cpu coloca en una esquina */
        console.log("1")
        if(playerOne.includes(4) || playerTwo.includes(4)){
            console.log("2")
            if(celdas[0].innerHTML === ""){
                celdas[0].innerHTML = turnPlace();
                playerCpu.push(0);
                console.log("3")
                throw cpuPlayed;
            }else if(celdas[2].innerHTML === ""){
                celdas[2].innerHTML = turnPlace();
                playerCpu.push(2);
                console.log("4")
                throw cpuPlayed;
            }else if(celdas[6].innerHTML === ""){
                celdas[6].innerHTML = turnPlace();
                playerCpu.push(6);
                console.log("5")
                throw cpuPlayed;
            }else if(celdas[8].innerHTML === ""){
                celdas[8].innerHTML = turnPlace();
                playerCpu.push(8);
                console.log("6")
                throw cpuPlayed;
            }
        }
        /* Que busque una ruta para ganar en la que el jugador no posea "puntos"*/
        winCondition.forEach(arr=>{
            if(playerOne.every(elem=>{
                return !arr.includes(elem);
            }) || playerTwo.every(elem=>{
                return !arr.includes(elem);
            })){
                arr.forEach(elem=>{
                    if(celdas[elem].innerHTML === ""){
                        celdas[elem].innerHTML = turnPlace();
                        playerCpu.push(elem);
                        throw cpuPlayed;
                    }
                })
            }
        })
        /* quinto paso */
        const celdaRandome = [];
        celdas.forEach(elem=>{
            if(elem.innerHTML === ""){
                celdaRandome.push(elem);
            }
        });
        if(celdaRandome.length != 0){
            let aleatorio = Math.floor(Math.random()*(celdaRandome.length));
            celdaRandome[aleatorio].innerHTML = turnPlace();
            playerCpu.push(Number(celdaRandome[aleatorio].id));
        }
        
    }
    catch(cpuPlayed){}
}

//RESTART BUTTON
document.querySelector(".game__restart").addEventListener("click",()=>{
    celdas.forEach(elem=>{
        elem.innerHTML = ""
    })
    playerOne.length=0;
    playerTwo.length=0;
    playerCpu.length=0;
    turnCount = 1;
    if(turnContainer==="o"){
        turnCount=3;
        cpu();
    }
})
//Seleccionar la marca del primer player
document.querySelectorAll(".ttt__select-btn").forEach(elem=>{
    elem.addEventListener("click",()=>{
        document.querySelectorAll(".ttt__select-btn").forEach(elem=>{
            elem.classList.toggle("select-btn-active");
            elem.classList.toggle("uneffect-btn");
        })
        document.querySelector(".select-btn-active").disabled = false;
        document.querySelector(".uneffect-btn").disabled = true;
    })
    
})

//Visibilidad de ventanas
document.querySelectorAll(".ttt__btn").forEach(elem=>{
    elem.addEventListener("click",()=>{
        $(".game").css({
            "visibility": "visible"
        });
        $(".menu").css({
            "visibility": "hidden"
        });
    });
});
document.querySelector("#gobacktomenu").addEventListener("click",elem=>{
    $(".game").css({
        "visibility": "hidden"
    });
    $(".menu").css({
        "visibility": "visible"
    });
});
// .ttt__select-btn:nth-of-type(1){
//     background: none;
//     box-shadow: none;
// }
// .ttt__select-btn > #x::after, .ttt__select-btn > #x::before {
//     background: var(--text);
// }
// .ttt__select-btn:nth-of-type(2){
//     background: var(--text);
//     box-shadow: 0px 3px 0px var(--text__shadow);
// }
// .ttt__select-btn > #o {
//     border-color: var(--background);
// }
