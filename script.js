for(var i = 0; i < document.querySelectorAll(".btn").length; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click",function() {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}
document.addEventListener("keypress",function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    switch (key) {
        case '1':
        var tom = new Audio("./sounds/crash.mp3");
        tom.play();
        break;
        
        case '2':
        var tom = new Audio("./sounds/kick-bass.mp3");
        tom.play();
        break;
        
        case '3':
        var tom = new Audio("./sounds/snare.mp3");
        tom.play();
        break;
        
        case '4':
        var tom = new Audio("./sounds/tom-1.mp3");
        tom.play();
        break;
        
        case '5':
        var tom = new Audio("./sounds/tom-2.mp3");
        tom.play();
        break;

        case '6':
        var tom = new Audio("./sounds/tom-3.mp3");
        tom.play();
        break;

        case '7':
        var tom = new Audio("./sounds/tom-4.mp3");
        tom.play();
        break;

        default:
            break;
    }
}
function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }
  