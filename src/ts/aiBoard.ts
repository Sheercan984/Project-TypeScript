import {Board} from './game';
import {Cell} from './cell';

export class AiBoard
{

    atable: HTMLTableElement;

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
        Board.acells = new Array(Board.size);
        for(var i: number = 0; i < Board.size; i++) 
        {
            Board.acells[i] = new Array(Board.size);
            for(var j: number = 0; j< Board.size; j++) 
            {
                Board.acells[i][j] = new Cell(i, j);
            }
        }
    }

    GenerateVisualBoard() : void
    {
        this.atable = <HTMLTableElement> document.getElementById("AIBoard");
		for(var i: number = 10; i < Board.size+10; i++) 
        {
            let arow = this.atable.insertRow(0);
            for(var j: number = 10; j< Board.size+10; j++) 
            {
                let cell = arow.insertCell(0);
                cell.id=i+"|"+j;
                let ii = i-10;
                let jj = j-10;
                document.getElementById(i+"|"+j).addEventListener("click", function(){Board.Clack(ii,jj);});
                
            }         
        }
    }

    GenerateCarrier() : void
    {
        let row:number =Math.floor(Math.random() * 10);
        let col:number =Math.floor(Math.random() * 10);
        let cell: Cell;
        let i:number;
        let j:number = 0;
        if (row < 5 && col < 5)
        {
            let direction:number =Math.floor(Math.random() *2)
            if (direction == 0)
            {
                for (i = col; i < col+5; i++)
                {
                    cell = Board.acells[row][i]
                    cell.occupied = true
                    //cell.DrawShip(row,i)
                    Board.acarrier[j++] = Board.acells[row][i];
                }
            }
            else if (direction == 1)
            {
                for (i = row; i < row+5; i++)
                {
                    cell = Board.acells[i][col]
                    cell.occupied = true
                    //cell.DrawShip(i,col)
                    Board.acarrier[j++] = Board.acells[row][i];
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
                    cell = Board.acells[row][i]
                    cell.occupied = true
                    //cell.DrawShip(row,i)
                    Board.acarrier[j++] = Board.acells[row][i];
                }
            }
            else if (direction == 1)
            {
                for (i = row; i < row+5; i++)
                {
                    cell = Board.acells[i][col]
                    cell.occupied = true
                    //cell.DrawShip(i,col)
                    Board.acarrier[j++] = Board.acells[row][i];
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
                    cell = Board.acells[row][i]
                    cell.occupied = true
                    //cell.DrawShip(row,i)
                    Board.acarrier[j++] = Board.acells[row][i];
                }
            }
            else if (direction == 1)
            {
                for (i = row; i > row-5; i--)
                {
                    cell = Board.acells[i][col]
                    cell.occupied = true
                    //cell.DrawShip(i,col)
                    Board.acarrier[j++] = Board.acells[row][i];
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
                    cell = Board.acells[row][i]
                    cell.occupied = true
                    //cell.DrawShip(row,i)
                    Board.acarrier[j++] = Board.acells[row][i];
                }
            }
            else if (direction == 1)
            {
                for (i = row; i > row-5; i--)
                {
                    cell = Board.acells[i][col]
                    cell.occupied = true
                    //cell.DrawShip(i,col)
                    Board.acarrier[j++] = Board.acells[row][i];
                }
            }
            
        }
    }

    GenerateBattleship() : void
    {
        let row:number =Math.floor(Math.random() * 10);
        let col:number =Math.floor(Math.random() * 10);
        let cell: Cell;
        let i:number;
        let j:number = 0;
        if (row < 5 && col < 5)
        {
            let direction:number = Math.floor(Math.random() *2)
            if (direction == 0)
            {
                if (!Board.acells[row][col].occupied && !Board.acells[row][col+1].occupied && !Board.acells[row][col+2].occupied && !Board.acells[row][col+3].occupied)
                {
                    for (i = col; i < col+4; i++)
                    {
                        cell = Board.acells[row][i]
                        cell.occupied = true
                        //cell.DrawShip(row,i)
                        Board.abattleship[j++] = Board.acells[row][i];
                    }
                } 
                else
                {
                    this.GenerateBattleship()
                }
                
            }
            else if (direction == 1)
            {
                if (!Board.acells[row][col].occupied && !Board.acells[row+1][col].occupied && !Board.acells[row+2][col].occupied && !Board.acells[row+3][col].occupied)
                {
                    for (i = row; i < row+4; i++)
                    {
                        cell = Board.acells[i][col]
                        cell.occupied = true
                        //cell.DrawShip(i,col)
                        Board.abattleship[j++] = Board.acells[i][col];
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
                if (!Board.acells[row][col].occupied && !Board.acells[row][col-1].occupied && !Board.acells[row][col-2].occupied && !Board.acells[row][col-3].occupied)
                {
                    for (i = col; i > col-4; i--)
                    {
                        cell = Board.acells[row][i]
                        cell.occupied = true
                        //cell.DrawShip(row,i)
                        Board.abattleship[j++] = Board.acells[row][i];
                    }
                } 
                else
                {
                    this.GenerateBattleship()
                }
            }
            else if (direction == 1)
            {
                if (!Board.acells[row][col].occupied && !Board.acells[row+1][col].occupied && !Board.acells[row+2][col].occupied && !Board.acells[row+3][col].occupied)
                {
                    for (i = row; i < row+4; i++)
                    {
                        cell = Board.acells[i][col]
                        cell.occupied = true
                        //cell.DrawShip(i,col)
                        Board.abattleship[j++] = Board.acells[i][col];
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
                if (!Board.acells[row][col].occupied && !Board.acells[row][col+1].occupied && !Board.acells[row][col+2].occupied && !Board.acells[row][col+3].occupied)
                {
                    for (i = col; i < col+4; i++)
                    {
                        cell = Board.acells[row][i]
                        cell.occupied = true
                        //cell.DrawShip(row,i)
                        Board.abattleship[j++] = Board.acells[row][i];
                    }
                } 
                else
                {
                    this.GenerateBattleship()
                }
            }
            else if (direction == 1)
            {
                if (!Board.acells[row][col].occupied && !Board.acells[row-1][col].occupied && !Board.acells[row-2][col].occupied && !Board.acells[row-3][col].occupied)
                {
                    for (i = row; i > row-4; i--)
                    {
                        cell = Board.acells[i][col]
                        cell.occupied = true
                        //cell.DrawShip(i,col)
                        Board.abattleship[j++] = Board.acells[i][col];
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
                if (!Board.acells[row][col].occupied && !Board.acells[row][col-1].occupied && !Board.acells[row][col-2].occupied && !Board.acells[row][col-3].occupied)
                {
                    for (i = col; i > col-4; i--)
                    {
                        cell = Board.acells[row][i]
                        cell.occupied = true
                        //cell.DrawShip(row,i)
                        Board.abattleship[j++] = Board.acells[row][i];
                    }
                } 
                else
                {
                    this.GenerateBattleship()
                }
            }
            if (direction == 1)
            {
                if (!Board.acells[row][col].occupied && !Board.acells[row-1][col].occupied && !Board.acells[row-2][col].occupied && !Board.acells[row-3][col].occupied)
                {
                    for (i = row; i > row-4; i--)
                    {
                        cell = Board.acells[i][col]
                        cell.occupied = true
                        //cell.DrawShip(i,col)
                        Board.abattleship[j++] = Board.acells[i][col];
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
        let row:number =Math.floor(Math.random() * 10);
        let col:number =Math.floor(Math.random() * 10);
        let cell: Cell;
        let i:number;
        let j:number = 0;
        let direction:number = Math.floor(Math.random() * 4)
        if (direction == 0 && row <= 7 && !Board.acells[row][col].occupied && !Board.acells[row+1][col].occupied && !Board.acells[row+2][col].occupied)
        {
            for (i = row; i < row+3; i++)
            {
                cell = Board.acells[i][col]
                cell.occupied = true
                //cell.DrawShip(i,col)
                Board.asubmarine[j++] = Board.acells[i][col];
            }
        }
        else if (direction == 1 && col >= 2 && !Board.acells[row][col].occupied && !Board.acells[row][col-1].occupied && !Board.acells[row][col-2].occupied)
        {
            for (i = col; i > col-3; i--)
            {
                cell = Board.acells[row][i]
                cell.occupied = true
                //cell.DrawShip(i,col)
                Board.asubmarine[j++] = Board.acells[row][i];
            }
        }
        else if (direction == 2 && row >= 2 && !Board.acells[row][col].occupied && !Board.acells[row-1][col].occupied && !Board.acells[row-2][col].occupied)
        {
            for (i = row; i > row-3; i--)
            {
                cell = Board.acells[i][col]
                cell.occupied = true
                //cell.DrawShip(i,col)
                Board.asubmarine[j++] = Board.acells[i][col];
            }
        }
        else if (direction == 3 && col <= 7 && !Board.acells[row][col].occupied && !Board.acells[row][col+1].occupied && !Board.acells[row][col+2].occupied)
        {
            for (i = col; i < col+3; i++)            
            {
                cell = Board.acells[row][i]
                cell.occupied = true
                //cell.DrawShip(i,col)
                Board.asubmarine[j++] = Board.acells[row][i];
            }
        }
        else
        this.GenerateSubmarine()
    }

    GenerateCruiser() :void
    {
        let row:number =Math.floor(Math.random() * 10);
        let col:number =Math.floor(Math.random() * 10);
        let cell: Cell;
        let i:number;
        let j:number = 0;
        let direction:number = Math.floor(Math.random() * 4)
        if (direction == 0 && row <= 7 && !Board.acells[row][col].occupied && !Board.acells[row+1][col].occupied && !Board.acells[row+2][col].occupied)
        {
            for (i = row; i < row+3; i++)
            {
                cell = Board.acells[i][col]
                cell.occupied = true
                //cell.DrawShip(i,col)
                Board.acruiser[j++] = Board.acells[i][col];
            }
        }
        else if (direction == 1 && col >= 2 && !Board.acells[row][col].occupied && !Board.acells[row][col-1].occupied && !Board.acells[row][col-2].occupied)
        {
            for (i = col; i > col-3; i--)
            {
                cell = Board.acells[row][i]
                cell.occupied = true
                //cell.DrawShip(i,col)
                Board.acruiser[j++] = Board.acells[row][i];
            }
        }
        else if (direction == 2 && row >= 2 && !Board.acells[row][col].occupied && !Board.acells[row-1][col].occupied && !Board.acells[row-2][col].occupied)
        {
            for (i = row; i > row-3; i--)
            {
                cell = Board.acells[i][col]
                cell.occupied = true
                //cell.DrawShip(i,col)
                Board.acruiser[j++] = Board.acells[i][col];
            }
        }
        else if (direction == 3 && col <= 7 && !Board.acells[row][col].occupied && !Board.acells[row][col+1].occupied && !Board.acells[row][col+2].occupied)
        {
            for (i = col; i < col+3; i++)            
            {
                cell = Board.acells[row][i]
                cell.occupied = true
                //cell.DrawShip(i,col)
                Board.acruiser[j++] = Board.acells[row][i];
            }
        }
        else
        this.GenerateCruiser()
    }

    GenereteDestroyer(): void
    {
        let row:number =Math.floor(Math.random() * 10);
        let col:number =Math.floor(Math.random() * 10);
        let cell: Cell;
        let i:number;
        let j:number = 0;
        let direction:number = Math.floor(Math.random() * 4)
        if (direction == 0 && row <= 8 && !Board.acells[row][col].occupied && !Board.acells[row+1][col].occupied)
        {
            for (i = row; i < row+2; i++)
            {
                cell = Board.acells[i][col]
                cell.occupied = true
                //cell.DrawShip(i,col)
                Board.adestroyer[j++] = Board.acells[i][col];
            }
        }
        else if (direction == 1 && col >= 1 && !Board.acells[row][col].occupied && !Board.acells[row][col-1].occupied)
        {
            for (i = col; i > col-2; i--)
            {
                cell = Board.acells[row][i]
                cell.occupied = true
                //cell.DrawShip(i,col)
                Board.adestroyer[j++] = Board.acells[row][i];
            }
        }
        else if (direction == 2 && row >= 1 && !Board.acells[row][col].occupied && !Board.acells[row-1][col].occupied)
        {
            for (i = row; i > row-2; i--)
            {
                cell = Board.acells[i][col]
                cell.occupied = true
                //cell.DrawShip(i,col)
                Board.adestroyer[j++] = Board.acells[i][col];
            }
        }
        else if (direction == 3 && col <= 8 && !Board.acells[row][col].occupied && !Board.acells[row][col+1].occupied)
        {
            for (i = col; i < col+2; i++)            
            {
                cell = Board.acells[row][i]
                cell.occupied = true
                //cell.DrawShip(i,col)
                Board.adestroyer[j++] = Board.acells[row][i];
            }
        }
        else
        this.GenereteDestroyer()
    }
}