export class Cell {
    cellV: HTMLInputElement; 
    pcellV: HTMLInputElement; 
    lock: boolean;
    occupied: boolean;

    constructor(row:number, col:number) 
    {
        let prow: number = row+10;
        let pcol: number = col+10;
        this.lock=false;
        this.occupied=false;
        this.cellV=<HTMLInputElement> document.getElementById(row+"|"+col);
        this.pcellV=<HTMLInputElement> document.getElementById(prow+"|"+pcol);
    }

    DrawShip() :void{
        this.cellV.style.backgroundColor = "black"
    }

    aHit(): void{
        this.cellV.style.backgroundColor = "pink"
    }
    
    pHit(): void{
        this.pcellV.style.backgroundColor = "pink"
    }

    pMiss(): void{
        this.pcellV.style.backgroundColor = "grey"
    }

    ShipShot(): void{
        this.pcellV.style.backgroundColor = "red"
    }
}