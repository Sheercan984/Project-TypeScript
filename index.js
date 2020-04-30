var Board = /** @class */ (function () {
    function Board() {
        this.size = 10;
        this.GenerateVisualBoard();
        this.GenerateCellTabel();
        this.GenerateCarrier();
        this.GenerateBattleship();
        this.GenerateSubmarine();
        this.GenerateCruiser();
        this.GenereteDestroyer();
    }
    Board.prototype.GenerateCellTabel = function () {
        this.cells = [];
        for (var i = 0; i < this.size; i++) {
            this.cells[i] = [];
            for (var j = 0; j < this.size; j++) {
                this.cells[i][j] = new Cell(i, j);
            }
        }
    };
    Board.prototype.GenerateVisualBoard = function () {
        this.table = document.getElementById("Board");
        for (var i = 0; i < this.size; i++) {
            var row = this.table.insertRow(0);
            for (var j = 0; j < this.size; j++) {
                var cell = row.insertCell(0);
                cell.setAttribute('onclick', 'board.Click(' + i + ',' + j + ');');
                cell.id = i + "|" + j;
            }
        }
    };
    Board.prototype.GenerateCarrier = function () {
        var row = Math.floor(Math.random() * 10);
        var col = Math.floor(Math.random() * 10);
        var cell;
        var i;
        if (row < 5 && col < 5) {
            var direction = Math.floor(Math.random() * 2);
            if (direction == 0) {
                for (i = col; i < col + 5; i++) {
                    cell = this.cells[row][i];
                    cell.occupied = true;
                    cell.DrawShip(row, i);
                }
            }
            else if (direction == 1) {
                for (i = row; i < row + 5; i++) {
                    cell = this.cells[i][col];
                    cell.occupied = true;
                    cell.DrawShip(i, col);
                }
            }
        }
        if (row < 5 && col >= 5) {
            var direction = Math.floor(Math.random() * 1);
            if (direction == 0) {
                for (i = col; i > col - 5; i--) {
                    cell = this.cells[row][i];
                    cell.occupied = true;
                    cell.DrawShip(row, i);
                }
            }
            else if (direction == 1) {
                for (i = row; i < row + 5; i++) {
                    cell = this.cells[i][col];
                    cell.occupied = true;
                    cell.DrawShip(i, col);
                }
            }
        }
        if (row >= 5 && col < 5) {
            var direction = Math.floor(Math.random() * 1);
            if (direction == 0) {
                for (i = col; i < col + 5; i++) {
                    cell = this.cells[row][i];
                    cell.occupied = true;
                    cell.DrawShip(row, i);
                }
            }
            else if (direction == 1) {
                for (i = row; i > row - 5; i--) {
                    cell = this.cells[i][col];
                    cell.occupied = true;
                    cell.DrawShip(i, col);
                }
            }
        }
        if (row >= 5 && col >= 5) {
            var direction = Math.floor(Math.random() * 1);
            if (direction == 0) {
                for (i = col; i > col - 5; i--) {
                    cell = this.cells[row][i];
                    cell.occupied = true;
                    cell.DrawShip(row, i);
                }
            }
            else if (direction == 1) {
                for (i = row; i > row - 5; i--) {
                    cell = this.cells[i][col];
                    cell.occupied = true;
                    cell.DrawShip(i, col);
                }
            }
        }
    };
    Board.prototype.GenerateBattleship = function () {
        var row = Math.floor(Math.random() * 10);
        var col = Math.floor(Math.random() * 10);
        var cell;
        var i;
        if (row < 5 && col < 5) {
            var direction = Math.floor(Math.random() * 2);
            if (direction == 0) {
                if (!this.cells[row][col].occupied && !this.cells[row][col + 1].occupied && !this.cells[row][col + 2].occupied && !this.cells[row][col + 3].occupied) {
                    for (i = col; i < col + 4; i++) {
                        cell = this.cells[row][i];
                        cell.occupied = true;
                        cell.DrawShip(row, i);
                    }
                }
                else {
                    this.GenerateBattleship();
                }
            }
            else if (direction == 1) {
                if (!this.cells[row][col].occupied && !this.cells[row + 1][col].occupied && !this.cells[row + 2][col].occupied && !this.cells[row + 3][col].occupied) {
                    for (i = row; i < row + 4; i++) {
                        cell = this.cells[i][col];
                        cell.occupied = true;
                        cell.DrawShip(i, col);
                    }
                }
                else {
                    this.GenerateBattleship();
                }
            }
        }
        if (row < 5 && col >= 5) {
            var direction = Math.floor(Math.random() * 1);
            if (direction == 0) {
                if (!this.cells[row][col].occupied && !this.cells[row][col - 1].occupied && !this.cells[row][col - 2].occupied && !this.cells[row][col - 3].occupied) {
                    for (i = col; i > col - 4; i--) {
                        cell = this.cells[row][i];
                        cell.occupied = true;
                        cell.DrawShip(row, i);
                    }
                }
                else {
                    this.GenerateBattleship();
                }
            }
            else if (direction == 1) {
                if (!this.cells[row][col].occupied && !this.cells[row + 1][col].occupied && !this.cells[row + 2][col].occupied && !this.cells[row + 3][col].occupied) {
                    for (i = row; i < row + 4; i++) {
                        cell = this.cells[i][col];
                        cell.occupied = true;
                        cell.DrawShip(i, col);
                    }
                }
                else {
                    this.GenerateBattleship();
                }
            }
        }
        if (row >= 5 && col < 5) {
            var direction = Math.floor(Math.random() * 1);
            if (direction == 0) {
                if (!this.cells[row][col].occupied && !this.cells[row][col + 1].occupied && !this.cells[row][col + 2].occupied && !this.cells[row][col + 3].occupied) {
                    for (i = col; i < col + 4; i++) {
                        cell = this.cells[row][i];
                        cell.occupied = true;
                        cell.DrawShip(row, i);
                    }
                }
                else {
                    this.GenerateBattleship();
                }
            }
            else if (direction == 1) {
                if (!this.cells[row][col].occupied && !this.cells[row - 1][col].occupied && !this.cells[row - 2][col].occupied && !this.cells[row - 3][col].occupied) {
                    for (i = row; i > row - 4; i--) {
                        cell = this.cells[i][col];
                        cell.occupied = true;
                        cell.DrawShip(i, col);
                    }
                }
                else {
                    this.GenerateBattleship();
                }
            }
        }
        if (row >= 5 && col >= 5) {
            var direction = Math.floor(Math.random() * 1);
            if (direction == 0) {
                if (!this.cells[row][col].occupied && !this.cells[row][col - 1].occupied && !this.cells[row][col - 2].occupied && !this.cells[row][col - 3].occupied) {
                    for (i = col; i > col - 4; i--) {
                        cell = this.cells[row][i];
                        cell.occupied = true;
                        cell.DrawShip(row, i);
                    }
                }
                else {
                    this.GenerateBattleship();
                }
            }
            if (direction == 1) {
                if (!this.cells[row][col].occupied && !this.cells[row - 1][col].occupied && !this.cells[row - 2][col].occupied && !this.cells[row - 3][col].occupied) {
                    for (i = row; i > row - 4; i--) {
                        cell = this.cells[i][col];
                        cell.occupied = true;
                        cell.DrawShip(i, col);
                    }
                }
                else {
                    this.GenerateBattleship();
                }
            }
        }
    };
    Board.prototype.GenerateSubmarine = function () {
        var row = Math.floor(Math.random() * 10);
        var col = Math.floor(Math.random() * 10);
        var cell;
        var i;
        var direction = Math.floor(Math.random() * 4);
        if (direction == 0 && row <= 7 && !this.cells[row][col].occupied && !this.cells[row + 1][col].occupied && !this.cells[row + 2][col].occupied) {
            for (i = row; i < row + 3; i++) {
                cell = this.cells[i][col];
                cell.occupied = true;
                cell.DrawShip(i, col);
            }
        }
        else if (direction == 1 && col >= 2 && !this.cells[row][col].occupied && !this.cells[row][col - 1].occupied && !this.cells[row][col - 2].occupied) {
            for (i = col; i > col - 3; i--) {
                cell = this.cells[row][i];
                cell.occupied = true;
                cell.DrawShip(i, col);
            }
        }
        else if (direction == 2 && row >= 2 && !this.cells[row][col].occupied && !this.cells[row - 1][col].occupied && !this.cells[row - 2][col].occupied) {
            for (i = row; i > row - 3; i--) {
                cell = this.cells[i][col];
                cell.occupied = true;
                cell.DrawShip(i, col);
            }
        }
        else if (direction == 3 && col <= 7 && !this.cells[row][col].occupied && !this.cells[row][col + 1].occupied && !this.cells[row][col + 2].occupied) {
            for (i = col; i < col + 3; i++) {
                cell = this.cells[row][i];
                cell.occupied = true;
                cell.DrawShip(i, col);
            }
        }
        else
            this.GenerateSubmarine();
    };
    Board.prototype.GenerateCruiser = function () {
        var row = Math.floor(Math.random() * 10);
        var col = Math.floor(Math.random() * 10);
        var cell;
        var i;
        var direction = Math.floor(Math.random() * 4);
        if (direction == 0 && row <= 7 && !this.cells[row][col].occupied && !this.cells[row + 1][col].occupied && !this.cells[row + 2][col].occupied) {
            for (i = row; i < row + 3; i++) {
                cell = this.cells[i][col];
                cell.occupied = true;
                cell.DrawShip(i, col);
            }
        }
        else if (direction == 1 && col >= 2 && !this.cells[row][col].occupied && !this.cells[row][col - 1].occupied && !this.cells[row][col - 2].occupied) {
            for (i = col; i > col - 3; i--) {
                cell = this.cells[row][i];
                cell.occupied = true;
                cell.DrawShip(i, col);
            }
        }
        else if (direction == 2 && row >= 2 && !this.cells[row][col].occupied && !this.cells[row - 1][col].occupied && !this.cells[row - 2][col].occupied) {
            for (i = row; i > row - 3; i--) {
                cell = this.cells[i][col];
                cell.occupied = true;
                cell.DrawShip(i, col);
            }
        }
        else if (direction == 3 && col <= 7 && !this.cells[row][col].occupied && !this.cells[row][col + 1].occupied && !this.cells[row][col + 2].occupied) {
            for (i = col; i < col + 3; i++) {
                cell = this.cells[row][i];
                cell.occupied = true;
                cell.DrawShip(i, col);
            }
        }
        else
            this.GenerateCruiser();
    };
    Board.prototype.GenereteDestroyer = function () {
        var row = Math.floor(Math.random() * 10);
        var col = Math.floor(Math.random() * 10);
        var cell;
        var i;
        var direction = Math.floor(Math.random() * 4);
        if (direction == 0 && row <= 8 && !this.cells[row][col].occupied && !this.cells[row + 1][col].occupied) {
            for (i = row; i < row + 2; i++) {
                cell = this.cells[i][col];
                cell.occupied = true;
                cell.DrawShip(i, col);
            }
        }
        else if (direction == 1 && col >= 1 && !this.cells[row][col].occupied && !this.cells[row][col - 1].occupied) {
            for (i = col; i > col - 2; i--) {
                cell = this.cells[row][i];
                cell.occupied = true;
                cell.DrawShip(i, col);
            }
        }
        else if (direction == 2 && row >= 1 && !this.cells[row][col].occupied && !this.cells[row - 1][col].occupied) {
            for (i = row; i > row - 2; i--) {
                cell = this.cells[i][col];
                cell.occupied = true;
                cell.DrawShip(i, col);
            }
        }
        else if (direction == 3 && col <= 8 && !this.cells[row][col].occupied && !this.cells[row][col + 1].occupied) {
            for (i = col; i < col + 2; i++) {
                cell = this.cells[row][i];
                cell.occupied = true;
                cell.DrawShip(i, col);
            }
        }
        else
            this.GenereteDestroyer();
    };
    return Board;
}());
var Cell = /** @class */ (function () {
    function Cell(row, col) {
        this.lock = false;
        this.occupied = false;
        this.cellV = document.getElementById(row + "|" + col);
    }
    Cell.prototype.DrawShip = function (row, col) {
        this.cellV.innerHTML = "X";
        this.cellV.style.backgroundColor = "black";
    };
    return Cell;
}());
var board;
function StartGame() {
    var table = document.getElementById("Board");
    while (table.hasChildNodes())
        table.removeChild(table.firstChild);
    board = new Board();
}
