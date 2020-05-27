import { Board } from "./generator";
import { Cell } from "./cell";


export class Checks{

    static PShoot:number = 0;
    static CaShot:number = 0;
    static BShot:number = 0;
    static SShot:number = 0;
    static CrShot:number = 0;
    static DShot:number = 0;

    static PWinCheck(): void
    {
        this.PShoot++
        if (this.PShoot == 17)
        {
            alert("Player Wins")
        }
    }

    AWinCheck(): void
    {

    }

    static CarrierCheck() :void
    {
        let cell: Cell;
        let i:number
        for(i = 0; i < 5; i++)
        {
            cell = Board.acarrier[i]
            if(cell.lock)
            {
                this.CaShot++
            }
        }
        if (this.CaShot == 15)
        {
            for(i = 0; i < 5; i++)
            {
                cell = Board.acarrier[i]
                cell.ShipShot();
            }
        }
    }

    static BattleshipCheck() :void
    {
        let cell: Cell;
        let i:number
        for(i = 0; i < 4; i++)
        {
            cell = Board.abattleship[i]
            if(cell.lock)
            {
                this.BShot++
            }
        }
        if (this.BShot == 10)
        {
            for(i = 0; i < 4; i++)
            {
                cell = Board.abattleship[i]
                cell.ShipShot();
            }
        }
    }

    static SubmarineCheck() :void
    {
        let cell: Cell;
        let i:number
        for(i = 0; i < 3; i++)
        {
            cell = Board.asubmarine[i]
            if(cell.lock)
            {
                this.SShot++
            }
        }
        if (this.SShot == 6)
        {
            for(i = 0; i < 3; i++)
            {
                cell = Board.asubmarine[i]
                cell.ShipShot();
            }
        }
    }

    static CruiserCheck() :void
    {
        let cell: Cell;
        let i:number
        for(i = 0; i < 3; i++)
        {
            cell = Board.acruiser[i]
            if(cell.lock)
            {
                this.CrShot++
            }
        }
        if (this.CrShot == 6)
        {
            for(i = 0; i < 3; i++)
            {
                cell = Board.acruiser[i]
                cell.ShipShot();
            }
        }
    }

    static DestroyerCheck() :void
    {
        let cell: Cell;
        let i:number
        for(i = 0; i < 2; i++)
        {
            cell = Board.adestroyer[i]
            if(cell.lock)
            {
                this.DShot++
            }
        }
        if (this.DShot == 3)
        {
            for(i = 0; i < 2; i++)
            {
                cell = Board.adestroyer[i]
                cell.ShipShot();
            }
        }
    }
}