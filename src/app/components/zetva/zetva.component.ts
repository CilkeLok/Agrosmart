import { NgForm } from '@angular/forms';
import { FormdataService } from './../../services/formdata.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-zetva',
  templateUrl: './zetva.component.html',
  styleUrls: ['./zetva.component.css']
})
export class ZetvaComponent implements OnInit {

  constructor(private formDataService:FormdataService) { }

  ngOnInit() {
  }
onDalje(zetva:NgForm){
  const value=zetva.value;
  this.formDataService.getZetva(value);


}
}
