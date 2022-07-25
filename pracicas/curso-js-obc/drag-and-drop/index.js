const parragraphs = document.querySelectorAll(".paragraph")
const sections = document.querySelectorAll(".section")
const basurero = document.querySelector(".basurero")

parragraphs.forEach(parrafo=>{
    parrafo.addEventListener("dragstart", event =>{
        event.dataTransfer.setData("id",parrafo.id)
    })
})

sections.forEach(section=>{
    section.addEventListener("dragover", event =>{
        event.preventDefault();
    })
    section.addEventListener("drop", event =>{
        section.appendChild(document.getElementById(event.dataTransfer.getData("id")))
    })
})

//basurero

basurero.addEventListener("dragover", event =>{
    event.preventDefault();
})
basurero.addEventListener("drop", event=>{
    document.getElementById(event.dataTransfer.getData("id")).remove()
})