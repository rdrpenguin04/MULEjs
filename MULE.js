var script;

function init() {
  script = 1;
  window.requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(f){return setTimeout(f, 1000/60)} // simulate calling code 60 
  
  window.cancelAnimationFrame = window.cancelAnimationFrame
    || window.mozCancelAnimationFrame
    || function(requestID){clearTimeout(requestID)} //fall back
  
  window.requestAnimationFrame(tick);
}

var doneLoading = true;
function loadDataAndStartMusic() {
  //Load data here
  //If we are done, start music and set the current script to 0 (title)
  if(done) {
    var audio = new Audio("mainTheme.wav");
    audio.play();
    script = 0;
  }
}

function tick() {
  switch(script) {
  case 1:
    loadDataAndStartMusic();
  }
  window.requestAnimationFrame(tick);
}
