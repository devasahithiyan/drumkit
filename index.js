//document.querySelector("h2").innerHTML = "";

var w = new Audio("sounds/crash.mp3");
var a = new Audio("sounds/kick-bass.mp3");
var s = new Audio("sounds/snare.mp3");
var d = new Audio("sounds/tom-1.mp3");
var j = new Audio("sounds/tom-2.mp3");
var k = new Audio("sounds/tom-3.mp3");
var l = new Audio("sounds/tom-4.mp3");
for(let i = 0 ; i < document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
       
     var key = this.innerHTML;
       playsound(key);
       document.querySelector("h2").innerHTML = "You have pressed " + key;

    });

}

document.addEventListener("keydown", function(event){
    document.querySelector("h2").innerHTML = "You have pressed " + event.key;
   playsound(event.key);
});

function playsound(key){
    switch(key){
        case "w": 
        w.play();
        break;case "w":
        w.play();
        break;
    case "a":
        a.play();
        break;
    case "s":
        s.play();
        break;
    case "d":
        d.play();
        break;
    case "j":
        j.play();
        break;
    case "k":
        k.play();
        break;
    case "l":
        l.play();
        break;
        default :
        document.querySelector("h2").innerHTML = "You have pressed an inavlid key";
    }
}

$(".a.drum").click(function (){
    
    $(this).css("color" , "blue")
});
//$("h1").text("swswß");

//$("button").css("color" , "red");