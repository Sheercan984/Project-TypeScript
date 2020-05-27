import {Cell} from './cell'

export class Board 
{
    table: HTMLTableElement;
    public cells:Cell[][];
    size:number = 10;

    constructor()
    {
        this.GenerateVisualBoard();   	
        this.GenerateCellTabel()
        this.GenerateCarrier()
        this.GenerateBattleship()
        this.GenerateSubmarine()
        this.GenerateCruiser()
        this.GenereteDestroyer()
    }

    GenerateCellTabel()  : void
    {
        this.cells = [];
        for(var i: number = 0; i < this.size; i++) 
        {
            this.cells[i] = [];
            for(var j: number = 0; j< this.size; j++) 
            {
                this.cells[i][j] = new Cell(i, j);
            }
        }
    }

    GenerateVisualBoard() : void
    {
    	this.table = <HTMLTableElement> document.getElementById("Board");
		for(var i: number = 0; i < this.size; i++) 
        {
            let row = this.table.insertRow(0);
            for(var j: number = 0; j< this.size; j++) 
            {
                let cell = row.insertCell(0);
        		cell.setAttribute('onclick', 'board.Click('+i+','+j+');');
        		cell.id=i+"|"+j;
            }         
        }
    }

    GenerateCarrier() : void
    {
        let row:number =Math.floor(Math.random() * 10)
        let col:number =Math.floor(Math.random() * 10)
        let cell: Cell
        let i:number
        if (row < 5 && col < 5)
        {
            let direction:number =Math.floor(Math.random() *2)
            if (direction == 0)
            {
                for (i = col; i < col+5; i++)
                {
                    cell = this.cells[row][i]
                    cell.occupied = true
                    cell.DrawShip(row,i)
                }
            }
            else if (direction == 1)
            {
                for (i = row; i < row+5; i++)
                {
                    cell = this.cells[i][col]
                    cell.occupied = true
                    cell.DrawShip(i,col)

                }
            }
            
        }
        if (row < 5 && col >= 5)
        {
            let direction:number =Math.floor(Math.random() *1)
            if (direction == 0)
            {
                for (i = col; i > col-5; i--)
                {
                    cell = this.cells[row][i]
                    cell.occupied = true
                    cell.DrawShip(row,i)
                }
            }
            else if (direction == 1)
            {
                for (i = row; i < row+5; i++)
                {
                    cell = this.cells[i][col]
                    cell.occupied = true
                    cell.DrawShip(i,col)
                }
            }
            
        }
        if (row >= 5 && col < 5)
        {
            let direction:number =Math.floor(Math.random() *1)
            if (direction == 0)
            {
                for (i = col; i < col+5; i++)
                {
                    cell = this.cells[row][i]
                    cell.occupied = true
                    cell.DrawShip(row,i)
                }
            }
            else if (direction == 1)
            {
                for (i = row; i > row-5; i--)
                {
                    cell = this.cells[i][col]
                    cell.occupied = true
                    cell.DrawShip(i,col)
                }
            }
            
        }
        if (row >= 5 && col >= 5)
        {
            let direction:number =Math.floor(Math.random() *1)
            if (direction == 0)
            {
                for (i = col; i > col-5; i--)
                {
                    cell = this.cells[row][i]
                    cell.occupied = true
                    cell.DrawShip(row,i)
                }
            }
            else if (direction == 1)
            {
                for (i = row; i > row-5; i--)
                {
                    cell = this.cells[i][col]
                    cell.occupied = true
                    cell.DrawShip(i,col)
                }
            }
            
        }
    }

