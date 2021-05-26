var speechRecogmition = window.webkitSpeechRecognition;
var Recognition = new speechRecogmition();
function start(){
document.getElementById("textbox").innerHTML="";
recognition.start();
}
recognition.onresult = function run(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML="content";
}