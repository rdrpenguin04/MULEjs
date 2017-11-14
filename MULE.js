var script;
var resourcesToLoad;
var loadedResources;

function init() {
  resourcesToLoad = []; /* TODO: put in resources to load, this is any images or game data
                        that we don't want to embed in this file. */
  loadedResources = [];
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

function title() {
  
}

var audio;

var doneLoading = true;
function loadDataAndStartMusic() {
  //Load data here
  //If we are done, start music and set the current script to 0 (title)
  if(doneLoading) {
    audio = new Audio("mainTheme.wav");
    audio.play();
    audio.loop = true;
    script = 0; //title
  }
}

function stop() {
  audio.stop();
  //Unload resources here.
}

function tick() {
  switch(script) {
    case 0:
      title();
      break;
    case 1:
      loadDataAndStartMusic();
      break;
    default:
      log("Invalid game state, restarting...");
      stop();
      init();
      break;
  }
  window.requestAnimationFrame(tick);
}
