document.addEventListener("DOMContentLoaded", () => {
  const sound = document.getElementById("beep");

  function gooseSound() {
    sound.play();
    console.log("honk honk");
  }

  document.addEventListener("mousedown", () => {
    console.log("mousedown honk working");
    gooseSound();
  });

  document.addEventListener("mousemove", () => {
    console.log("goose cursor listener working");
    ballCoords();
  });

  var ball = document.getElementById("ball");
  var moveOnMe = document.getElementById("mouseOnMe");

  moveOnMe.onmousemove = ballCoords;

  function ballCoords(mouseEvent) {
    var xpos;
    var ypos;

    if (mouseEvent) {
      xpos = mouseEvent.pageX + "px";
      ypos = mouseEvent.pageY + "px";
    } else {
      //IE
      xpos = window.event.x + document.body.scrollLeft - 2;
      ypos = window.event.y + document.body.scrollTop - 2;
    }

    ball.style.top = ypos;
    ball.style.left = xpos;
  }

  var translateX = ball.style.width;
  var translateY = ball.style.height;

  ball.style.transform = "translate(" + translateX + ", " + translateY + ")";
});
