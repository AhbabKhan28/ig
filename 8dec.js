var cursor = document.querySelector('#coursor')
var body = document.querySelector('body')
var box = document.querySelector('.box')
var h1 = document.querySelector('h1')

// cursor.addEventListener('mousemove',function(a){
//     box.style.left = a.x + "px"
//     box.style.top = a.y + "px"
body.addEventListener('mousemove',function(dets){
    console.log(dets);
    box.style.top = dets.x + "px"
    box.style.left = dets.y + "px"
})
h1.addEventListener("mouseenter", function(){
    cursor.style.scale = 4;
})
h1.addEventListener("mouseleave", function(){
    cursor.style.scale = 1;
})