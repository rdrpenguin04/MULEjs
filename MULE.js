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
    || function(f){return setTimeout(f, 1000/60)}
  
  window.cancelAnimationFrame = window.cancelAnimationFrame
    || window.mozCancelAnimationFrame
    || function(requestID){clearTimeout(requestID)}
  
  window.requestAnimationFrame(tick);
}

function title() {
  
}

var music;

var doneLoading = true;
function loadDataAndStartMusic() {
  // Load data here
  // If we are done, start music and set the current script to 0 (title)
  if(doneLoading) {
    music = new Audio("mainTheme.wav"); // TODO: MOVE TO LOADING DATA
    audio.play();
    audio.loop = true;
    script = 0; //title
  }
}

function stop() {
  audio.stop();
  // Unload resources here.
}

var scripts = [title, loadDataAndStartMusic];

function tick() {
  if(script >= scripts.length) {
    log("Error: invalid script! Resetting...");
    stop();
    init();
  }
  scripts[script]();
  window.requestAnimationFrame(tick);
}
