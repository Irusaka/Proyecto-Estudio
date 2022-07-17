const videoContainer = document.querySelector(".video")
const audioContainer = document.querySelector(".partes-container")
let contador = 0;
function insertVideo(){
    new Promise((resolve)=>{
        setTimeout(()=>{videoContainer.innerHTML = `<video loop preload autoplay>
    <source src="/recursos/america.mp4" type="video/mp4">
    </video>`},5000)
    })
}
function insertAudio(){
    audioContainer.innerHTML = `<div class="alas">
    <audio autoplay>
        <source src="/recursos/aguila.mp3" type="audio/mp3">
    </audio>
</div>
<div class="cabeza"></div>`
    asyncInsertVideo()
}
async function asyncInsertVideo(){
    await insertVideo();
}
const btnPiece = document.querySelectorAll(".btn-piece")
btnPiece.forEach(piece=>{
    piece.addEventListener("dragstart",event=>{
        event.dataTransfer.setData("id",piece.id)
    })
})
const btnPiecePlace = document.querySelectorAll(".btn-piece-place")
btnPiecePlace.forEach(place=>{
    place.addEventListener("dragover",event=>{
        event.preventDefault()
    })
    place.addEventListener("drop", event =>{
        let dataId = event.dataTransfer.getData("id")
        let placeId = place.id
        if(dataId[6] == placeId[6]){
            place.appendChild(document.getElementById(event.dataTransfer.getData("id")))
            contador++;
            if(contador == 4){
                insertAudio()
            }
        }else{
            console.log("No coincidente")
        }
    })
})
