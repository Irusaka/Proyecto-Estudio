const hola=document.querySelector("button")

$("button").click(()=>{
    console.log("Hola, estoy utilizando jQuery")
})
hola.addEventListener("click",()=>{
    alert("click en el botón")
})
