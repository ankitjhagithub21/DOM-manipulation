const openBtn = document.getElementById('openBtn')
const sideBar = document.getElementById('sidebar')



openBtn.addEventListener('click',()=>{
    sideBar.style.right = 0
})


closeBtn.addEventListener('click',()=>{
    sideBar.style.right = "-100%"
})

