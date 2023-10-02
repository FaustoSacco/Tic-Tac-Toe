let board = ["", "", "", "", "", "", "", "", ""];
let player = "x";
let finish = false;
let turn = 1;
let availableSquares = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function addText(id) {
  if (finish == false) {
    turn++;
    if (board[id] == "") {
      // add delete elements here
      document.getElementById(id).innerHTML = player;

      availableSquares = availableSquares.filter((number) => number != id);
      console.log(availableSquares);
      board[id] = "x";
      checkForWin();
      if (finish == false) {
        turn++;
        player = "o";
        let randomSquare = chooseRandomSquare();
        document.getElementById(randomSquare).innerHTML = player;
        board[randomSquare] = "o";
        checkForWin();
        player = "x";
      }
    }
  } else {
    resetGame();
  }
}

function chooseRandomSquare() {
  let index = Math.floor(Math.random() * availableSquares.length);
  return availableSquares[index];
}

function checkForWin() {
  if (board[0] == player && board[1] == player && board[2] == player) {
    finish = true;
  }
  if (board[3] == player && board[4] == player && board[5] == player) {
    finish = true;
  }
  if (board[6] == player && board[7] == player && board[8] == player) {
    finish = true;
  }
  if (board[0] == player && board[3] == player && board[6] == player) {
    finish = true;
  }
  if (board[1] == player && board[4] == player && board[7] == player) {
    finish = true;
  }
  if (board[2] == player && board[5] == player && board[8] == player) {
    finish = true;
  }
  if (board[0] == player && board[4] == player && board[8] == player) {
    finish = true;
  }
  if (board[2] == player && board[4] == player && board[6] == player) {
    finish = true;
  }
  if (finish == true) {
    document.getElementById("result").innerHTML =
      player.toUpperCase() + " wins";
  }
  if (finish == false && turn == 10) {
    document.getElementById("result").innerHTML = "Tie";
    finish = true;
  }
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  player = "x";
  finish = false;
  for (let i = 0; i < 9; i++) {
    document.getElementById(i).innerHTML = "";
  }
  document.getElementById("result").innerHTML = "";
}
