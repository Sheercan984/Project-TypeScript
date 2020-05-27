export class Cell {
    cellV: HTMLInputElement; 
    lock: boolean;
    occupied: boolean;

    constructor(row:number, col:number) 
    {
        this.lock=false;
        this.occupied=false;
        this.cellV=<HTMLInputElement> document.getElementById(row+"|"+col);
    }

    DrawShip(row:number, col:number) :void{
        this.cellV.style.backgroundColor = "black"
    }
}