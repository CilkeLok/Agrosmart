import { AutentifikacijaService } from './../../services/autentifikacija.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  constructor(private autentifikacijaService:AutentifikacijaService) { }

  ngOnInit() {
  }
registrujSe (form:NgForm) {
  const email=form.value.email;
  const sifra=form.value.sifra;
  this.autentifikacijaService.registrujKorisnika(email,sifra);
}

}
