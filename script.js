let sideNav = document.getElementById("sideNav");
let openNav =  document.getElementById("openNav");
let closeNav = document.getElementById("closeNav");
const BREAKPOINT = 720;
openNav.onclick = function(e) {
    openNav.style.display = "none";
    sideNav.style.display = "block";
    e.stopPropagation()
}
closeNav.onclick = function(e) {
e.stopPropagation()
    sideNav.style.display = "none";
    openNav.style.display = "block";
}
window.onclick = function() {
    if(BREAKPOINT){
    sideNav.style.display = "none";
    openNav.style.display = "block";
}
else{
    openNav.style.display = "none";
  }
};


















let lorem = document.getElementById("lorem");
let text = "Lorem Ipsum has been the industry's standard dummy....";
let index = 0;

function writeText() {
    lorem.innerHTML = text.slice(0, index);

    index++;

    if(index > text.length -0){
        index = 0;
    }
}

setInterval(writeText,150)





let scrollTop = document.getElementById("scrollTop");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop >20 || document.documentElement.scrollTop > 20) {
        scrollTop.style.display = "block";
    } else {
        scrollTop.style.display = "none";
    }
    scrollTop.onclick = function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
  };












  var dots = document.getElementById("dots");
var moreText = document.getElementById("more");

dots.onclick = function() {
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
  }
 }
  moreText.onclick = function() {
  if (moreText.style.display === "inline") {
    dots.style.display = "inline";
    moreText.style.display = "none";
  }
  }
