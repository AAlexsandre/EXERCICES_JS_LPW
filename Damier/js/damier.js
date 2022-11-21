// 1 : Identify the data in the url
const urlParams = window.location.href.split('?')[1];
const queryString = new URLSearchParams(urlParams);
window.history.replaceState({}, '', `${location.pathname}?L=&W=`);

// 2 : Give the "boardLength" and "boardWidth" the data
let boardLength;
let boardWidth;
fetchData();

// 3 : Determinate the pieces and the colors
const tabColor = ["white", "black"];
let indexColor = 0;

const whitePositions = [["WHITE_ROOK", "♖"], ["WHITE_KNIGHT", "♘"], ["WHITE_BISHOP", "♗"], ["WHITE_KING", "♔"], ["WHITE_QUEEN", "♕"],
["WHITE_BISHOP", "♗"], ["WHITE_KNIGHT", "♘"], ["WHITE_ROOK", "♖"], ["WHITE_PAWN", "♙"]];

const blackPositions = [["BLACK_ROOK", "♜"], ["BLACK_KNIGHT", "♞"], ["BLACK_BISHOP", "♝"], ["BLACK_KING", "♚"], ["BLACK_QUEEN", "♛"],
["BLACK_BISHOP", "♝"], ["BLACK_KNIGHT", "♞"], ["BLACK_ROOK", "♜"], ["BLACK_PAWN", "♟"]];

// 4 : Create the board
const board = document.createElement("div");
board.setAttribute('id', 'board');
document.body.appendChild(board);


// 5 : Check if the parameters are defined
let cell;

console.log(boardLength);
console.log(boardWidth);

if (boardLength === '') {
    boardLength = 8;
} 
if (boardWidth === '') {
    boardWidth = 8;
}

console.log(boardLength);
console.log(boardWidth);


// 6 : Create the cells on the board
for (let i = 0; i < boardLength; ++i) {
    for (let j = 0; j < boardWidth; ++j) {
        if (boardLength != 8 || boardWidth != 8) {
            no_chessboard(i, j);
        } else {
            chessboard(i, j);
        }

    }
}

/**
 * This function fetch the data
 */
function fetchData() {
    for (let pair of queryString.entries()) { // Object.entries() renvoie un tableau des propriétés sous la forme de paires [clé, valeur]
        if (pair[0] === "L") {
            boardLength = pair[1];

        } else if (pair[0] === "W") {
            boardWidth = pair[1];
        }
    }
}

/**
 * This function calls the other function to create the cells on the board
 * TODO: quelle autre fonction?
 * @param {number} i 
 * @param {number} j 
 */
function no_chessboard(i, j) {
    createCell(i, j);
}

/**
 * This function calls the other function to create the cells and the pieces on the board 
 * TODO: quelle autre fonction?
 * @param {number} i 
 * @param {number} j 
 */
function chessboard(i, j) {
    createCell(i, j);

    if (i === 0) {
        cell.innerText = whitePositions[j][1];
    }
    else if (i === 1) {
        cell.textContent = whitePositions[8][1];

    } else if (i === 6) {
        cell.innerText = blackPositions[8][1];

    } else if (i === boardLength - 1) {
        cell.innerText = blackPositions[j][1];
    }
}

/**
 * This fonction creates the cells on the board
 * @param {number} i 
 * @param {number} j 
 */
function createCell(i, j) {
    cell = document.createElement("div");
    cell.setAttribute('class', tabColor[(i + j) % 2]);
    board.appendChild(cell);
}