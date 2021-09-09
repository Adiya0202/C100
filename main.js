var speech_recognition= window.webkitSpeechRecognition;

var recognition= new speech_recognition();
 function pic_take(){
     document.getElementById("text_box").innerHTML="";
     recognition.start();
 }
 recognition.onresult= function(event){
     console.log(event);
     var content=event.results[0][0].transcript;
     document.getElementById("text_box").innerHTML=content;
     if(content=="take my selfie"){
         talk();
     }
 }
function talk(){
 synth= window.speechSynthesis;
 var speak_data="taking your selfie in 7 seconds";
 var utterThis=new SpeechSynthesisUtterance(speak_data);
 synth.speak(utterThis);
 Webcam.attach(camera);
 setTimeout(function(){
     takeSelfie();
     save();
 },7000);
}
Webcam.set({
    height:250,
    width:360,
    image_format:'png',
    png_quality:100
});

var camera=document.getElementById("camera");

function takeSelfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="preview" src="'+data_uri+'">';
    });
}
function save(){
    anchor=document.getElementById("automatic");
    var image=document.getElementById("preview").src;
    anchor.href=image;
    anchor.click();
}