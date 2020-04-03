import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  person = {
    image: "../assets/avatar.jpg",
    title: 'PERSONAL INFORMATION',
    adress: '18 Eastrail St., Suite 6, Lockport, NY 14094',
    email: 'jb@mail.com',
    phone: '8 999 123 45 67'
    }
  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
  }

}
