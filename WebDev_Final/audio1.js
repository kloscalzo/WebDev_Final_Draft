//Katharine LoScalzo
//Bringing audio to my site! First audio
//Contemplation

var webAudio;

function preload(){
    webAudio = loadSound("music/poeticBeats.mp3");
}

function setup(){
    
    webAudio.play();
}

