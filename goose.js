document.addEventListener("DOMContentLoaded", () => {
  const sound = document.getElementById("beep");

  function gooseSound() {
    sound.play();
    console.log("honk honk");
  }

  let egg = document.getElementById("egg");
  // document.getElementsByTagName("body").ondblclick = eggDrop;
  // let doubleClick = document.getElementById("doubleClick");

  // doubleClick.ondblclick = eggDrop;

  function eggDrop() {
    // console.log(`${window.innerWidth} windowWidth`);
    let xEggPosRandom = Math.floor(Math.random() * window.innerWidth);
    // console.log(`${xEggPosRandom} egg postiion X`);
    let yEggPosRandom = Math.floor(Math.random() * window.innerHeight);
    return (egg.style = `
    left: ${xEggPosRandom}px;
    top: ${yEggPosRandom}px;
    `);
    // egg.style.left =
    // egg.style.right =
    // return egg;

    // console.log(`${egg.style.left} eggstyleTest`);
  }

  let goose = document.getElementById("goose");
  let moveOnMe = document.getElementById("mouseOnMe");

  moveOnMe.onmousemove = gooseCoords;

  function gooseCoords(mouseEvent) {
    let xpos;
    let ypos;

    if (mouseEvent) {
      xpos = mouseEvent.pageX + "px";
      ypos = mouseEvent.pageY + "px";
    } else {
      xpos = window.event.x + document.body.scrollLeft - 2;
      ypos = window.event.y + document.body.scrollTop - 2;
    }

    goose.style.top = ypos;
    goose.style.left = xpos;
  }

  let translateX = goose.style.width;
  let translateY = goose.style.height;

  goose.style.transform = "translate(" + translateX + ", " + translateY + ")";

  document.addEventListener("mousedown", () => {
    console.log("mousedown honk working");
    gooseSound();
  });

  document.addEventListener("dblclick", () => {
    eggDrop();
    console.log("egg drop");
  });
  // document.addEventListener("mousemove", () => {
  //   console.log("goose cursor listener working");
  //   gooseCoords();
  // });
});
