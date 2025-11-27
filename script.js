// gameBoard module creates board array and updates the array when a token is received
// playable on the console 
const gameBoard = (function () {
    let board = [];
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

        if (row === 'reset' && column === 'reset') {

            board = [];

            for (i = 0; i < rows; i++) {
                board.push([]);
                for (j = 0; j < columns; j++) {
                    board[i].push('');
                }
            }

            console.log(board);

            activePlayer = null;
            text.innerHTML = '';

        }

        // add token if empty
        if (row != 'reset' && column != 'reset' && board[row][column] === '') {
            board[row].splice(column, 1, activePlayer.token);
            console.log(board);
        }
        else {
            null;
        }

    }

    return {
        getBoard,
        updateBoard
    }

})();

let activePlayer;

// gameController module creates players and tokens, tracks player turns, and checks win or tie conditions
const gameController = (function (firstPlayer = 'First player (x)') {

    const players =
        [
            {
                player: firstPlayer,
                token: "x"
            },
            {
                player: 'Second player (o)',
                token: "o"
            }
        ]

    function playerSwitcher() {

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

    function checkWinCondition() {

        // first player
        if (gameBoard.getBoard()[0][0] == players[0].token && gameBoard.getBoard()[0][1] == players[0].token && gameBoard.getBoard()[0][2] == players[0].token) {
            console.log(`${players[0].player}` + ' wins!');

            text.innerHTML = `${players[0].player}` + ' wins!';
            div.appendChild(text);

            container.querySelectorAll('button').forEach((button) => {
                button.classList.replace('active', 'inactive')
            });

        }
        else if (gameBoard.getBoard()[1][0] == players[0].token && gameBoard.getBoard()[1][1] == players[0].token && gameBoard.getBoard()[1][2] == players[0].token) {
            console.log(`${players[0].player}` + ' wins!');

            text.innerHTML = `${players[0].player}` + ' wins!';
            div.appendChild(text);

            container.querySelectorAll('button').forEach((button) => {
                button.classList.replace('active', 'inactive')
            });
        }
        else if (gameBoard.getBoard()[2][0] == players[0].token && gameBoard.getBoard()[2][1] == players[0].token && gameBoard.getBoard()[2][2] == players[0].token) {
            console.log(`${players[0].player}` + ' wins!');

            text.innerHTML = `${players[0].player}` + ' wins!';
            div.appendChild(text);

            container.querySelectorAll('button').forEach((button) => {
                button.classList.replace('active', 'inactive')
            });
        }
        else if (gameBoard.getBoard()[0][0] == players[0].token && gameBoard.getBoard()[1][0] == players[0].token && gameBoard.getBoard()[2][0] == players[0].token) {
            console.log(`${players[0].player}` + ' wins!');

            text.innerHTML = `${players[0].player}` + ' wins!';
            div.appendChild(text);

            container.querySelectorAll('button').forEach((button) => {
                button.classList.replace('active', 'inactive')
            });
        }
        else if (gameBoard.getBoard()[0][1] == players[0].token && gameBoard.getBoard()[1][1] == players[0].token && gameBoard.getBoard()[2][1] == players[0].token) {
            console.log(`${players[0].player}` + ' wins!');

            text.innerHTML = `${players[0].player}` + ' wins!';
            div.appendChild(text);

            container.querySelectorAll('button').forEach((button) => {
                button.classList.replace('active', 'inactive')
            });
        }
        else if (gameBoard.getBoard()[0][2] == players[0].token && gameBoard.getBoard()[1][2] == players[0].token && gameBoard.getBoard()[2][2] == players[0].token) {
            console.log(`${players[0].player}` + ' wins!');

            text.innerHTML = `${players[0].player}` + ' wins!';
            div.appendChild(text);

            container.querySelectorAll('button').forEach((button) => {
                button.classList.replace('active', 'inactive')
            });
        }
        else if (gameBoard.getBoard()[0][0] == players[0].token && gameBoard.getBoard()[1][1] == players[0].token && gameBoard.getBoard()[2][2] == players[0].token) {
            console.log(`${players[0].player}` + ' wins!');

            text.innerHTML = `${players[0].player}` + ' wins!';
            div.appendChild(text);

            container.querySelectorAll('button').forEach((button) => {
                button.classList.replace('active', 'inactive')
            });
        }
        else if (gameBoard.getBoard()[0][2] == players[0].token && gameBoard.getBoard()[1][1] == players[0].token && gameBoard.getBoard()[2][0] == players[0].token) {
            console.log(`${players[0].player}` + ' wins!');

            text.innerHTML = `${players[0].player}` + ' wins!';
            div.appendChild(text);

            container.querySelectorAll('button').forEach((button) => {
                button.classList.replace('active', 'inactive')
            });
        }
        // second player
        else if (gameBoard.getBoard()[0][0] == players[1].token && gameBoard.getBoard()[0][1] == players[1].token && gameBoard.getBoard()[0][2] == players[1].token) {
            console.log(`${players[1].player}` + ' wins!');

            text.innerHTML = `${players[1].player}` + ' wins!';
            div.appendChild(text);

            container.querySelectorAll('button').forEach((button) => {
                button.classList.replace('active', 'inactive')
            });
        }
        else if (gameBoard.getBoard()[1][0] == players[1].token && gameBoard.getBoard()[1][1] == players[1].token && gameBoard.getBoard()[1][2] == players[1].token) {
            console.log(`${players[1].player}` + ' wins!');

            text.innerHTML = `${players[1].player}` + ' wins!';
            div.appendChild(text);

            container.querySelectorAll('button').forEach((button) => {
                button.classList.replace('active', 'inactive')
            });
        }
        else if (gameBoard.getBoard()[2][0] == players[1].token && gameBoard.getBoard()[2][1] == players[1].token && gameBoard.getBoard()[2][2] == players[1].token) {
            console.log(`${players[1].player}` + ' wins!');

            text.innerHTML = `${players[1].player}` + ' wins!';
            div.appendChild(text);

            container.querySelectorAll('button').forEach((button) => {
                button.classList.replace('active', 'inactive')
            });
        }
        else if (gameBoard.getBoard()[0][0] == players[1].token && gameBoard.getBoard()[1][0] == players[1].token && gameBoard.getBoard()[2][0] == players[1].token) {
            console.log(`${players[1].player}` + ' wins!');

            text.innerHTML = `${players[1].player}` + ' wins!';
            div.appendChild(text);

            container.querySelectorAll('button').forEach((button) => {
                button.classList.replace('active', 'inactive')
            });
        }
        else if (gameBoard.getBoard()[0][1] == players[1].token && gameBoard.getBoard()[1][1] == players[1].token && gameBoard.getBoard()[2][1] == players[1].token) {
            console.log(`${players[1].player}` + ' wins!');

            text.innerHTML = `${players[1].player}` + ' wins!';
            div.appendChild(text);

            container.querySelectorAll('button').forEach((button) => {
                button.classList.replace('active', 'inactive')
            });
        }
        else if (gameBoard.getBoard()[0][2] == players[1].token && gameBoard.getBoard()[1][2] == players[1].token && gameBoard.getBoard()[2][2] == players[1].token) {
            console.log(`${players[1].player}` + ' wins!');

            text.innerHTML = `${players[1].player}` + ' wins!';
            div.appendChild(text);

            container.querySelectorAll('button').forEach((button) => {
                button.classList.replace('active', 'inactive')
            });
        }
        else if (gameBoard.getBoard()[0][0] == players[1].token && gameBoard.getBoard()[1][1] == players[1].token && gameBoard.getBoard()[2][2] == players[1].token) {
            console.log(`${players[1].player}` + ' wins!');

            text.innerHTML = `${players[1].player}` + ' wins!';
            div.appendChild(text);

            container.querySelectorAll('button').forEach((button) => {
                button.classList.replace('active', 'inactive')
            });
        }
        else if (gameBoard.getBoard()[0][2] == players[1].token && gameBoard.getBoard()[1][1] == players[1].token && gameBoard.getBoard()[2][0] == players[1].token) {
            console.log(`${players[1].player}` + ' wins!');

            text.innerHTML = `${players[1].player}` + ' wins!';
            div.appendChild(text);

            container.querySelectorAll('button').forEach((button) => {
                button.classList.replace('active', 'inactive')
            });
        }
        else {
            false;
        }
    }

    function checkTieCondition() {
        const array = gameBoard.getBoard();
        const newArray = array.flat();
        if (newArray.includes('')) {
            return false;
        }
        else {
            text.innerHTML = 'Tie.';
            div.appendChild(text);

            container.querySelectorAll('button').forEach((button) => {
                button.classList.replace('active', 'inactive')
            });
        }
    }

    function displayPlayerTurn() {
        if (activePlayer === players[0]) {
            text.innerHTML = `${players[1].player}` + '`s turn';
            div.appendChild(text);
        }
        else if (activePlayer === players[1]) {
            text.innerHTML = `${players[0].player}` + '`s turn';
            div.appendChild(text);
        }
    }

    const addToken = (row, column) => {

        playerSwitcher();

        gameBoard.updateBoard(row, column);

        displayPlayerTurn();

        checkWinCondition();
        checkTieCondition();
    }

    return {
        players,
        addToken
    }

})();

const playRound = gameController;

// DOM to allow user to play with the console through contents of the webpage starts here

const div = document.querySelector('.results');
const text = document.createElement('h3');
const submit = document.querySelector('.submit');
const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
const container = document.querySelector('.container');

text.style.color = 'black';

// reset button 
resetBtn.addEventListener('click', () => {
    playRound.addToken('reset', 'reset');

    container.querySelectorAll('button').forEach((button) => {
        button.innerText = ''
    });

})

// start button activates board 
startBtn.addEventListener('click', () => {
    container.querySelectorAll('button').forEach((button) => {
        button.classList.replace('inactive', 'active');
    })
})

// click a button on the board to add token
container.addEventListener('click', (e) => {
    let target = e.target;
    if (target.matches('button.active')) {
        playRound.addToken(target.dataset.row, target.dataset.column);

        if (!target.innerText) {
            target.innerText = activePlayer.token;
        }
    }
})

// submit username
submit.addEventListener('click', (e) => {
    const username = document.querySelector('input[id="name"]').value;

    playRound.players[0].player = username;
    document.querySelector('input[id="name"]').value = '';

    e.preventDefault();
})