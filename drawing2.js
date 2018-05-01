document.getElementById('myAudio').addEventListener('ended',repeat,false);
function repeat(e) {
    setTimeout(function(){
        document.getElementById('myAudio').play();
    }, 6000);
}

document.getElementById('myAudio2').addEventListener('ended',repeat2,false);
function repeat2(e) {
    setTimeout(function(){
        document.getElementById('myAudio').play();
    }, 5000);
}