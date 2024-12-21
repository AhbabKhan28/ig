let users=[{
    img: "",
    fullName: "XYZA",
    time: "5 hours ago"
},
{
    img: "",
    fullName: "XYZB",
    time: "5 hours ago"
},
{
    img: "",
    fullName: "XYZC",
    time: "5 hours ago"
},
{
    img: "",
    fullName: "XYZD",
    time: "5 hours ago"
},
{
    img: "https://images.unsplash.com/photo-1732945302017-fbc971324ebe?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fullName: "XYZM",
    time: "5 hours ago"
}]
var sum="";
var statuss = document.querySelector(".status");
users.forEach(function(elem){
    sum+=statuss.innerHTML = `
    <div class="overlay">
        <img src="${elem.img}" alt="">
        <div class="content">
            <h2>${elem.fullName}</h2>
            <h6>${elem.time}</h6>
        </div>
    </div>`
})
