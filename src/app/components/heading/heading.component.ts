import { AutentifikacijaService } from './../../services/autentifikacija.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  constructor(private autentifikacijaService:AutentifikacijaService) { }

  odjaviSe(){
    this.autentifikacijaService.odjaviSe();
  }

  ngOnInit() {
  }

  

}
