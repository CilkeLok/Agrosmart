import { AutentifikacijaService } from './../../services/autentifikacija.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-logovanje',
  templateUrl: './logovanje.component.html',
  styleUrls: ['./logovanje.component.css']
})
export class LogovanjeComponent implements OnInit {

  constructor(private autentifikacijaService:AutentifikacijaService) { }

  ngOnInit() {
  }
prijaviSe (form:NgForm) {
  const email=form.value.email;
  const sifra=form.value.sifra;
  this.autentifikacijaService.prijaviKorisnika(email,sifra);
}

}
