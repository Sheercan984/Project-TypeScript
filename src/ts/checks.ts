import { Board } from "./game";
import { Cell } from "./cell";


export class Checks{

    static PShoot:number = 0;
    static CaShot:number = 0;
    static BShot:number = 0;
    static SShot:number = 0;
    static CrShot:number = 0;
    static DShot:number = 0;

    static AIPShoot:number = 0;
    static AICaShot:number = 0;
    static AIBShot:number = 0;
    static AISShot:number = 0;
    static AICrShot:number = 0;
    static AIDShot:number = 0;

    static PWinCheck(): void
    {
        this.PShoot++
        if (this.PShoot == 17)
        {
            alert("Player Wins")
        }
    }

    static AWinCheck(): void
    {
        this.AIPShoot++
        if (this.AIPShoot == 17)
        {
            alert("AI Wins")
        }
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

    static AICarrierCheck() :void
    {
        let cell: Cell;
        let i:number
        for(i = 0; i < 5; i++)
        {
            cell = Board.pcarrier[i]
            if(cell.lock)
            {
                this.AICaShot++
            }
        }
        if (this.AICaShot == 15)
        {
            for(i = 0; i < 5; i++)
            {
                cell = Board.pcarrier[i]
                cell.AIShipShot();
            }
        }
    }

    static AIBattleshipCheck() :void
    {
        let cell: Cell;
        let i:number
        for(i = 0; i < 4; i++)
        {
            cell = Board.pbattleship[i]
            if(cell.lock)
            {
                this.AIBShot++
            }
        }
        if (this.AIBShot == 10)
        {
            for(i = 0; i < 4; i++)
            {
                cell = Board.pbattleship[i]
                cell.AIShipShot();
            }
        }
    }

    static AISubmarineCheck() :void
    {
        let cell: Cell;
        let i:number
        for(i = 0; i < 3; i++)
        {
            cell = Board.psubmarine[i]
            if(cell.lock)
            {
                this.AISShot++
            }
        }
        if (this.AISShot == 6)
        {
            for(i = 0; i < 3; i++)
            {
                cell = Board.psubmarine[i]
                cell.AIShipShot();
            }
        }
    }

    static AICruiserCheck() :void
    {
        let cell: Cell;
        let i:number
        for(i = 0; i < 3; i++)
        {
            cell = Board.pcruiser[i]
            if(cell.lock)
            {
                this.AICrShot++
            }
        }
        if (this.AICrShot == 6)
        {
            for(i = 0; i < 3; i++)
            {
                cell = Board.pcruiser[i]
                cell.AIShipShot();
            }
        }
    }

    static AIDestroyerCheck() :void
    {
        let cell: Cell;
        let i:number
        for(i = 0; i < 2; i++)
        {
            cell = Board.pdestroyer[i]
            if(cell.lock)
            {
                this.AIDShot++
            }
        }
        if (this.AIDShot == 3)
        {
            for(i = 0; i < 2; i++)
            {
                cell = Board.pdestroyer[i]
                cell.AIShipShot();
            }
        }
    }
}