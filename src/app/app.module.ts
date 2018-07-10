import { ZastitaService } from './services/zastita.service';
import { FormdataService } from './services/formdata.service';
import { AutentifikacijaService } from './services/autentifikacija.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeadingComponent } from './components/heading/heading.component';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { SetvaComponent } from './components/setva/setva.component';
import { PrikazComponent } from './components/prikaz/prikaz.component';
import { ZetvaComponent } from './components/zetva/zetva.component';
import { ZaradaComponent } from './components/zarada/zarada.component';
import { GreskaComponent } from './components/greska/greska.component';
import { Routes,RouterModule,Router } from '@angular/router';
import { RegistracijaComponent } from './components/registracija/registracija.component';
import { LogovanjeComponent } from './components/logovanje/logovanje.component';
import { CommonModule } from '@angular/common';



const appRoutes:Routes = [
  { path:'',redirectTo:'/pocetna', pathMatch: 'full'},
  { path:'pocetna',component:PocetnaComponent},
  { path:'setva',component:SetvaComponent,canActivate:[ZastitaService]},
  { path:'prikaz',component:PrikazComponent,canActivate:[ZastitaService]},
  { path:'zetva', component:ZetvaComponent,canActivate:[ZastitaService]},
  { path:'zarada',component:ZaradaComponent,canActivate:[ZastitaService]},
  { path:'logovanje',component:LogovanjeComponent},
  { path:'registracija',component:RegistracijaComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    PocetnaComponent,
    SetvaComponent,
    PrikazComponent,
    ZetvaComponent,
    ZaradaComponent,
    GreskaComponent,
    RegistracijaComponent,
    LogovanjeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [AutentifikacijaService,
              FormdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
