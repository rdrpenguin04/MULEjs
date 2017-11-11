var script;

function init() {
  script = 1;
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
}
