export class Njiva {
    public id:number;
    public nazivNjive:string;
    public nazivKulture:string;
    public povrsinaNjive:number;
    public kolicinaSemena:number;
    public cenaSemena:number;
    public kolicinaGoriva:number;
    public cenaGoriva:number;
    public kolicinaDjubriva:number;
    public cenaDjubriva:number;
    public kolicinaHerbicida:number;
    public cenaHerbicida:number;

    constructor (id:number,nazivNjive:string,nazivKulture:string,povrsinaNjive:number, 
        kolicinaSemena:number,cenaSemena:number,kolicinaGoriva:number,
         cenaGoriva:number,kolicinaDjubriva:number,cenaDjubriva:number,kolicinaHerbicida:number,cenaHerbicida:number)
         {this.id=id;
          this.nazivNjive=nazivNjive;
          this.nazivKulture=nazivKulture;
          this.povrsinaNjive=povrsinaNjive;
          this.kolicinaSemena=kolicinaSemena;
          this.cenaSemena=cenaSemena;
          this.kolicinaGoriva=kolicinaGoriva;
          this.cenaGoriva=cenaGoriva;
          this.kolicinaDjubriva=kolicinaDjubriva;
          this.cenaDjubriva=cenaDjubriva;
          this.kolicinaHerbicida=kolicinaHerbicida;
          this.cenaHerbicida=cenaHerbicida;
        }
}
