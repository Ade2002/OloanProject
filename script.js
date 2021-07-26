document.getElementById("openNav").onclick = function() {
   document.getElementById("openNav").style.display = "none"
   document.getElementById("sideNav").setAttribute("style", 'width:250px; display:block;')
   
}
document.getElementById("closeNav").onclick = function() {
    document.getElementById("sideNav").setAttribute("style", 'width:0')
    document.getElementById("openNav").style.display = "block"
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






