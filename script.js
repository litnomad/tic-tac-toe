function gameBoard() {
    const board = [];
    const rows = 3;
    const columns = 3;

    const getBoard = () => board;

    for (i = 0; i < rows; i++) {
        board.push([]);
        for (j = 0; j < columns; j++) {
            board[i].push('');
        }
    }

    function updateBoard(row, column) {

        // will only add token to empty square
        if (board[row][column] === '') {
            board[row].splice(column, 1, activePlayer.token);
            console.log(board);
            console.log(`${activePlayer.player}` + '`s turn');
        }
        else {
            null;
        }

        win();
    }

    function win() {
        const players = gameController().players;
        // for first player
        if (board[0][0] == players[0].token && board[0][1] == players[0].token && board[0][2] == players[0].token) {
            console.log(`${players[0].player}` + ' wins!');

            winText.innerHTML = `${players[0].player}` + ' wins!';
            header.appendChild(winText);
        }
        else if (board[1][0] == players[0].token && board[1][1] == players[0].token && board[1][2] == players[0].token) {
            console.log(`${players[0].player}` + ' wins!');

            winText.innerHTML = `${players[0].player}` + ' wins!';
            header.appendChild(winText);
        }
        else if (board[2][0] == players[0].token && board[2][1] == players[0].token && board[2][2] == players[0].token) {
            console.log(`${players[0].player}` + ' wins!');

            winText.innerHTML = `${players[0].player}` + ' wins!';
            header.appendChild(winText);
        }
        else if (board[0][0] == players[0].token && board[1][0] == players[0].token && board[2][0] == players[0].token) {
            console.log(`${players[0].player}` + ' wins!');

            winText.innerHTML = `${players[0].player}` + ' wins!';
            header.appendChild(winText);
        }
        else if (board[0][1] == players[0].token && board[1][1] == players[0].token && board[2][1] == players[0].token) {
            console.log(`${players[0].player}` + ' wins!');

            winText.innerHTML = `${players[0].player}` + ' wins!';
            header.appendChild(winText);
        }
        else if (board[0][2] == players[0].token && board[1][2] == players[0].token && board[2][2] == players[0].token) {
            console.log(`${players[0].player}` + ' wins!');

            winText.innerHTML = `${players[0].player}` + ' wins!';
            header.appendChild(winText);
        }
        else if (board[0][0] == players[0].token && board[1][1] == players[0].token && board[2][2] == players[0].token) {
            console.log(`${players[0].player}` + ' wins!');

            winText.innerHTML = `${players[0].player}` + ' wins!';
            header.appendChild(winText);
        }
        else if (board[0][2] == players[0].token && board[1][1] == players[0].token && board[2][0] == players[0].token) {
            console.log(`${players[0].player}` + ' wins!');

            winText.innerHTML = `${players[0].player}` + ' wins!';
            header.appendChild(winText);
        }
        // for second player
        else if (board[0][0] == players[1].token && board[0][1] == players[1].token && board[0][2] == players[1].token) {
            console.log(`${players[1].player}` + ' wins!');

            winText.innerHTML = `${players[1].player}` + ' wins!';
            header.appendChild(winText);
        }
        else if (board[1][0] == players[1].token && board[1][1] == players[1].token && board[1][2] == players[1].token) {
            console.log(`${players[1].player}` + ' wins!');

            winText.innerHTML = `${players[1].player}` + ' wins!';
            header.appendChild(winText);
        }
        else if (board[2][0] == players[1].token && board[2][1] == players[1].token && board[2][2] == players[1].token) {
            console.log(`${players[1].player}` + ' wins!');

            winText.innerHTML = `${players[1].player}` + ' wins!';
            header.appendChild(winText);
        }
        else if (board[0][0] == players[1].token && board[1][0] == players[1].token && board[2][0] == players[1].token) {
            console.log(`${players[1].player}` + ' wins!');

            winText.innerHTML = `${players[1].player}` + ' wins!';
            header.appendChild(winText);
        }
        else if (board[0][1] == players[1].token && board[1][1] == players[1].token && board[2][1] == players[1].token) {
            console.log(`${players[1].player}` + ' wins!');

            winText.innerHTML = `${players[1].player}` + ' wins!';
            header.appendChild(winText);
        }
        else if (board[0][2] == players[1].token && board[1][2] == players[1].token && board[2][2] == players[1].token) {
            console.log(`${players[1].player}` + ' wins!');

            winText.innerHTML = `${players[1].player}` + ' wins!';
            header.appendChild(winText);
        }
        else if (board[0][0] == players[1].token && board[1][1] == players[1].token && board[2][2] == players[1].token) {
            console.log(`${players[1].player}` + ' wins!');

            winText.innerHTML = `${players[1].player}` + ' wins!';
            header.appendChild(winText);
        }
        else if (board[0][2] == players[1].token && board[1][1] == players[1].token && board[2][0] == players[1].token) {
            console.log(`${players[1].player}` + ' wins!');

            winText.innerHTML = `${players[1].player}` + ' wins!';
            header.appendChild(winText);
        }
        else { false; }

    }

    return {
        updateBoard,
        getBoard
    }

}

let activePlayer;

function gameController(firstPlayer) {

    const board = gameBoard();

    const players = 
        [
            {
                player: firstPlayer,
                token: "x"
            },
            {
                player: 'Second player',
                token: "o"
            }
        ]

    function switchPlayer() {

        if (activePlayer == undefined) {
            activePlayer = players[0];
        }
        else if (activePlayer == players[0]) {
            activePlayer = players[1];
        }
        else if (activePlayer == players[1]) {
            activePlayer = players[0];
        }
        else {
            false;
        }

        return activePlayer;
    }

    const addToken = (row, column) => {

        switchPlayer();

        board.updateBoard(row, column);

    }

    return {
        players,
        addToken
    }

}

const play = gameController();


// attach game to DOM element 
const header = document.querySelector('header');
const buttons = document.querySelectorAll('#cell');
const winText = document.createElement('h3');
const submit = document.querySelector('.submit');

winText.style.color = 'red';

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        play.addToken(button.dataset.row, button.dataset.column);

        if (!button.innerText) {
            button.innerText = activePlayer.token;
        }
    }
    )
}
)

// user enters player name 
submit.addEventListener('click', (e) => {
    const firstPlayer = document.querySelector('#name').value;
    play.players[0].player = firstPlayer;

    e.preventDefault();
})