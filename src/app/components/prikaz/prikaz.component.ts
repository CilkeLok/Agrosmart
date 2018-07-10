import { Njiva } from './../njiva';
import { FormdataService } from './../../services/formdata.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-prikaz',
  templateUrl: './prikaz.component.html',
  styleUrls: ['./prikaz.component.css']
})
export class PrikazComponent implements OnInit {
  
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

    
    
  }
  

}
