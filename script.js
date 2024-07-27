let turnO = true;
let heading = document.querySelector(".heading");
let box = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let result = document.querySelector(".result");

const winlist = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = () => {
  winlist.forEach((item) => {
    let x = box[item[0]].innerHTML;
    let y = box[item[1]].innerHTML;
    let z = box[item[2]].innerHTML;
    console.log("checking");
    if (x == y && y == z && x != "") {
      result.style.visibility = "visible";
    }
  });
};

box.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.innerHTML == "") {
      if (turnO) {
        e.innerHTML = "O";
        turnO = false;
        heading.innerHTML = "Player X's turn";
      } else {
        e.innerHTML = "X";
        turnO = true;
        heading.innerHTML = "Player O's turn";
      }
    }
    checkWinner();
  });
});

reset.addEventListener("click", () => {
  box.forEach((e) => {
    e.innerHTML = "";
  });
});
