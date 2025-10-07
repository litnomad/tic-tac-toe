function gameBoard() {
    const board = [];
    const rows = 3;
    const columns = 3;

    for (i = 0; i < rows; i++) {
        board.push([]);
        for (j = 0; j < columns; j++) {
            board[i].push('');
        }
    }

    function addToken(row, column) { 

        const token = gameController().switchPlayer()
        board[row].splice(column, 1, token);
        console.log(board);

    }

    const getBoard = () => board;

    return {
        addToken,
        getBoard
    };

}

let activePlayer; // why is this always undefined

function gameController(firstPlayer, secondPlayer) {

    const players = [
        {
            player: firstPlayer,
            token: "x"
        },
        {
            player: secondPlayer,
            token: "o"
        }
    ];

    function switchPlayer() {

        if (activePlayer == undefined) {
            activePlayer = players[0].token;
        }
        else if (activePlayer == players[0].token) {
            activePlayer = players[1].token;
        }
        else if (activePlayer == players[1].token) {
            activePlayer = players[0].token;
        }
        else {
            false;
        }

        return activePlayer, console.log(activePlayer + '`s turn');
    }

    const board = gameBoard();
    const fetchToken = () => board.addToken;

    /* revising code */
    function addToken(row, column, getActivePlayer) {
        
    }

    return {
        fetchToken,
        switchPlayer
    };

}

const play = gameController()
play.fetchToken()(1, 1);
play.fetchToken()(0, 0);