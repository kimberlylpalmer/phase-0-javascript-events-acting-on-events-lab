// Your code here

const dodger = document.getElementById("dodger")
// console.log(dodger)
dodger.style.backgroundColor = "#8c0303"

// dodger.style.bottom = "0px";
// dodger.style.left = "0px";

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "")
  const left = parseInt(leftNumbers, 10);
  if (left > 0) {
    dodger.style.left = `${left-1}px`;
  }
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
  if (left > 0) {
    dodger.style.left = `${left + 1}px`
  }
}

function moveDodgerUp() {
  let leftNumbers = dodger.style.bottom.replace("px", "");
  let left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.bottom = `${left - 10}px`
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
    dodger.style.backgroundColor = "#f2d888";
  }else if (event.key === "ArrowRight") {
    moveDodgerRight();
    dodger.style.backgroundColor = "#FF69B4"
  }else if (event.key === "ArrowUp") {
    moveDodgerUp();
    dodger.style.backgroundColor = "#ffffff"
  }
});

  

/*  PREVIOUS ATTEMPT
let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}



function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10)
    if (left > 0) {
      dodger.style.left = `${left + 1}px`
    }
  }



document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
    
  });

  */