$("#gameStatus").hide();
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
let winnerDeclared = false;
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function init() {
  $("td").click(function (e) {
    $(this).text(currentPlayer);
    let index = $(this).attr("index");
    gameState[index] = currentPlayer;
    checkWinner();
    checkDraw();
    changePlayer();
  });
}

function checkWinner() {
  for (let i = 0; i < 8; i++) {
    let a = winningConditions[i][0];
    let b = winningConditions[i][1];
    let c = winningConditions[i][2];

    if (
      gameState[a] === currentPlayer &&
      gameState[b] === currentPlayer &&
      gameState[c] === currentPlayer
    ) {
      winnerDeclared = true;
      $("h1").text("Winner is " + currentPlayer);
      $("td").unbind();
      $("#gameStatus").show();
      setTimeout(() => {
        gameOver();
      }, 3000);
    }
  }
}

function checkDraw() {
  if (!gameState.includes("") && !winnerDeclared) {
    $("h1").text("Game Draw");
    $("#gameStatus").show();
    setTimeout(() => {
      gameOver();
    }, 3000);
  }
}

function changePlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function gameOver() {
  currentPlayer = "X";
  gameState = ["", "", "", "", "", "", "", "", ""];
  winnerDeclared = false;
  $("td").text("");
  init();
  $("#gameStatus").hide();
}

init();

$("#reset").click(function (e) {
  location.reload();
});
