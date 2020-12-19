for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     animate(this.innerHTML);
     playSound(this.innerHTML);
});
}
document.addEventListener("keypress",function(e){
   animate(e.key);
  playSound(e.key);

});
function playSound(ch){
  var media;
  switch(ch)
  {
    case "w":media=new Audio("sounds/crash.mp3");
    media.play();
    break;
    case "a":media=new Audio("sounds/kick-bass.mp3");
    media.play();
    break;
    case "s":media=new Audio("sounds/snare.mp3");
    media.play();
    break;
    case "d":media=new Audio("sounds/tom-1.mp3");
    media.play();
    break;
    case "j":media=new Audio("sounds/tom-2.mp3");
    media.play();
    break;
    case "k":media=new Audio("sounds/tom-3.mp3");
    media.play();
    break;
    case "l":media=new Audio("sounds/tom-4.mp3");
    media.play();
    break;
  }
}
function animate(key){
  var c="."+key;
  document.querySelector(c).classList.add("pressed");
  setTimeout(function(){
    document.querySelector(c).classList.remove("pressed");
}, 100);

}
