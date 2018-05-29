var btnChessBoard = document.getElementById('getChessBoard');
btnChessBoard.addEventListener('click', getChessBoard);

function getChessBoard() {
  var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  var numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
  blacks = ['&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;',
    '', '', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;'];
  whites = ['&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '', '',
    '&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9821;', '&#9815;', '&#9814;'];

  var chBoard = document.getElementById("chessBoard");

  for (var i = 0; i < 100; i++) {
    var cell = document.createElement("div");

    if (i <= 100) {
      if (i > 10 & i != 19 & i != 20 & i != 29 & i != 30 & i != 39 & i != 40 & i != 49 & i != 50 & i != 59 & i != 60 & i != 69 & i != 70 & i != 79 & i != 80 & i < 89) {
        cell.classList.add("cell");
        cell.style.backgroundColor = parseInt((i / 10) + i) % 2 == 0 ? 'black' : 'white';
        cell.style.color = parseInt((i / 10) + i) % 2 == 0 ? 'white' : 'black';

        if (i > 0 && i < 30) {
          cell.innerHTML = blacks[i - 11];
        }
        else if (i > 70 && i < 100) {
          cell.innerHTML = whites[i - 71];
        }
        chBoard.appendChild(cell);
      } else {
        cell.classList.add("cell");
        if (i > 0 && i < 9) {
          cell.innerText = letters[i - 1];
        }
        else {
          if (i == 10 || i == 20 || i == 30 || i == 40 || i == 50 || i == 60 || i == 70 || i == 80) {

            cell.innerText = numbers[i / 10 - 1];
          }
        }
        chBoard.appendChild(cell);
      }
    }
  }
}
