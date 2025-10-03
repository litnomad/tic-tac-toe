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
        let token = gameController().currentPlayer;
        board[row].splice(column, 1, token);
        console.log(board);
    }

    const getBoard = () => board; // console log doesn't work without board

    return { addToken, getBoard };

}

function gameController() {

    const board = gameBoard()

    const players = [{ player: 'first player', token: "x" }, { player: 'second player', token: "o" }];
    let currentPlayer = players[0].token;

    const switchPlayer = () => {
        currentPlayer = currentPlayer == players[0].token ? players[1].token : players[0].token;
    }

    const updateBoard = () => board.addToken;

    return { currentPlayer, updateBoard };

}

/*
const game = gameBoard().addToken
game(1, 1); // ['', 'x', '']
game(0, 0); 
*/

/*
gameBoard().getBoard // ['', '', ''], () => board
*/

const play = gameController().updateBoard()
play(1, 1); 