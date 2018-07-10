import { AutentifikacijaService } from './autentifikacija.service';
import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ZastitaService implements CanActivate{

  constructor(private autentifikacijaService:AutentifikacijaService) { }

  canActivate (route:ActivatedRouteSnapshot,state:RouterStateSnapshot) {
    
    return this.autentifikacijaService.prijavljen();
  
  }
}
