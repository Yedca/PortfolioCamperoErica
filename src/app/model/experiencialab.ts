export class Experiencialab {
    id? : number;
    nombreExpL : string;
    descripcionExpL : string;

    constructor(nombreExpL: string, descripcionExpL: string){
        this.nombreExpL= nombreExpL;
        this.descripcionExpL = descripcionExpL;
    }
}
