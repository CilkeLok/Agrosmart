import { Njiva } from './../njiva';
import { FormdataService } from './../../services/formdata.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-zarada',
  templateUrl: './zarada.component.html',
  styleUrls: ['./zarada.component.css']
})
export class ZaradaComponent implements OnInit {

  nazivNjive:string;
  nazivKulture:any;
  povrsinaNjive:number;
  kolicinaSemena:number;
  cenaSemena:number;
  kolicinaGoriva:number;
  cenaGoriva:number;
  kolicinaDjubriva:number;
  cenaDjubriva:number;
  kolicinaHerbicida:number;
  cenaHerbicida:number;
  sumaSemena:number;
  sumaGoriva:number;
  sumaDjubriva:number;
  sumaHerbicida:number;
  ukupno:number;
  data:Njiva;
  zetvaKolicinaGoriva:number=0;
  zetvaCenaGoriva:number=0;
  zetvaKombajniranje:number=0;
  zetvaOstaliTroskovi:number=0;
  zetvaTransport:number=0;
  zetvaKolicinaProizvoda:number;
  zetvaCenaProizvoda:number;
  zetvaZarada:number;
  zetvaTrosak:number;
  trosak:number;
  zarada:number;
  bilans:number;
  zetva:any;
  

  constructor(private formDataService:FormdataService) { }

  ngOnInit() {

    this.data=this.formDataService.njiva;
    this.nazivNjive=this.data.nazivNjive;
    this.nazivKulture=this.data.nazivKulture;
    this.povrsinaNjive=this.data.povrsinaNjive;
    this.kolicinaSemena=this.data.kolicinaSemena;
    this.cenaSemena=this.data.cenaSemena;
    this.kolicinaGoriva=this.data.kolicinaGoriva;
    this.cenaGoriva=this.data.cenaGoriva;
    this.kolicinaDjubriva=this.data.kolicinaDjubriva;
    this.cenaDjubriva=this.data.cenaDjubriva;
    this.kolicinaHerbicida=this.data.kolicinaHerbicida;
    this.cenaHerbicida=this.data.cenaHerbicida;
    this.sumaSemena=this.kolicinaSemena*this.cenaSemena;
    this.sumaGoriva=this.kolicinaGoriva*this.cenaGoriva;
    this.sumaDjubriva=this.kolicinaDjubriva*this.cenaDjubriva;
    this.sumaHerbicida=this.kolicinaHerbicida*this.cenaHerbicida;
    this.ukupno = (this.sumaSemena + this.sumaGoriva + this.sumaDjubriva + this.sumaHerbicida);
    
    
    this.zetva=this.formDataService.zetva;
    this.zetvaCenaGoriva=this.zetva.zetvaCenaGoriva;
    this.zetvaKolicinaGoriva=this.zetva.zetvaKolicinaGoriva;
    this.zetvaKombajniranje=this.zetva.zetvaKombajniranje;
    this.zetvaTransport=this.zetva.zetvaTransport;
    this.zetvaOstaliTroskovi=this.zetva.zetvaOstaliTroskovi;
    this.zetvaKolicinaProizvoda=this.zetva.zetvaKolicinaProizvoda;
    this.zetvaCenaProizvoda=this.zetva.zetvaCenaProizvoda;
    this.zetvaZarada=this.zetva.zetvaCenaProizvoda*this.zetva.zetvaKolicinaProizvoda;
    this.zetvaTrosak=(this.zetva.zetvaCenaGoriva*this.zetva.zetvaKolicinaGoriva)+this.zetva.zetvaKombajniranje+this.zetva.zetvaTransport+this.zetva.zetvaOstaliTroskovi;


    this.trosak=this.ukupno+this.zetvaTrosak;
    this.bilans=this.zetvaZarada-this.trosak;
    this.zarada=this.zetvaZarada;
    
  }

}
