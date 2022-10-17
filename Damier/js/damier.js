let recup_url = window.location.href;
let tab_color = ["white", "black"];
let index_color = 0;

let board = document.createElement("div");
board.setAttribute('id', 'board');
document.body.appendChild(board);


let cell;

for (let i = 0; i < 8; ++i) {
    for (let j = 0; j < 8; ++j) {
        cell = document.createElement("div");
        cell.setAttribute('class', tab_color[(i + j) % 2]);
        if (i == 1 || i == 6) {
            cell.innerText = "Pawn";
        }
        else if (i == 0) {
            switch (j) {
                case 0:
                    cell.innerText = "Tower";
                    break;

                case 1:
                    cell.innerText = "Night";
                    break;

                case 2:
                    cell.innerText = "Crazy";
                    break;
                    
                case 3:
                    cell.innerText = "Queen";
                    break;

                case 4:
                    cell.innerText = "King";
                    break;

                case 5:
                    cell.innerText = "Crazy";
                    break;

                case 6:
                    cell.innerText = "Night";
                    break;

                case 7:
                    cell.innerText = "Tower";
                    break;
            }
        }
        board.appendChild(cell);
    }
}