    GenerateBattleship() : void
    {
        let row:number =Math.floor(Math.random() * 10)
        let col:number =Math.floor(Math.random() * 10)
        let cell: Cell
        let i:number
        if (row < 5 && col < 5)
        {
            let direction:number = Math.floor(Math.random() *2)
            if (direction == 0)
            {
                if (!this.cells[row][col].occupied && !this.cells[row][col+1].occupied && !this.cells[row][col+2].occupied && !this.cells[row][col+3].occupied)
                {
                    for (i = col; i < col+4; i++)
                    {
                        cell = this.cells[row][i]
                        cell.occupied = true
                        cell.DrawShip(row,i)
                    }
                } 
                else
                {
                    this.GenerateBattleship()
                }
                
            }
            else if (direction == 1)
            {
                if (!this.cells[row][col].occupied && !this.cells[row+1][col].occupied && !this.cells[row+2][col].occupied && !this.cells[row+3][col].occupied)
                {
                    for (i = row; i < row+4; i++)
                    {
                        cell = this.cells[i][col]
                        cell.occupied = true
                        cell.DrawShip(i,col)
                    }
                }
                else
                {
                    this.GenerateBattleship()
                }
            }
            
        }
        if (row < 5 && col >= 5)
        {
            let direction:number =Math.floor(Math.random() *1)
            if (direction == 0)
            {
                if (!this.cells[row][col].occupied && !this.cells[row][col-1].occupied && !this.cells[row][col-2].occupied && !this.cells[row][col-3].occupied)
                {
                    for (i = col; i > col-4; i--)
                    {
                        cell = this.cells[row][i]
                        cell.occupied = true
                        cell.DrawShip(row,i)
                    }
                } 
                else
                {
                    this.GenerateBattleship()
                }
            }
            else if (direction == 1)
            {
                if (!this.cells[row][col].occupied && !this.cells[row+1][col].occupied && !this.cells[row+2][col].occupied && !this.cells[row+3][col].occupied)
                {
                    for (i = row; i < row+4; i++)
                    {
                        cell = this.cells[i][col]
                        cell.occupied = true
                        cell.DrawShip(i,col)
                    }
                }
                else
                {
                    this.GenerateBattleship()
                }
            }
            
        }
        if (row >= 5 && col < 5)
        {
            let direction:number =Math.floor(Math.random() *1)
            if (direction == 0)
            {
                if (!this.cells[row][col].occupied && !this.cells[row][col+1].occupied && !this.cells[row][col+2].occupied && !this.cells[row][col+3].occupied)
                {
                    for (i = col; i < col+4; i++)
                    {
                        cell = this.cells[row][i]
                        cell.occupied = true
                        cell.DrawShip(row,i)
                    }
                } 
                else
                {
                    this.GenerateBattleship()
                }
            }
            else if (direction == 1)
            {
                if (!this.cells[row][col].occupied && !this.cells[row-1][col].occupied && !this.cells[row-2][col].occupied && !this.cells[row-3][col].occupied)
                {
                    for (i = row; i > row-4; i--)
                    {
                        cell = this.cells[i][col]
                        cell.occupied = true
                        cell.DrawShip(i,col)
                    }
                }
                else
                {
                    this.GenerateBattleship()
                }
            }
            
        }
        if (row >= 5 && col >= 5)
        {
            let direction:number =Math.floor(Math.random() *1)
            if (direction == 0)
            {
                if (!this.cells[row][col].occupied && !this.cells[row][col-1].occupied && !this.cells[row][col-2].occupied && !this.cells[row][col-3].occupied)
                {
                    for (i = col; i > col-4; i--)
                    {
                        cell = this.cells[row][i]
                        cell.occupied = true
                        cell.DrawShip(row,i)
                    }
                } 
                else
                {
                    this.GenerateBattleship()
                }
            }
            if (direction == 1)
            {
                if (!this.cells[row][col].occupied && !this.cells[row-1][col].occupied && !this.cells[row-2][col].occupied && !this.cells[row-3][col].occupied)
                {
                    for (i = row; i > row-4; i--)
                    {
                        cell = this.cells[i][col]
                        cell.occupied = true
                        cell.DrawShip(i,col)
                    }
                }
                else
                {
                    this.GenerateBattleship()
                }
            }
        }
    }

