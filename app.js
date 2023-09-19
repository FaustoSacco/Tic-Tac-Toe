let board = ["", "", "", "", "", "", "", "", ""];
let player = "x";
let finish = false;

function addText(id) {
  if (finish == false) {
    if (board[id] == "") {
      document.getElementById(id).innerHTML = player;
      if (player == "x") {
        board[id] = "x";
        checkForWin();
        player = "o";
      } else {
        board[id] = "o";
        checkForWin();
        player = "x";
      }
      console.log(board);
    }
  }
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
    document.getElementById("result").innerHTML = player + " Wins";
  }
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  player = "x";
  finish = false;
}
