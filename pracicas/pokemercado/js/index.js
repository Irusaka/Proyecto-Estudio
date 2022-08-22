/*variable que almacena los ataques, necesario para el filtro*/
let arrAbility = []
/*===============CARGA-DE-IMAGENES-EN-EL-FILTRO===============*/
const types = document.querySelector(".chks")
fetch("https://pokeapi.co/api/v2/type")
    .then(res=>res.json())
    .then(response=>{
        for(let i = 0;i < 18; i++){
            types.innerHTML = types.innerHTML + `<input type="checkbox" name="" id="${response.results[i].name}" class="chk">
            <label for="${response.results[i].name}"><img src="./recursos/${response.results[i].name}.png" alt=""></label>`;
        }  
    })
/*===============CARGA-DE-HABILIDADES-EN-EL-FILTRO===============*/
const abilitys = document.querySelectorAll(".select")
fetch("https://pokeapi.co/api/v2/ability?offset=0&limit=327")
    .then(res=>res.json())
    .then(response=>{
        let abilityName
        for(let ability in response.results){
            abilityName = response.results[ability].name.split("").map((elem,i,arr)=>{
                return i===0 ? elem.toUpperCase() : elem==="-" ? " " : arr[i-1]==="-" ? elem.toUpperCase() : elem
            }).join("")
            abilitys.forEach(elem=>{
                // elem.innerHTML = elem.innerHTML + `<div class="option">${abilityName}</div>`
                let abilityNode = document.createElement("div")
                abilityNode.classList.add("option")
                abilityNode.innerHTML = abilityName
                elem.appendChild(abilityNode)
            })
            /* necesario para otra operacion (filtros) y tener que hacer el llamado otra vez */
            arrAbility.push(response.results[ability].name)
            /*------------------------------------*/
        }
        $(".option").click((elem)=>{
            elem.target.parentNode.parentNode.children[0].value = elem.target.innerHTML
        })
    })
/*===============CARGA-DE-POKEMONES===============*/
const pokeContainer = document.querySelector(".container-pm")
let pokemonCounter = 0
let pokemonUntil = 25

