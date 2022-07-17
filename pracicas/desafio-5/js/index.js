/*=====DISABLED=====*/
$("#disabled__btn-1").click(()=>{
    $("#disabled__btn-2").attr("disabled","")
})
$("#disabled__btn-2").click(()=>{
    $("#disabled__btn-1").attr("disabled","")
})
/*=====FIRST=====*/
document.querySelector(".first__btn").onclick = ()=>{
    window.print()
}
/*=====FULLSCREEN=====*/
// Similar al if/else lo de aqui abajo
// sentencia ? (si se cumple) : (si no cumple)
// y se puede concatenar-> sentencia ? (si se cumple) : sentencia ? (si se cumple) : (si no cumple)........
// lo de arriba seria algo como if(sentencia){....}else if(sentencia){.....}else.........
document.querySelectorAll(".fullscreen__btn")[0].onclick = () => {
    document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.webkitRequestFullscreen ? document.documentElement.webkitRequestFullscreen() : document.documentElement.msRequestFullscreen()
}
document.querySelectorAll(".fullscreen__btn")[1].onclick = () => {
    document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen()
}
/*=====FOCUS=====*/
// Intenta interpretar el codigo de FOCUS,  veras que aunque no sepas JS
// Es facil de entender por los nombres, solo tienes que saber que
// #focus__text es el input de texto y .focus__label es el label que lo apunta
document.querySelector("#focus__text").addEventListener("focus", ()=>{
    $(".focus__label").css({
        "top": "-18px",
        "margin-left" : "-5px",
        "transform": "scale(0.7)"
    })
})
document.querySelector("#focus__text").addEventListener("focusout", ()=>{
    if(document.querySelector("#focus__text").value != ""){
        $(".focus__label").css({
            "top": "-18px",
            "margin-left" : "-5px",
            "transform": "scale(0.7)"
        })
    }
    else{
        $(".focus__label").css({
            "top": "4px",
            "margin-left" : "10px",
            "transform": "scale(1)"
        })
    }
})