import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abilitis',
  templateUrl: './abilitis.component.html',
  styleUrls: ['./abilitis.component.css']
})
export class AbilitisComponent implements OnInit {
  name = "LANE APPLE";
  anonce = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.';
  title1 = "EDUCATION";
  items1 = [
    {
      period: '2006-2008',
      place: 'Univercity of Cambridge, Cambridge, England',
      study: 'Business Marketing'
    },
    {
      period: '2004-2006',
      place: 'English School in London',
      study: 'Language Course'
    }
  ]
  title2 = 'SKILLS'
  items2 = ['Lorem, ipsum dolor sit amet.',
   'Lorem, ipsum dolor sit amet consectetur adipisicing.',
   'Lorem, ipsum dolor sit amet consectetur.']

   title3 = 'CERTIFICATION'
   items3 = ['Lorem, ipsum dolor sit amet consectetur adipisicing.',
    'Lorem, ipsum dolor sit amet consectetur .']
  constructor() { }

  ngOnInit() {
  }

}
