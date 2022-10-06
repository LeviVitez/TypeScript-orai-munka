export class Book {
    #nev:string;
    #ertekeles:number;
    constructor(nev:string, ertekeles:number) {
        this.#nev=nev;
        if (ertekeles>10) {
            this.#ertekeles = 10;
        }else if(ertekeles<1){
            this.#ertekeles=1;
        }else{
            this.#ertekeles=ertekeles;
        }
    }
    public getnev() : string {
        return this.#nev;
    }
    public getertekeles() : number {
        return this.#ertekeles;
    }    
    public setnev(v : string) {
        this.#nev = v;
    }
    public setertekeles(v : number) {
        if (v>10) {
            this.#ertekeles = 10;
        }else if(v<1){
            this.#ertekeles=1;
        }else{
            this.#ertekeles=v;
        }
    }
    public toString():string {
        return this.#nev+" - "+this.#ertekeles+"/10";   
    }
}