import {Cell} from './cell';
import {Checks} from './checks';
import {PlayerBoard} from './playerBoard';
import {AiBoard } from './aiBoard';
import {AI} from './ai';

export class Board 
{
    
    
    static pcells:Cell[][] = new Array();
    static acells:Cell[][] = new Array();
    static pcarrier: Cell[] = new Array();
    static pbattleship: Cell[] = new Array();
    static psubmarine: Cell[] = new Array();
    static pcruiser: Cell[] = new Array();
    static pdestroyer: Cell[] = new Array();
    static acarrier: Cell[] = new Array();
    static abattleship: Cell[] = new Array();
    static asubmarine: Cell[] = new Array();
    static acruiser: Cell[] = new Array();
    static adestroyer: Cell[] = new Array();
    static size:number = 10;

    constructor()
    {
        let pboard:PlayerBoard = new PlayerBoard();
        let aboard:AiBoard = new AiBoard();
        
    }

    static Clack(x:number, y:number): void
    {
        let cell:Cell;
        cell = Board.acells[x][y];
        let i:number;
        if(cell.occupied && !cell.lock)
        {
            cell.lock = true;
            cell.pHit();
            for(i = 0; i<5; i++)
            {
                if(cell == this.acarrier[i])
                Checks.CarrierCheck();
            }
            for(i = 0; i<4; i++)
            {
                if(cell == this.abattleship[i])
                Checks.BattleshipCheck();
            }
            for(i = 0; i<3; i++)
            {
                if(cell == this.asubmarine[i])
                Checks.SubmarineCheck();
            }
            for(i = 0; i<3; i++)
            {
                if(cell == this.acruiser[i])
                Checks.CruiserCheck();
            }
            for(i = 0; i<2; i++)
            {
                if(cell == this.adestroyer[i])
                Checks.DestroyerCheck();
            }
            Checks.PWinCheck();
            AI.Random();
        }
        else if (!cell.occupied && !cell.lock)
        {
            cell.lock = true;
            cell.pMiss();
            AI.Random();
        }
    }
}
