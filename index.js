let x;
function ticket10() {
  x = 10;
  console.log(x);
}
function ticket1() {
  x = 1;
  console.log(x);
}
function ticket2() {
  x = 2;
  console.log(x);
}
function ticket3() {
  x = 3;
  console.log(x);
}
function ticket4() {
  x = 4;
  console.log(x);
}
function ticket5() {
  x = 5;
  console.log(x);
}
function ticket6() {
  x = 6;
  console.log(x);
}
function ticket7() {
  x = 7;
  console.log(x);
}
function ticket9() {
  x = 9;
  console.log(x);
}
function ticket8() {
  x = 8;
  console.log(x);
}

function winner() {
  let y = Math.floor(Math.random() * 10);
  console.log(y);
  if (y === x) {
    document.getElementById("gif-winner").style.display = "block";
    setTimeout(() => {
      document.location.reload();
    }, 3000);
  } else {
    document.getElementById("gif-loser").style.display = "block";
    setTimeout(() => {
      document.location.reload();
    }, 3000);
  }
}
