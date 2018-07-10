import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 ngOnInit() {
   firebase.initializeApp({
  apiKey: "AIzaSyAVw7CahvrH-tNJMZSHhbVtrZoz6jQ-zdY",
  authDomain: "agrosmart-4af0c.firebaseapp.com"
   });
 }
}
