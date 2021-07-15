document.getElementById("openNav").onclick = function() {
   document.getElementById("openNav").style.display = "none"
    document.getElementById("sideNav").setAttribute("style", 'width:250px; display:block;')

}
document.getElementById("closeNav").onclick = function() {
    document.getElementById("sideNav").setAttribute("style", 'width:0')
}