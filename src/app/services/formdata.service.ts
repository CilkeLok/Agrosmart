import { Njiva } from './../components/njiva';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FormdataService {
  
  public njiva:Njiva;
  public zetva:{zetvaKolicinaGoriva:number;
                zetvaCenaGoriva:number;
                zetvaKombajniranje:number;
                zetvaTransport:number;
                zetvaOstaliTroskovi:number;
                zetvaKolicinaProizvoda:number;
                zetvaCenaProizvoda:number;
                }

  getNjiva(value) {
    this.njiva=value;
  }
  getZetva(value) {
    this.zetva=value;
  }

  constructor() { }

}
