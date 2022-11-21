// 1 : Identify the data in the url
// 2 : Give the "boardLength" and "boardWidth" the data
let boardLength;
let boardWidth;
let cell;

// 3 : Determinate the pieces and the colors
const tabColor = ["white", "black"];
let indexColor = 0;

// ["WHITE_ROOK", "♖"], ["WHITE_KNIGHT", "♘"], ["WHITE_BISHOP", "♗"], ["WHITE_KING", "♔"], ["WHITE_QUEEN", "♕"] 
// ["BLACK_ROOK", "♜"], ["BLACK_KNIGHT", "♞"], ["BLACK_BISHOP", "♝"], ["BLACK_KING", "♚"], ["BLACK_QUEEN", "♛"]

const whitePositions = ["♖","♘","♗","♔","♕","♗","♘","♖","♙"];
const blackPositions = ["♜","♞","♝","♚","♛","♝","♞","♜","♟"];

// 4 : Create the board


let res = dimensionsFromURLParams();
boardLength = res[0];
boardWidth = res[1];

createBoard(boardLength, boardWidth);
// 5 : Check if the parameters are defined

/**
 * This function fetch the data
 */
function dimensionsFromURLParams() {
    const queryString = new URLSearchParams(document.location.search);
    let length = parseInt(queryString.get("L"), 10);
    let width = parseInt(queryString.get("W"), 10);

    if (isNaN(length) || length <= 0) {
        length = 8;
    }
    if (isNaN(width) || width <= 0) {
        width = 8;
    }
    return [length, width];
}


function createBoard(boardLength, boardWidth)
{
    const isChessboard = boardLength == 8 && boardWidth == 8;
    const board = document.createElement("div");

    board.setAttribute('id', 'board');
    document.body.appendChild(board);
    
    board.style.gridTemplateColumns = `repeat(${boardWidth}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${boardLength}, 1fr)`;
    
    
    // 6 : Create the cells on the board
    for (let row = 0; row < boardLength; ++row) {
        for (let col = 0; col < boardWidth; ++col) {

            board.appendChild(createCell(row,col,isChessboard));
        }
    }
}

/**
 * This fonction creates the cells on the board
 * @param {number} row 
 * @param {number} col 
 */
function createCell(row, col, isChess) {
    let cell = document.createElement("div");
    cell.setAttribute('class', tabColor[(row + col) % 2]);

    if(isChess){
        if (row === 0) {
            cell.innerText = whitePositions[col];
        }
        else if (row === 1) {
            cell.textContent = whitePositions[8];
    
        } else if (row === 6) {
            cell.innerText = blackPositions[8];
    
        } else if (row === boardLength - 1) {
            console.log(col);
            cell.innerText = blackPositions[col];
        }
    }

    return cell;
}