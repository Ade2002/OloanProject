let sideNav = document.getElementById("sideNav");
let openNav =  document.getElementById("openNav");
let closeNav = document.getElementById("closeNav")

openNav.onclick = function() {
    openNav.style.display = "none";
    sideNav.style.display = "block";
   
}
closeNav.onclick = function() {
    sideNav.style.display = "none";
    openNav.style.display = "block";
}


let text = "Lorem Ipsum has been the industry's standard dummy....";
let index = 0;

function writeText() {
    document.getElementById("lorem").innerHTML = text.slice(0, index);

    index++;

    if(index > text.length -0){
        index = 0;
    }
}

setInterval(writeText,150)






