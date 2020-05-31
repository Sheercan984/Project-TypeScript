import {Board} from './game';
import {Cell} from './cell';
import {Checks} from './checks';


export class AI{
    static x:number;
    static y:number;
    static hitx:number;
    static hity:number;
    static hit:boolean;
    static d:number = 1;

    static Random(): void{
        let cell:Cell;
        
        this.x = Math.floor(Math.random()*10);
        this.y = Math.floor(Math.random()*10);
        cell = Board.pcells[this.x][this.y];
        let i:number = 0;
        if (this.hit)
        {
            if (this.d == 1)
            {
                if (this.hitx == 9)
                {
                    cell = Board.pcells[this.hitx][this.hity];
                    this.x = this.hitx;
                    this.y = this.hity;
                }
                else
                {
                    cell = Board.pcells[this.hitx+1][this.hity];
                    this.x = this.hitx + 1;
                    this.y = this.hity;
                }
                this.d++
            }
            else if (this.d == 2)
            {
                if (this.hitx == 0)
                {
                    cell = Board.pcells[this.hitx][this.hity];
                    this.x = this.hitx;
                    this.y = this.hity;
                }
                else
                {
                    cell = Board.pcells[this.hitx-1][this.hity];
                    this.x = this.hitx - 1;
                    this.y = this.hity;
                }
                this.d++
            }
            else if (this.d == 3)
            {
                if (this.hity == 9)
                {
                    cell = Board.pcells[this.hitx][this.hity];
                    this.x = this.hitx;
                    this.y = this.hity;
                }
                else
                {
                    cell = Board.pcells[this.hitx][this.hity+1];
                    this.x = this.hitx;
                    this.y = this.hity + 1;
                }
                this.d++
            }
            else if (this.d == 4)
            {
                if (this.hity == 9)
                {
                    cell = Board.pcells[this.hitx][this.hity];
                    this.x = this.hitx;
                    this.y = this.hity;
                }
                else
                {
                    cell = Board.pcells[this.hitx][this.hity-1];
                    this.x = this.hitx;
                    this.y = this.hity - 1;
                }
                this.d++
            }
            else if (this.d == 5)
            {
                this.d = 0;
                this.hit = false;
            }
        }
        if (cell.occupied && !cell.lock)
        {
            cell.aHit()
            cell.lock = true;
            this.hitx = this.x;
            this.hity = this.y;
            this.hit = true;
            this.d = 1;
            for(i = 0; i<5; i++)
            {
                if(cell == Board.pcarrier[i])
                Checks.AICarrierCheck();
            }
            for(i = 0; i<4; i++)
            {
                if(cell == Board.pbattleship[i])
                Checks.AIBattleshipCheck();
            }
            for(i = 0; i<3; i++)
            {
                if(cell == Board.psubmarine[i])
                Checks.AISubmarineCheck();
            }
            for(i = 0; i<3; i++)
            {
                if(cell == Board.pcruiser[i])
                Checks.AICruiserCheck();
            }
            for(i = 0; i<2; i++)
            {
                if(cell == Board.pdestroyer[i])
                Checks.AIDestroyerCheck();
            }
            Checks.AWinCheck();
        }
        else if (!cell.occupied && !cell.lock)
        {
            cell.aMiss();
            cell.lock = true;
        }
        else
        {
            this.Random();
        }

    }
}