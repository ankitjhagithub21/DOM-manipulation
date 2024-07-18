const main = document.getElementById('main')
const crsr = document.getElementById('crsr')
const text = document.getElementById('text')

main.addEventListener('mousemove',(dets)=>{
    crsr.style.opacity = 1
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})




main.addEventListener('mouseleave',(dets)=>{
    crsr.style.opacity = 0
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})

