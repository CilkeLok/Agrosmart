
import { FormdataService } from './../../services/formdata.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



import { Njiva } from '../../components/njiva';

@Component({
  selector: 'app-setva',
  templateUrl: './setva.component.html',
  styleUrls: ['./setva.component.css']
})
export class SetvaComponent implements OnInit {

njiva:Njiva;
currentNjiva:Njiva;

  constructor(private formDataService:FormdataService) { }

  ngOnInit() {
  }

onProsledi(forma:NgForm){
  const value=forma.value;
  this.formDataService.getNjiva(value);
  
}

}