function createPokemon(objPokemon){
    /*=====SUP-PART=====*/
    let cardSup = document.createElement("div")
    cardSup.classList.add("pokemon__sup")
    let name = ()=>{
        let namePokemonCont = document.createElement("div")
        namePokemonCont.classList.add("pokemon__name")
        let namePokemon = document.createElement("p")
        namePokemon.innerHTML = objPokemon.name
        namePokemonCont.appendChild(namePokemon)
        return namePokemonCont
    }
    let type = ()=>{
        let typesPokemon = document.createElement("div")
        typesPokemon.classList.add("pokemon__type")
        objPokemon.types.forEach((elem)=>{
            let typeImg = document.createElement("img")
            typeImg.src = `./recursos/${elem.type.name}.png`
            typesPokemon.appendChild(typeImg)
        })
        return typesPokemon;
    }
    let gender = ()=>{
        let genderCont = document.createElement("div")
        genderCont.classList.add("pokemon__gender")
        let genderImg = document.createElement("img")
        genderImg.src = `/recursos/${Math.round(Math.random()) > 0 ? "male" : "female"}.png`
        genderCont.appendChild(genderImg)
        return genderCont
    }
    cardSup.append(type(),name(),gender())

    /*=====CENTER-PART=====*/
    let cardImg = document.createElement("div")
    cardImg.classList.add("pokemon__img")
    let img = ()=>{
        let imgId = new String(objPokemon?.id).length == 1 ? `00${objPokemon?.id}` : new String(objPokemon?.id).length == 2 ? `0${objPokemon?.id}` : objPokemon?.id
        let imgOfPokemon = document.createElement("img")
        imgOfPokemon.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imgId}.png`
        return imgOfPokemon
    }
    cardImg.appendChild(img())

    /*=====INF-PART=====*/
    let cardInf = document.createElement("div")
    cardInf.classList.add("pokemon__inf")
    let title = document.createElement("p")
    title.innerHTML = "Stats:"
    cardInf.appendChild(title)
    let stats = ()=>{
        /* STATS */
        let statsPokemon = document.createElement("div")
        statsPokemon.classList.add("pokemon__stats")

        /* HP */
        let stat = document.createElement("div")
        stat.classList.add("pokemon__stat")
        let nameStat = document.createElement("p")
        nameStat.innerHTML = "HP"
        let valueStat = document.createElement("p")
        valueStat.innerHTML = new String(objPokemon.stats[0]["base_stat"])
        stat.append(nameStat,valueStat)
        statsPokemon.appendChild(stat)

        /* ATK */
        stat = document.createElement("div")
        stat.classList.add("pokemon__stat")
        nameStat = document.createElement("p")
        nameStat.innerHTML = "ATK"
        valueStat = document.createElement("p")
        valueStat.innerHTML = new String(objPokemon.stats[1]["base_stat"])
        stat.append(nameStat,valueStat)
        statsPokemon.appendChild(stat)

        /* DEF */
        stat = document.createElement("div")
        stat.classList.add("pokemon__stat")
        nameStat = document.createElement("p")
        nameStat.innerHTML = "DEF"
        valueStat = document.createElement("p")
        valueStat.innerHTML = new String(objPokemon.stats[2]["base_stat"])
        stat.append(nameStat,valueStat)
        statsPokemon.appendChild(stat)

        /* SP-ATK */
        stat = document.createElement("div")
        stat.classList.add("pokemon__stat")
        nameStat = document.createElement("p")
        nameStat.innerHTML = "SP-ATK"
        valueStat = document.createElement("p")
        valueStat.innerHTML = new String(objPokemon.stats[3]["base_stat"])
        stat.append(nameStat,valueStat)
        statsPokemon.appendChild(stat)

        /* SP-DEF */
        stat = document.createElement("div")
        stat.classList.add("pokemon__stat")
        nameStat = document.createElement("p")
        nameStat.innerHTML = "SP-DEF"
        valueStat = document.createElement("p")
        valueStat.innerHTML = new String(objPokemon.stats[4]["base_stat"])
        stat.append(nameStat,valueStat)
        statsPokemon.appendChild(stat)

        /* SPD */
        stat = document.createElement("div")
        stat.classList.add("pokemon__stat")
        nameStat = document.createElement("p")
        nameStat.innerHTML = "SPD"
        valueStat = document.createElement("p")
        valueStat.innerHTML = new String(objPokemon.stats[5]["base_stat"])
        stat.append(nameStat,valueStat)
        statsPokemon.appendChild(stat)

        return statsPokemon
    }
    cardInf.appendChild(stats())

    /*=====UNIFICATION=====*/
    let pokemon = document.createElement("div")
    pokemon.classList.add("pokemon")
    pokemon.appendChild(cardSup)
    pokemon.appendChild(cardImg)
    pokemon.appendChild(cardInf)
    
    return pokemon
}

/*=====PROMESA-QUE-PERMITE-CARGAR-EN-ORDEN-DE-ID=====*/
function loadPokemon(){
    return new Promise((resolve)=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonCounter}`)
            .then(res=>res.json())
            .then(response=>{
                let elementPokemon = createPokemon(response)
                resolve(elementPokemon)
            })
    })
}
async function callLoader(){
    await console.time("carga de pokemones")
    let pokemon = []
    document.querySelector(".load").style.display = "flex"
    while(pokemonCounter<pokemonUntil && pokemonUntil <= 905){
        pokemonCounter++
        pokemon.push(await loadPokemon())
    }
    pokemonUntil+=20
    document.querySelector(".load").style.display = "none"
    pokeContainer.append(...pokemon)
    addEventHoverPokemons()
    console.log(pokeContainer.children[0].innerHTML)
    await console.timeEnd("carga de pokemones")
}
callLoader();
/*===============AWAIT===============*/
window.onscroll = ()=>{
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight && document.querySelector(".load").style.display !== "flex" && pokemonUntil< 905){
        callLoader()
    }
}
/*===============EVENTOS-DEL-FILTRO===============*/
$(".option__input").focus((elem)=>{
    elem.target.parentNode.children[1].style.display = "block"
})
$(".option__input").focusout((elem)=>{
    setTimeout(()=>{
        elem.target.parentNode.children[1].style.display = "none"
    },100)
})
document.querySelectorAll(".option__input").forEach((optionSearch)=>{
    optionSearch.oninput = (char)=>{
        let seeker = new RegExp(optionSearch.value.split("").map((a)=>{return `${a}[\\w\\d\\s]*`}).join(""),"i")
        let options = optionSearch.parentNode.children[1].children;
        for(let elem in options){
            if((!seeker.test(options[elem].innerHTML) && (!isNaN(Number(elem))))){
                options[elem].style.display = "none"
            }
        }
        if(char.inputType == "deleteContentBackward"){
            for(let elem in options){
                if(seeker.test(options[elem].innerHTML) && (!isNaN(Number(elem)))){
                    options[elem].style.display = "flex"
                }
            }
        }
    }
})
/*===============HOVER-POKEMONs===============*/
function insertAtk(targetPlace){
    //primero pregunta el filtro tiene ataques propuestos
    //Si existen, se fija si son validos esos ataques (si esta dentro de las capacidades del pokemon)
    //Sino, busca una alazar
    //esto se intera por los elementos con id atk_(numero)
    document.querySelectorAll(".option__input").forEach((elem)=>{
        if(elem.value != ""){

        }
    })
}
function addEventHoverPokemons(){
    document.querySelectorAll(".pokemon").forEach(poke=>{
        poke.addEventListener("mouseenter",(elem)=>{
            if(elem.target.children[2]?.children[0].classList.value.includes("atkCont")){
                elem.target.children[2].children[0].style.display = "flex"
            }
            if(elem.target.classList.contains("pokemon") && elem.target.children[2].children.length == 2){
                insertAtk(elem.target.children[2])
            }
        })
        poke.addEventListener("mouseleave",(elem)=>{
            if(elem.target.classList.contains("pokemon") && elem.target.children[2].children.length == 3){
                elem.target.children[2].children[0].style.display = "none"
            }
        })
    })
}