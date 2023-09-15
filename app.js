let board = [
  ["x", "x", "o"],
  ["x", "x", "o"],
  ["x", "o", "x"],
];
let player = "x";

function addText(id) {
  document.getElementById(id).innerHTML = player;
  if (player == "x") {
    player = "o";
  } else {
    player = "x";
  }
  checkForWin();
}

function checkForWin() {
  if (board[0][0] == "x" && board[0][1] == "x" && board[0][2] == "x") {
    document.getElementById("result").innerHTML = "X Wins!";
  }
}
