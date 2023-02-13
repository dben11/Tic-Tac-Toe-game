
function checkWin(player) {
    const winCombinations = [
        [0,1,2], [3, 4, 5], [6, 7, 8], //rows
        [0, 3, 6],[1, 4, 7],[2, 5, 8], // columns
        [0, 4, 8],[2, 4, 6]// diagnals
    ];

    for (let i = 0; i < winCombinations.length; i++) {
        const [a, b, c]= winCombinations[i];
        if (cells[a].textContent === player && cells[b].textContent === player && cells[c].textContent === player) {

          return true;
        }
    }

    return false;
}


function resetBoard() {
    cells.forEach(cell => {
        cell.textContent = '';
    });

    currentPlayer = 'X';
    moves = 0;
}



//creating a variable const called cell
const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let moves = 0;

cells.forEach(cell => {
    cell.addEventListener('click', e => {
        if (cell.textContent === '') {
            cell.textContent = currentPlayer;
            moves++;

            if (checkWin(currentPlayer)) {
                alert(`player ${currentPlayer} wins`);
                resetBoard();
            }else if (moves === 9) {
                alert('Draw!');
                resetBoard();
            }else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }

    });

});

