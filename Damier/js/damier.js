// 1 : to identify the data in the url
let recupUrl = window.location.href.split('?')[1]; // TODO: choisir une seule langue (recupUrl = francais/anglais)
let queryString = new URLSearchParams(recupUrl);
window.history.replaceState({}, '', `${location.pathname}?L=&W=`);

// 2 : to give the "boardLength" and "boardWidth" the data
let boardLength;
let boardWidth;
recupTheData(); // TODO: choisir une seule langue (recupTheData = francais/anglais)

// 3 : To determinate the pieces and the colors
let tabColor = ["white", "black"];

let whitePositions = [["WHITE_ROOK", "♖"], ["WHITE_KNIGHT", "♘"], ["WHITE_BISHOP", "♗"], ["WHITE_KING", "♔"], ["WHITE_QUEEN", "♕"],
["WHITE_BISHOP", "♗"], ["WHITE_KNIGHT", "♘"], ["WHITE_ROOK", "♖"], ["WHITE_PAWN", "♙"]];

let blackPositions = [["BLACK_ROOK", "♜"], ["BLACK_KNIGHT", "♞"], ["BLACK_BISHOP", "♝"], ["BLACK_KING", "♚"], ["BLACK_QUEEN", "♛"],
["BLACK_BISHOP", "♝"], ["BLACK_KNIGHT", "♞"], ["BLACK_ROOK", "♜"], ["BLACK_PAWN", "♟"]];

// 4 : to create the board
let board = document.createElement("div");
board.setAttribute('id', 'board');
document.body.appendChild(board);


// 5 : To check if the parameters are defined

let cell;

/* TODO: clarifier ces boucles : 
 * si boardLength ET boardWith sont null, alors elles passent à 8
 * sinon, si boardLength est null, elle passe à 8
 * sinon si boardWidth est null, elle passe à 8
 * = 3 fois la meme boucle ?
 */

if (boardLength == '' && boardWidth == '' || boardLength == undefined && boardWidth == undefined) {
    boardLength = 8;
    boardWidth = 8;

} else {
    if (boardLength == '' || boardLength == undefined) {
        boardLength = 8;

    } if (boardWidth == '' || boardWidth == undefined) {
        boardWidth = 8;
    }
}


// 6 : to create the cells on the board
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
 * This function is to recup the date
 */
function recupTheData() {
    for (let pair of queryString.entries()) { // Object.entries() renvoie un tableau des propriétés sous la forme de paires [clé, valeur]
        if (pair[0] == "L") {
            boardLength = pair[1];

        } else if (pair[0] == "W") {
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

    if (i == 0) {
        cell.innerText = whitePositions[j][1];
    }
    else if (i == 1) {
        cell.textContent = whitePositions[8][1];

    } else if (i == 6) {
        cell.innerText = blackPositions[8][1];
        
    } else if (i == boardLength - 1) {
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