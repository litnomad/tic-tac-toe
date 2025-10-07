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
        board[row].splice(column, 1, activePlayer);
        console.log(board);
    }

    return {
        updateBoard,
        getBoard
    };

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

    /* revise code */
    const addToken = (row, column) => {

        switchPlayer();
        board.updateBoard(row, column);
        
    }

    return {
        players,
        addToken
    };

}

const play = gameController()
play.addToken(1, 1);
play.addToken(0, 0);