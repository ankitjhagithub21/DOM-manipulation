const boxes = document.querySelectorAll('.box')

boxes.forEach((box)=>{
    box.addEventListener("mouseenter", function() {
        box.querySelector('img').style.opacity = 1
    
    });
    box.addEventListener("mousemove", function(dets) {
        box.querySelector('img').style.left = dets.x+"px"
    
    });
    box.addEventListener("mouseleave", function() {
        box.querySelector('img').style.opacity = 0
    
    });
})