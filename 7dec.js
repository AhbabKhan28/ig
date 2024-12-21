var btn = document.querySelector('button')
var body = document.querySelector('body')

btn.addEventListener('click', () => {
    let img = document.createElement("img")
    img.setAttribute('src', "pngimg.com - minions_PNG84.png")
body.appendChild('img')
img.style.height = '90px'
img.style.position = 'absolute'
img.style.top = Math.random()*95 + "%"
img.style.left = MAth.random()*95 + "%"
})