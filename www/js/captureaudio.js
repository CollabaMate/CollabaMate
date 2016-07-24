// /**
//  * Created by lucas on 23/07/16.
//  */
// var captureSuccess = function(mediaFiles) {
//     // var file, path;
//     // file = mediaFiles[0].localURL;
//     // filePath = mediaFiles[0].fullPath;
//     // console.log('captureSuccess');console.dir(filePath);
//
// };
//
// // capture error callback
// var captureError = function(error) {
//     // navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
// };
//
//
// function captureclick() {
//     // console.log(navigator.device.capture.toString());
//     var options = { limit: 1, quality: 1 };
//     navigator.device.capture.captureAudio(captureSuccess, captureError, options);
// }

//=============================================================================================

// Wait for Cordova to load
//

// // Record audio
// //
var src = "myrecording.mp3";
var mediaRec = new Media(src, onSuccess, onError);
var recstop = false;
var path = "";

function recordAudio() {
    mediaRec = new Media(src, onSuccess, onError);

    // Record audio
    mediaRec.startRecord();
    path = mediaRec.getCurrentPosition();

    // Stop recording after 30 sec
    recTime = 30;
    var recInterval = setInterval(function() {
        if(recstop){
            setAudioPosition("");
            return;
        }
        recTime = recTime - 0.1;
        setAudioPosition(recTime.toFixed(1) + " sec");
        if (recTime <= 0) {
            clearInterval(recInterval);
            mediaRec.stopRecord();
        }
    }, 100);
}

// Cordova is ready
//
function startrecord() {
    document.getElementById("start_record").className = 'record_hide';
    document.getElementById("stop_record").className = 'record_show';
    recstop = false;
    recordAudio();
}

function stoprecord() {
    document.getElementById("start_record").className = 'record_show';
    document.getElementById("stop_record").className = 'record_hide';
    recstop = true;
    mediaRec.stopRecord();
}

function playandstop(){
    if (document.getElementById("playrecord").innerHTML == "Play Mix"){
        playrecord();
    } else {
        stopplayrecord();
    }
}

function playrecord() {
    document.getElementById("playrecord").innerHTML = "Stop";
    mediaRec.play();
}

function stopplayrecord(){
    document.getElementById("playrecord").innerHTML = "Play Mix";
    mediaRec.stop();
}

// onSuccess Callback
//
function onSuccess() {
    console.log("recordAudio():Audio Success");
}

// onError Callback
//
function onError(error) {
    // alert('code: '    + error.code    + '\n' +
    //     'message: ' + error.message + '\n');
}

// Set audio position
//
function setAudioPosition(position) {
    document.getElementById('audio_position').innerHTML = position;
}