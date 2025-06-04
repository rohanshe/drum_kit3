var numberofbutton = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberofbutton; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttoninnerhtml =this.innerHTML;
   makesound(buttoninnerhtml);
   addanimation(buttoninnerhtml);


  });
}
document.addEventListener("keypress",function(event){

  makesound(event.key);
  addanimation(event.key);
});
function makesound(key){
  switch (key) {
    case "a":
      // var  crash= new Audio("sounds/crash.mp3");
      var crash = new Audio("sounds/shapeofyou.mp3");
      crash.play();
      break;

      case "s":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

        case "d":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;
          case "f":
            var  tom_1= new Audio("sounds/tom-1.mp3");
            tom_1.play();
            break;

            case "j":
              var tom_2= new Audio("sounds/tom-2.mp3");
              tom_2.play();
              break;
              case "k":
                var tom_3 = new Audio("sounds/tom-3.mp3");
                tom_3.play();
                break;
                case "l":
                  var tom_4 = new Audio("sounds/tom-4.mp3");
                  tom_4.play();
                  break;


    default:
      console.log(key);
      break;
  }
 
  
}
function addanimation(currentkey){
  var activekey = document.querySelector("."+currentkey);
  activekey.classList.add("pressed");

// document.querySelector("h1").classList.add("pressed");
setTimeout(function(){
  activekey.classList.remove("pressed");
},120);
}

