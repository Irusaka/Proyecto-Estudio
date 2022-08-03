let turnCount = 1;
let turnContainer="x";
let rivalSelect = "player";
let dama = false;
let turnContainerAux = "";
let enTuCara = "no";
const playerOne = [];
const playerTwo = [];
const playerCpu = [];
const celdas = document.querySelectorAll(".celdas");
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
//------------------------------Funciones necesarias para los eventos------------------------------
//Encargado de colocar X - O segun corresponda
const turnPlace = ()=>{
    if(turnContainer==="o" && turnCount == 1){
        turnCount++;
    }
    turnCount++;
    turnIndicator(turnCount);
    return turnCount % 2 === 0 ? `<div class="animacion-x" id="x"></div>` : `<div class="animacion-o" id="o"></div>`
}
//Esto maneja las estategias de la computadora
const cpu = ()=>{
    let gameCover = "short";
    try {
        /* paso uno */
        if(celdas[4].innerHTML === ""){
            celdas[4].innerHTML = turnPlace();
            playerCpu.push(4);
            throw cpuPlayed;
        }
        /* paso dos */
        winCondition.forEach(arr=>{
            let playerCount = 0;
            let playerAux = 4;
            arr.map(elem=>{
                if(playerOne.includes(elem) || playerTwo.includes(elem)){
                    playerCount++;
                }else{
                    playerAux = elem;
                }
                if(playerCount>1 && celdas[playerAux].innerHTML === "" && Math.random()*100<20){
                    if(turnPlace() == `<div class="animacion-x" id="x"></div>`){
                        celdas[playerAux].innerHTML = `<div class="animacion-x-o" id="xo"></div>`;
                    }
                    else{
                        celdas[playerAux].innerHTML = `<div class="animacion-o-x" id="ox"></div>`;
                    }
                    playerCpu.length = 0;
                    playerCpu.push(...arr);
                    gameCover = "long";
                    enTuCara = "yes"
                    throw cpuPlayed;
                }
            })
        })
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
        if(playerOne.includes(4) || playerTwo.includes(4)){
            if(celdas[0].innerHTML === ""){
                celdas[0].innerHTML = turnPlace();
                playerCpu.push(0);
                throw cpuPlayed;
            }else if(celdas[2].innerHTML === ""){
                celdas[2].innerHTML = turnPlace();
                playerCpu.push(2);
                throw cpuPlayed;
            }else if(celdas[6].innerHTML === ""){
                celdas[6].innerHTML = turnPlace();
                playerCpu.push(6);
                throw cpuPlayed;
            }else if(celdas[8].innerHTML === ""){
                celdas[8].innerHTML = turnPlace();
                playerCpu.push(8);
                throw cpuPlayed;
            }
        }
        /* Que busque una ruta para ganar en la que el jugador no posea "marcas"*/
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
    finally{
        if(gameCover==="long"){
            $(".game__gamegrid").addClass("game__cover");
            setTimeout(()=>{
                $(".game__gamegrid").removeClass("game__cover");
                anyWon();
            },3001)
        }else{
            $(".game__gamegrid").addClass("game__cover");
            setTimeout(()=>{
                $(".game__gamegrid").removeClass("game__cover");
                anyWon();
            },601)
        }
        
    }
}
//Re establece el juego
const gameRestart = ()=>{
    celdas.forEach(elem=>{  
        elem.innerHTML = ""
    });
    playerOne.length=0;
    playerTwo.length=0;
    playerCpu.length=0;
    turnCount = 1;
    if(turnContainer==="o" && rivalSelect === "cpu"){
        turnCount=3;
        cpu();
    }else if(turnContainer==="o"){
        turnCount=2;
    }
    turnIndicator(turnCount);
}
//Pregunta de cambiar marca
const changeMarkWindow = ()=>{
    if(dama===false){
        if($("#counter__x").html() != "0" || $("#counter__o").html() != "0" || $("#counter__ties").html() != "0"){
            $(".windows").css({
                "display" : "flex"
            })
            $(".change").css({
                "display" : "flex"
            })
        }
        else{
            turnContainer = turnContainerAux;
            gameRestart();
        }
    }else{
        turnContainer = turnContainerAux;
        scoreInZero();
    }

}
//Score en 0
const scoreInZero = ()=>{
    $("#counter__x").html("0");
    $("#counter__o").html("0");
    $("#counter__ties").html("0");
    gameRestart();
}
//Indicador de turnos
const turnIndicator = (turnIndicatorAux)=>{
    ((turnIndicatorAux+1) % 2 === 0) ? 
        document.querySelector(".game__turn").id="x" : 
        document.querySelector(".game__turn").id="o";
}
//Pregunta si gano alguien
const anyWon = ()=>{
    let anyWonAux = true;
    let celdasAux = [...celdas];
    try {
        winCondition.forEach(arr=>{
            if(arr.every(elem=>playerOne.includes(elem))){
                anyWonAux = winnerWindow(turnContainer,arr);
                throw err;
            }else if(arr.every(elem=>playerTwo.includes(elem))){
                anyWonAux = turnContainer==="o" ? 
                    winnerWindow("x",arr) : 
                    winnerWindow("o",arr);
                    throw err;
            }else if(arr.every(elem=>playerCpu.includes(elem))){
                anyWonAux = turnContainer==="o" ? 
                    winnerWindow("x",arr) : 
                    winnerWindow("o",arr);
                    throw err;
            }
        })
        if(anyWonAux != false && celdasAux.every(elem=>elem.innerHTML !== "")){
            anyWonAux = winnerWindow("ties");
        }
    } catch (err) {}finally{
        return anyWonAux;
    }
}
//Cartel de victoria
const winnerWindow = (winner,arr)=>{
    document.querySelector(".win__paragraph").innerHTML = "YOU WON!";
    document.querySelector(".win__whowon-text").innerHTML = "TAKES THE ROUND";
    document.querySelector(".win__whowon-mark").id = winner;
    if(winner==="o"){
        $(".win__whowon-text").css({
            "color": "var(--o)"
        })
    }else if(winner==="x"){
        $(".win__whowon-text").css({
            "color": "var(--x)"
        })
    }else{
        $(".win__whowon-text").css({
            "color": "var(--text)"
        })
        document.querySelector(".win__paragraph").innerHTML = "NO ONE WIN"
        document.querySelector(".win__whowon-text").innerHTML = "TIE!"
    }
    if(turnContainer != winner && winner != "ties"){
        document.querySelector(".win__paragraph").innerHTML = "YOU LOSE!"
    }
    if(rivalSelect==="cpu" && enTuCara==="yes"){
        document.querySelector(".win__paragraph").innerHTML = "TIC TAC TOE"
        document.querySelector(".win__whowon-text").innerHTML = "¡EN TU CARA!"
        enTuCara="no"
    }
    if(arr){
        arr.forEach(elem=>{
            $(`#${elem}`).css({
                "filter": "brightness(1.5)"
            })
            
        })
    }
    $(".game__gamegrid").addClass("game__cover");
    setTimeout(()=>{
        $(".windows").css({
            "display": "flex"
        });
        $(".win").css({
            "display": "flex"
        });
        $(".game__gamegrid").removeClass("game__cover");
        if(arr){
            arr.forEach(elem=>{
                $(`#${elem}`).css({
                    "filter": "brightness(1)"
                })
                
            })
        }
        scoreCount(winner);
        return false;
    },1000)
    
    
}
//Contador de puntos
const scoreCount = (winner)=>{
    $(`#counter__${winner}`).html(Number($(`#counter__${winner}`).html())+1);
}
//Cerrar cartel de victoria
const winnerWindowClose = ()=>{
    $(".windows").css({
        "display": "none"
    });
    $(".win").css({
        "display": "none"
    });
}
//Ingresar al juego
const joinToGame = ()=>{
    $(".menu").css({
        "margin-left": "-375px"
    })
    scoreInZero();
}
//-----------------------------------Eventos de clicks-----------------------------------
//Colocar marcas
celdas.forEach(elem=>{
    elem.addEventListener("click",()=>{
        if(elem.innerHTML === ""){
            elem.innerHTML = turnPlace();
            elem.innerHTML == `<div class="animacion-${turnContainer}" id="${turnContainer}"></div>` ? 
                playerOne.push(Number(elem.id)) : 
                playerTwo.push(Number(elem.id));
            $(".game__gamegrid").addClass("game__cover");
            setTimeout(()=>{
                $(".game__gamegrid").removeClass("game__cover");
                if(anyWon() && rivalSelect==="cpu"){
                    cpu();
                }
            },650)
            
        }
    })
})
//RESTART BUTTON
document.querySelector(".game__restart").addEventListener("click",gameRestart)
//Visibilidad de ventanas Menu y Game || Jugador contra jugador o jugador contra maquina btn
$("#vs__p").click(()=>{
    rivalSelect = "player";
    joinToGame();
});
$("#vs__cpu").click(()=>{
    rivalSelect = "cpu";
    joinToGame();
});
document.querySelector("#gobacktomenu").addEventListener("click",()=>{
    $(".menu").css({
        "margin-left": "0"
    });
    scoreInZero();
});
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
//Cerrar Cartel de victoria o volver al menu
document.querySelector("#win__btn-quit").addEventListener("click",()=>{
    winnerWindowClose();
    $(".menu").css({
        "margin-left": "0"
    });
    gameRestart();
})
document.querySelector("#win__btn-nextround").addEventListener("click",()=>{
    winnerWindowClose();
    gameRestart();
})
//Ventana de advertencia de cambio de marca
document.querySelectorAll(".turn").forEach(elem=>{
    elem.addEventListener("click",()=>{
        turnContainerAux = elem.id;
        changeMarkWindow();
    })
})
$("#change__btn-accept").click(()=>{
    $(".windows").css({
        "display":"none"
    });
    $(".change").css({
        "display":"none"
    });
    turnContainer = turnContainerAux;
    scoreInZero();
})
$("#change__btn-cancel").click(()=>{
    $(".windows").css({
        "display":"none"
    });
    $(".change").css({
        "display":"none"
    });
})
//Dont ask me again de la ventana de cambio
$("#change__dama").click(()=>{
    dama = dama===true ? false : true;
})