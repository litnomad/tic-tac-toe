function gameBoard() {
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
        
        // will only add token to empty square
        if (row != 'reset' && column != 'reset' && board[row][column] === '') {
            board[row].splice(column, 1, activePlayer.token);
            console.log(board);
            console.log(`${activePlayer.player}` + '`s turn');
            text.innerHTML = `${activePlayer.player}` + '`s turn';
            header.appendChild(text);
        }
        else {
            null;
        }

    }

    return {
        updateBoard,
        getBoard
    }

}

let activePlayer;

function gameController(firstPlayer = 'First player') {

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

    function win() {
        // const players = gameController().players;

        console.log(board.getBoard());
        // for first player
        if (board.getBoard()[0][0] == players[0].token && board.getBoard()[0][1] == players[0].token && board.getBoard()[0][2] == players[0].token) {
            console.log(`${players[0].player}` + ' wins!');

            text.innerHTML = `${players[0].player}` + ' wins!';
            header.appendChild(text);
        }
        else if (board.getBoard()[1][0] == players[0].token && board.getBoard()[1][1] == players[0].token && board.getBoard()[1][2] == players[0].token) {
            console.log(`${players[0].player}` + ' wins!');

            text.innerHTML = `${players[0].player}` + ' wins!';
            header.appendChild(text);
        }
        else if (board.getBoard()[2][0] == players[0].token && board.getBoard()[2][1] == players[0].token && board.getBoard()[2][2] == players[0].token) {
            console.log(`${players[0].player}` + ' wins!');

            text.innerHTML = `${players[0].player}` + ' wins!';
            header.appendChild(text);
        }
        else if (board.getBoard()[0][0] == players[0].token && board.getBoard()[1][0] == players[0].token && board.getBoard()[2][0] == players[0].token) {
            console.log(`${players[0].player}` + ' wins!');

            text.innerHTML = `${players[0].player}` + ' wins!';
            header.appendChild(text);
        }
        else if (board.getBoard()[0][1] == players[0].token && board.getBoard()[1][1] == players[0].token && board.getBoard()[2][1] == players[0].token) {
            console.log(`${players[0].player}` + ' wins!');

            text.innerHTML = `${players[0].player}` + ' wins!';
            header.appendChild(text);
        }
        else if (board.getBoard()[0][2] == players[0].token && board.getBoard()[1][2] == players[0].token && board.getBoard()[2][2] == players[0].token) {
            console.log(`${players[0].player}` + ' wins!');

            text.innerHTML = `${players[0].player}` + ' wins!';
            header.appendChild(text);
        }
        else if (board.getBoard()[0][0] == players[0].token && board.getBoard()[1][1] == players[0].token && board.getBoard()[2][2] == players[0].token) {
            console.log(`${players[0].player}` + ' wins!');

            text.innerHTML = `${players[0].player}` + ' wins!';
            header.appendChild(text);
        }
        else if (board.getBoard()[0][2] == players[0].token && board.getBoard()[1][1] == players[0].token && board.getBoard()[2][0] == players[0].token) {
            console.log(`${players[0].player}` + ' wins!');

            text.innerHTML = `${players[0].player}` + ' wins!';
            header.appendChild(text);
        }
        // for second player
        else if (board.getBoard()[0][0] == players[1].token && board.getBoard()[0][1] == players[1].token && board.getBoard()[0][2] == players[1].token) {
            console.log(`${players[1].player}` + ' wins!');

            text.innerHTML = `${players[1].player}` + ' wins!';
            header.appendChild(text);
        }
        else if (board.getBoard()[1][0] == players[1].token && board.getBoard()[1][1] == players[1].token && board.getBoard()[1][2] == players[1].token) {
            console.log(`${players[1].player}` + ' wins!');

            text.innerHTML = `${players[1].player}` + ' wins!';
            header.appendChild(text);
        }
        else if (board.getBoard()[2][0] == players[1].token && board.getBoard()[2][1] == players[1].token && board.getBoard()[2][2] == players[1].token) {
            console.log(`${players[1].player}` + ' wins!');

            text.innerHTML = `${players[1].player}` + ' wins!';
            header.appendChild(text);
        }
        else if (board.getBoard()[0][0] == players[1].token && board.getBoard()[1][0] == players[1].token && board.getBoard()[2][0] == players[1].token) {
            console.log(`${players[1].player}` + ' wins!');

            text.innerHTML = `${players[1].player}` + ' wins!';
            header.appendChild(text);
        }
        else if (board.getBoard()[0][1] == players[1].token && board.getBoard()[1][1] == players[1].token && board.getBoard()[2][1] == players[1].token) {
            console.log(`${players[1].player}` + ' wins!');

            text.innerHTML = `${players[1].player}` + ' wins!';
            header.appendChild(text);
        }
        else if (board.getBoard()[0][2] == players[1].token && board.getBoard()[1][2] == players[1].token && board.getBoard()[2][2] == players[1].token) {
            console.log(`${players[1].player}` + ' wins!');

            text.innerHTML = `${players[1].player}` + ' wins!';
            header.appendChild(text);
        }
        else if (board.getBoard()[0][0] == players[1].token && board.getBoard()[1][1] == players[1].token && board.getBoard()[2][2] == players[1].token) {
            console.log(`${players[1].player}` + ' wins!');

            text.innerHTML = `${players[1].player}` + ' wins!';
            header.appendChild(text);
        }
        else if (board.getBoard()[0][2] == players[1].token && board.getBoard()[1][1] == players[1].token && board.getBoard()[2][0] == players[1].token) {
            console.log(`${players[1].player}` + ' wins!');

            text.innerHTML = `${players[1].player}` + ' wins!';
            header.appendChild(text);
        }
        else { false; }

    }

    const addToken = (row, column) => {

        switchPlayer();

        board.updateBoard(row, column);

        win();

    }

    return {
        players,
        addToken
    }

}

const play = gameController();

// attach game to DOM element 
const header = document.querySelector('header');
const text = document.createElement('h3');
const submit = document.querySelector('.submit');
const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
const container = document.querySelector('.container');

text.style.color = 'red';

// reset button clears board
resetBtn.addEventListener('click', () => {
    play.addToken('reset', 'reset');

    container.querySelectorAll('button').forEach((button) => {
        button.innerText = ''
    });

})

// start button changes inactive to active
startBtn.addEventListener('click', () => {
    container.querySelectorAll('button').forEach((button) => {
        button.classList.replace('inactive', 'active');
    })
})

container.addEventListener('click', (e) => {
    let target = e.target;
    if (target.matches('button.active')) {
        play.addToken(target.dataset.row, target.dataset.column);

        if (!target.innerText) {
            target.innerText = activePlayer.token;
        }
    }
})

// user enters player name 
submit.addEventListener('click', (e) => {
    const firstPlayer = document.querySelector('#name').value;

    play.players[0].player = firstPlayer;

    e.preventDefault();
})