// 1 : to identify the data in the url
let recupUrl = window.location.href.split('?')[1];
let queryString = new URLSearchParams(recupUrl);

// 2 : to give the "boardLength" and "boardWidth" the data
let boardLength;
let boardWidth;
recupTheData();

// 3 : To determinate the pieces and the colors
let tabColor = ["white", "black"];
let indexColor = 0;

let tab_pieces = [["WHITE_KING", "♔",], ["WHITE_QUEEN", "♕"], ["WHITE_ROOK", "♖"],
["WHITE_BISHOP", "♗"], ["WHITE_KNIGHT", "♘"], ["WHITE_PAWN", "♙"],
["BLACK_KING", "♚"], ["BLACK_QUEEN", "♛"], ["BLACK_ROOK", "♜"],
["BLACK_BISHOP", "♝"], ["BLACK_KNIGHT", "♞"], ["BLACK_PAWN", "♟"]
];

// 4 : to create the board
let board = document.createElement("div");
board.setAttribute('id', 'board');
document.body.appendChild(board);


// 5 : To checker if the parameters are defined
let cell;

if (boardLength == null && boardWidth == null) {
    boardLength = 8;
    boardWidth = 8;

} else {
    if (boardLength == null) {
        boardLength = 8;
    } else if (boardWidth == null) {
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
    for (let pair of queryString.entries()) {
        if (pair[0] == "L") {
            boardLength = pair[1];

        } else if (pair[0] == "W") {
            boardWidth = pair[1];
        }
    }
}

/**
 * This function calls the other function to create the cells on the board
 * @param {number} i 
 * @param {number} j 
 */
function no_chessboard(i, j) {
    createCell(i, j);
}

/**
 * This function calls the other function to create the cells and the pieces on the board 
 * @param {number} i 
 * @param {number} j 
 */
function chessboard(i, j) {
    createCell(i, j);

    if (i == 1) {
        cell.textContent = tab_pieces[5][1];
    } else if (i == 6) {
        cell.innerText = tab_pieces[11][1];
    }
    else if (i == 0) {
        to_place_the_pieces(i, j);
    } else if (i == 7) {
        to_place_the_pieces(i, j);
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

/**
 * This function is to place the white pieces
 * @param {number} j 
 */
function to_place_the_pieces(i, j) {
    switch (j) {
        case 0:
            cell.innerText = tab_pieces[2][1];
            break;

        case 1:
            cell.innerText = tab_pieces[4][1];
            break;

        case 2:
            cell.innerText = tab_pieces[3][1];
            break;

        case 3:
            cell.innerText = tab_pieces[1][1];
            break;

        case 4:
            cell.innerText = tab_pieces[0][1];
            break;

        case 5:
            cell.innerText = tab_pieces[3][1];
            break;

        case 6:
            cell.innerText = tab_pieces[4][1];
            break;

        case 7:
            cell.innerText = tab_pieces[2][1];
            break;

        default:
            console.log("vide");
    }

    if (i == boardLength - 1) {
        switch (j) {
            case 0:
                cell.innerText = tab_pieces[8][1];
                break;

            case 1:
                cell.innerText = tab_pieces[10][1];
                break;

            case 2:
                cell.innerText = tab_pieces[9][1];
                break;

            case 3:
                cell.innerText = tab_pieces[7][1];
                break;

            case 4:
                cell.innerText = tab_pieces[6][1];
                break;

            case 5:
                cell.innerText = tab_pieces[9][1];
                break;

            case 6:
                cell.innerText = tab_pieces[10][1];
                break;

            case 7:
                cell.innerText = tab_pieces[8][1];
                break;

            default:
                console.log("vide");
        }
    }
}