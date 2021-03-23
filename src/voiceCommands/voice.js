export default function (){
var content = document.getElementById("searchTerm");
var animateMic = document.getElementById("voiceComBtn");

animateMic.classList.add("animateMic");

const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();

recognition.lang = "eng";

recognition.onstart = function () {
    console.log("You can talk now, I am listening");
    //console.log(recognition);
};

recognition.onresult = function (event) {
    //console.log(event);
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.value = transcript;
   // console.log(transcript);
    console.log("I dont listen anymore :)");
};

recognition.start();
}

