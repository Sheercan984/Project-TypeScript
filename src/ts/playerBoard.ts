import {Board} from './generator';
import {Cell} from './cell';


export class PlayerBoard
{

    ptable: HTMLTableElement;

    constructor()
    {
        this.GenerateVisualBoard();   	
        this.GenerateCellTabel();
        this.GenerateCarrier();
        this.GenerateBattleship();
        this.GenerateSubmarine();
        this.GenerateCruiser();
        this.GenereteDestroyer();
    }

    GenerateCellTabel()  : void
    {
        Board.pcells = new Array(Board.size);
        for(var i: number = 0; i < Board.size; i++) 
        {
            Board.pcells[i] = new Array(Board.size);
            for(var j: number = 0; j< Board.size; j++) 
            {
                Board.pcells[i][j] = new Cell(i, j);
            }
        }
    }

    GenerateVisualBoard() : void
    {
    	this.ptable = <HTMLTableElement> document.getElementById("PlayerBoard");
		for(var i: number = 0; i < Board.size; i++) 
        {
            let prow = this.ptable.insertRow(0);
            for(var j: number = 0; j< Board.size; j++) 
            {
                let cell = prow.insertCell(0);
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
                    cell = Board.pcells[row][i]
                    cell.occupied = true
                    cell.DrawShip()
                    Board.pcarrier[i] = cell;
                }
            }
            else if (direction == 1)
            {
                for (i = row; i < row+5; i++)
                {
                    cell = Board.pcells[i][col]
                    cell.occupied = true
                    cell.DrawShip()
                    Board.pcarrier[i] = cell;
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
                    cell = Board.pcells[row][i]
                    cell.occupied = true
                    cell.DrawShip()
                    Board.pcarrier[i] = cell;
                }
            }
            else if (direction == 1)
            {
                for (i = row; i < row+5; i++)
                {
                    cell = Board.pcells[i][col]
                    cell.occupied = true
                    cell.DrawShip()
                    Board.pcarrier[i] = cell;
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
                    cell = Board.pcells[row][i]
                    cell.occupied = true
                    cell.DrawShip()
                    Board.pcarrier[i] = cell;
                }
            }
            else if (direction == 1)
            {
                for (i = row; i > row-5; i--)
                {
                    cell = Board.pcells[i][col]
                    cell.occupied = true
                    cell.DrawShip()
                    Board.pcarrier[i] = cell;
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
                    cell = Board.pcells[row][i]
                    cell.occupied = true
                    cell.DrawShip()
                    Board.pcarrier[i] = cell;
                }
            }
            else if (direction == 1)
            {
                for (i = row; i > row-5; i--)
                {
                    cell = Board.pcells[i][col]
                    cell.occupied = true
                    cell.DrawShip()
                    Board.pcarrier[i] = cell;
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
                if (!Board.pcells[row][col].occupied && !Board.pcells[row][col+1].occupied && !Board.pcells[row][col+2].occupied && !Board.pcells[row][col+3].occupied)
                {
                    for (i = col; i < col+4; i++)
                    {
                        cell = Board.pcells[row][i]
                        cell.occupied = true
                        cell.DrawShip()
                    }
                } 
                else
                {
                    this.GenerateBattleship()
                }
                
            }
            else if (direction == 1)
            {
                if (!Board.pcells[row][col].occupied && !Board.pcells[row+1][col].occupied && !Board.pcells[row+2][col].occupied && !Board.pcells[row+3][col].occupied)
                {
                    for (i = row; i < row+4; i++)
                    {
                        cell = Board.pcells[i][col]
                        cell.occupied = true
                        cell.DrawShip()
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
                if (!Board.pcells[row][col].occupied && !Board.pcells[row][col-1].occupied && !Board.pcells[row][col-2].occupied && !Board.pcells[row][col-3].occupied)
                {
                    for (i = col; i > col-4; i--)
                    {
                        cell = Board.pcells[row][i]
                        cell.occupied = true
                        cell.DrawShip()
                    }
                } 
                else
                {
                    this.GenerateBattleship()
                }
            }
            else if (direction == 1)
            {
                if (!Board.pcells[row][col].occupied && !Board.pcells[row+1][col].occupied && !Board.pcells[row+2][col].occupied && !Board.pcells[row+3][col].occupied)
                {
                    for (i = row; i < row+4; i++)
                    {
                        cell = Board.pcells[i][col]
                        cell.occupied = true
                        cell.DrawShip()
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
                if (!Board.pcells[row][col].occupied && !Board.pcells[row][col+1].occupied && !Board.pcells[row][col+2].occupied && !Board.pcells[row][col+3].occupied)
                {
                    for (i = col; i < col+4; i++)
                    {
                        cell = Board.pcells[row][i]
                        cell.occupied = true
                        cell.DrawShip()
                    }
                } 
                else
                {
                    this.GenerateBattleship()
                }
            }
            else if (direction == 1)
            {
                if (!Board.pcells[row][col].occupied && !Board.pcells[row-1][col].occupied && !Board.pcells[row-2][col].occupied && !Board.pcells[row-3][col].occupied)
                {
                    for (i = row; i > row-4; i--)
                    {
                        cell = Board.pcells[i][col]
                        cell.occupied = true
                        cell.DrawShip()
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
                if (!Board.pcells[row][col].occupied && !Board.pcells[row][col-1].occupied && !Board.pcells[row][col-2].occupied && !Board.pcells[row][col-3].occupied)
                {
                    for (i = col; i > col-4; i--)
                    {
                        cell = Board.pcells[row][i]
                        cell.occupied = true
                        cell.DrawShip()
                    }
                } 
                else
                {
                    this.GenerateBattleship()
                }
            }
            if (direction == 1)
            {
                if (!Board.pcells[row][col].occupied && !Board.pcells[row-1][col].occupied && !Board.pcells[row-2][col].occupied && !Board.pcells[row-3][col].occupied)
                {
                    for (i = row; i > row-4; i--)
                    {
                        cell = Board.pcells[i][col]
                        cell.occupied = true
                        cell.DrawShip()
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
        if (direction == 0 && row <= 7 && !Board.pcells[row][col].occupied && !Board.pcells[row+1][col].occupied && !Board.pcells[row+2][col].occupied)
        {
            for (i = row; i < row+3; i++)
            {
                cell = Board.pcells[i][col]
                cell.occupied = true
                cell.DrawShip()
            }
        }
        else if (direction == 1 && col >= 2 && !Board.pcells[row][col].occupied && !Board.pcells[row][col-1].occupied && !Board.pcells[row][col-2].occupied)
        {
            for (i = col; i > col-3; i--)
            {
                cell = Board.pcells[row][i]
                cell.occupied = true
                cell.DrawShip()
            }
        }
        else if (direction == 2 && row >= 2 && !Board.pcells[row][col].occupied && !Board.pcells[row-1][col].occupied && !Board.pcells[row-2][col].occupied)
        {
            for (i = row; i > row-3; i--)
            {
                cell = Board.pcells[i][col]
                cell.occupied = true
                cell.DrawShip()
            }
        }
        else if (direction == 3 && col <= 7 && !Board.pcells[row][col].occupied && !Board.pcells[row][col+1].occupied && !Board.pcells[row][col+2].occupied)
        {
            for (i = col; i < col+3; i++)            {
                cell = Board.pcells[row][i]
                cell.occupied = true
                cell.DrawShip()
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
        if (direction == 0 && row <= 7 && !Board.pcells[row][col].occupied && !Board.pcells[row+1][col].occupied && !Board.pcells[row+2][col].occupied)
        {
            for (i = row; i < row+3; i++)
            {
                cell = Board.pcells[i][col]
                cell.occupied = true
                cell.DrawShip()
            }
        }
        else if (direction == 1 && col >= 2 && !Board.pcells[row][col].occupied && !Board.pcells[row][col-1].occupied && !Board.pcells[row][col-2].occupied)
        {
            for (i = col; i > col-3; i--)
            {
                cell = Board.pcells[row][i]
                cell.occupied = true
                cell.DrawShip()
            }
        }
        else if (direction == 2 && row >= 2 && !Board.pcells[row][col].occupied && !Board.pcells[row-1][col].occupied && !Board.pcells[row-2][col].occupied)
        {
            for (i = row; i > row-3; i--)
            {
                cell = Board.pcells[i][col]
                cell.occupied = true
                cell.DrawShip()
            }
        }
        else if (direction == 3 && col <= 7 && !Board.pcells[row][col].occupied && !Board.pcells[row][col+1].occupied && !Board.pcells[row][col+2].occupied)
        {
            for (i = col; i < col+3; i++)            {
                cell = Board.pcells[row][i]
                cell.occupied = true
                cell.DrawShip()
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
        if (direction == 0 && row <= 8 && !Board.pcells[row][col].occupied && !Board.pcells[row+1][col].occupied)
        {
            for (i = row; i < row+2; i++)
            {
                cell = Board.pcells[i][col]
                cell.occupied = true
                cell.DrawShip()
            }
        }
        else if (direction == 1 && col >= 1 && !Board.pcells[row][col].occupied && !Board.pcells[row][col-1].occupied)
        {
            for (i = col; i > col-2; i--)
            {
                cell = Board.pcells[row][i]
                cell.occupied = true
                cell.DrawShip()
            }
        }
        else if (direction == 2 && row >= 1 && !Board.pcells[row][col].occupied && !Board.pcells[row-1][col].occupied)
        {
            for (i = row; i > row-2; i--)
            {
                cell = Board.pcells[i][col]
                cell.occupied = true
                cell.DrawShip()
            }
        }
        else if (direction == 3 && col <= 8 && !Board.pcells[row][col].occupied && !Board.pcells[row][col+1].occupied)
        {
            for (i = col; i < col+2; i++)            
            {
                cell = Board.pcells[row][i]
                cell.occupied = true
                cell.DrawShip()
            }
        }
        else
        this.GenereteDestroyer()
    }
    
}