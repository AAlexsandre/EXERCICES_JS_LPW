// 1 : to identify the data in the url
let recup_url = window.location.href.split('?')[1];
let queryString = new URLSearchParams(recup_url);

// 2 : to give the "board_length" and "board_width" the data
let board_length;
let board_width;
recup_the_data();

// 3 : To determinate the pieces and the colors
let tab_color = ["white", "black"];
let index_color = 0;

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

if (board_length == null && board_width == null) {
    board_length = 8;
    board_width = 8;

} else {
    if (board_length == null) {
        board_length = 8;
    } else if (board_width == null) {
        board_width = 8;
    }
}


// 6 : to create the cells on the board
for (let i = 0; i < board_length; ++i) {
    for (let j = 0; j < board_width; ++j) {
        if (board_length != 8 || board_width != 8) {
            no_chessboard(i, j);
        } else {
            chessboard(i, j);
        }

    }
}

/**
 * This function is to recup the date
 */
function recup_the_data() {
    for (let pair of queryString.entries()) {
        if (pair[0] == "L") {
            board_length = pair[1];

        } else if (pair[0] == "W") {
            board_width = pair[1];
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
    cell.setAttribute('class', tab_color[(i + j) % 2]);
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

    if (i == board_length - 1) {
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