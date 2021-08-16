let sideNav = document.getElementById("sideNav");
let openNav =  document.getElementById("openNav");
let closeNav = document.getElementById("closeNav");
const BREAKPOINT = 720;
const DESKTOP = 1200;
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






/*Facebook chat box*/


  var chatbox = document.getElementById('fb-customer-chat');
  chatbox.setAttribute("page_id", "105341675127176");
  chatbox.setAttribute("attribution", "biz_inbox");

  window.fbAsyncInit = function() {
    FB.init({
      xfbml            : true,
      version          : 'v11.0'
    });
  };

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));


  /*    Facebok chat box */












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




/*Scroll Top*/
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










var dots = document.querySelectorAll(".dots");
var moreText = document.querySelectorAll(".more");

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





  //Touch Slider Begins

  const slider = document.querySelector('.sliderContainer'),
  slides = Array.from(document.querySelectorAll('.slide'));

  let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  previousTranslate = 0,
  animationID = 0,
  currentIndex = 0;

  slides.forEach((slide, index) => {
    const slideImage = slide.querySelector('img')
    
    slideImage.addEventListener('dragstart', (e) => e.preventDefault())

    // Touch Events


   // Mouse Events
   slide.addEventListener('mousedown', touchStart(index))
   slide.addEventListener('mouseup', touchEnd)
   slide.addEventListener('mouseleave', touchEnd)
   slide.addEventListener('mousemove', touchMove)
  })
  function touchStart(index){
    return function(event) {
      currentIndex = index
      startPos = getPositionX(event)
      isDragging = true

      animationID = requestAnimationFrame(animation)
    }
  }

  function touchEnd(){
    isDragging = false
  }

  function touchMove(event){
    if (isDragging){
    const currentPosition = getPositionX(event)
    currentTranslate = previousTranslate + currentPosition - startPos
  }
  }

  function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
  }

  function animation() {
    setSliderPosition()
    if(isDragging) requestAnimationFrame(animation)
  }

  function setSliderPosition(){
    slider.style.transform = 'translateX(${currentTranslate}px)'

  }