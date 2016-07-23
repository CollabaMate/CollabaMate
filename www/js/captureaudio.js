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
function recordAudio() {
    var src = "myrecording.mp3";
    var mediaRec = new Media(src, onSuccess, onError);

    // Record audio
    mediaRec.startRecord();

    // Stop recording after 10 sec
    var recTime = 0;
    var recInterval = setInterval(function() {
        recTime = recTime + 1;
        setAudioPosition(recTime + " sec");
        if (recTime >= 10) {
            clearInterval(recInterval);
            mediaRec.stopRecord();
        }
    }, 1000);
}

// Cordova is ready
//
function captureclick() {
    recordAudio();
}

// onSuccess Callback
//
function onSuccess() {
    console.log("recordAudio():Audio Success");
}

// onError Callback
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
}

// Set audio position
//
function setAudioPosition(position) {
    document.getElementById('audio_position').innerHTML = position;
}