document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  animation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("crash.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("kick-bass.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("snare.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("tom-1.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("tom-2.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("tom-3.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("tom-4.mp3");
      kick.play();
      break;

    default:
      console.log(key);
  }
}


function animation(currentkey){
    document.querySelector("."+currentkey).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("."+currentkey).classList.remove("pressed");

    },100);
}