    GenerateSubmarine() :void
    {
        let row:number =Math.floor(Math.random() * 10)
        let col:number =Math.floor(Math.random() * 10)
        let cell: Cell
        let i:number
        let direction:number = Math.floor(Math.random() * 4)
        if (direction == 0 && row <= 7 && !this.cells[row][col].occupied && !this.cells[row+1][col].occupied && !this.cells[row+2][col].occupied)
        {
            for (i = row; i < row+3; i++)
            {
                cell = this.cells[i][col]
                cell.occupied = true
                cell.DrawShip(i,col)
            }
        }
        else if (direction == 1 && col >= 2 && !this.cells[row][col].occupied && !this.cells[row][col-1].occupied && !this.cells[row][col-2].occupied)
        {
            for (i = col; i > col-3; i--)
            {
                cell = this.cells[row][i]
                cell.occupied = true
                cell.DrawShip(i,col)
            }
        }
        else if (direction == 2 && row >= 2 && !this.cells[row][col].occupied && !this.cells[row-1][col].occupied && !this.cells[row-2][col].occupied)
        {
            for (i = row; i > row-3; i--)
            {
                cell = this.cells[i][col]
                cell.occupied = true
                cell.DrawShip(i,col)
            }
        }
        else if (direction == 3 && col <= 7 && !this.cells[row][col].occupied && !this.cells[row][col+1].occupied && !this.cells[row][col+2].occupied)
        {
            for (i = col; i < col+3; i++)            {
                cell = this.cells[row][i]
                cell.occupied = true
                cell.DrawShip(i,col)
            }
        }
        else
        this.GenerateSubmarine()
    }

    GenerateCruiser() :void
    {
        let row:number =Math.floor(Math.random() * 10)
        let col:number =Math.floor(Math.random() * 10)
        let cell: Cell
        let i:number
        let direction:number = Math.floor(Math.random() * 4)
        if (direction == 0 && row <= 7 && !this.cells[row][col].occupied && !this.cells[row+1][col].occupied && !this.cells[row+2][col].occupied)
        {
            for (i = row; i < row+3; i++)
            {
                cell = this.cells[i][col]
                cell.occupied = true
                cell.DrawShip(i,col)
            }
        }
        else if (direction == 1 && col >= 2 && !this.cells[row][col].occupied && !this.cells[row][col-1].occupied && !this.cells[row][col-2].occupied)
        {
            for (i = col; i > col-3; i--)
            {
                cell = this.cells[row][i]
                cell.occupied = true
                cell.DrawShip(i,col)
            }
        }
        else if (direction == 2 && row >= 2 && !this.cells[row][col].occupied && !this.cells[row-1][col].occupied && !this.cells[row-2][col].occupied)
        {
            for (i = row; i > row-3; i--)
            {
                cell = this.cells[i][col]
                cell.occupied = true
                cell.DrawShip(i,col)
            }
        }
        else if (direction == 3 && col <= 7 && !this.cells[row][col].occupied && !this.cells[row][col+1].occupied && !this.cells[row][col+2].occupied)
        {
            for (i = col; i < col+3; i++)            {
                cell = this.cells[row][i]
                cell.occupied = true
                cell.DrawShip(i,col)
            }
        }
        else
        this.GenerateCruiser()
    }

    GenereteDestroyer(): void
    {
        let row:number =Math.floor(Math.random() * 10)
        let col:number =Math.floor(Math.random() * 10)
        let cell: Cell
        let i:number
        let direction:number = Math.floor(Math.random() * 4)
        if (direction == 0 && row <= 8 && !this.cells[row][col].occupied && !this.cells[row+1][col].occupied)
        {
            for (i = row; i < row+2; i++)
            {
                cell = this.cells[i][col]
                cell.occupied = true
                cell.DrawShip(i,col)
            }
        }
        else if (direction == 1 && col >= 1 && !this.cells[row][col].occupied && !this.cells[row][col-1].occupied)
        {
            for (i = col; i > col-2; i--)
            {
                cell = this.cells[row][i]
                cell.occupied = true
                cell.DrawShip(i,col)
            }
        }
        else if (direction == 2 && row >= 1 && !this.cells[row][col].occupied && !this.cells[row-1][col].occupied)
        {
            for (i = row; i > row-2; i--)
            {
                cell = this.cells[i][col]
                cell.occupied = true
                cell.DrawShip(i,col)
            }
        }
        else if (direction == 3 && col <= 8 && !this.cells[row][col].occupied && !this.cells[row][col+1].occupied)
        {
            for (i = col; i < col+2; i++)            {
                cell = this.cells[row][i]
                cell.occupied = true
                cell.DrawShip(i,col)
            }
        }
        else
        this.GenereteDestroyer()
    }
}
