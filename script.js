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
        board[row].splice(column, 1, activePlayer.token);
        console.log(board);
        win();
    }

    function win() {
        const players = gameController().players;
        // for first player
        if (board[0][0] == players[0].token && board[0][1] == players[0].token && board[0][2] == players[0].token) {
            console.log(`${players[0].player}` + ' wins!');
        }
        else if (board[1][0] == players[0].token && board[1][1] == players[0].token && board[1][2] == players[0].token) {
            console.log(`${players[0].player}` + ' wins!');
        }
        else if (board[2][0] == players[0].token && board[2][1] == players[0].token && board[2][2] == players[0].token) {
            console.log(`${players[0].player}` + ' wins!');
        }
        else if (board[0][0] == players[0].token && board[1][0] == players[0].token && board[2][0] == players[0].token) {
            console.log(`${players[0].player}` + ' wins!');
        }
        else if (board[0][1] == players[0].token && board[1][1] == players[0].token && board[2][1] == players[0].token) {
            console.log(`${players[0].player}` + ' wins!');
        }
        else if (board[0][2] == players[0].token && board[1][2] == players[0].token && board[2][2] == players[0].token) {
            console.log(`${players[0].player}` + ' wins!');
        }
        else if (board[0][0] == players[0].token && board[1][1] == players[0].token && board[2][2] == players[0].token) {
            console.log(`${players[0].player}` + ' wins!');
        }
        else if (board[0][2] == players[0].token && board[1][1] == players[0].token && board[2][0] == players[0].token) {
            console.log(`${players[0].player}` + ' wins!');
        }
        // for second player
        else if (board[0][0] == players[1].token && board[0][1] == players[1].token && board[0][2] == players[1].token) {
            console.log(`${players[1].player}` + ' wins!');
        }
        else if (board[1][0] == players[1].token && board[1][1] == players[1].token && board[1][2] == players[1].token) {
            console.log(`${players[1].player}` + ' wins!');
        }
        else if (board[2][0] == players[1].token && board[2][1] == players[1].token && board[2][2] == players[1].token) {
            console.log(`${players[1].player}` + ' wins!');
        }
        else if (board[0][0] == players[1].token && board[1][0] == players[1].token && board[2][0] == players[1].token) {
            console.log(`${players[1].player}` + ' wins!');
        }
        else if (board[0][1] == players[1].token && board[1][1] == players[1].token && board[2][1] == players[1].token) {
            console.log(`${players[1].player}` + ' wins!');
        }
        else if (board[0][2] == players[1].token && board[1][2] == players[1].token && board[2][2] == players[1].token) {
            console.log(`${players[1].player}` + ' wins!');
        }
        else if (board[0][0] == players[1].token && board[1][1] == players[1].token && board[2][2] == players[1].token) {
            console.log(`${players[1].player}` + ' wins!');
        }
        else if (board[0][2] == players[1].token && board[1][1] == players[1].token && board[2][0] == players[1].token) {
            console.log(`${players[1].player}` + ' wins!');
        }
        else { null; }

    }

    return {
        updateBoard,
        getBoard
    }

}

let activePlayer;

function gameController() {

    const board = gameBoard();

    const players = [
        {
            player: 'firstPlayer',
            token: "x"
        },
        {
            player: 'secondPlayer',
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

        return activePlayer, console.log(`${activePlayer.player}` + '`s turn');
    }

    /* revise code */
    const addToken = (row, column) => {

        switchPlayer();

        board.updateBoard(row, column);

    }

    return {
        players,
        addToken
    }

}

const play = gameController().addToken;
play(1, 1);
play(0, 0);
play(1, 0);
play(0, 1);