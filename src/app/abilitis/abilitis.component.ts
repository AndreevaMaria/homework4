import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abilitis',
  templateUrl: './abilitis.component.html',
  styleUrls: ['./abilitis.component.css']
})

export class AbilitisComponent implements OnInit {
  title1 = "EDUCATION";
  educations = [
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
  skills = [
    {
      skill: 'Lorem, ipsum dolor sit amet',
      level: 0.7,
    },
    {
      skill: 'Lorem, ipsum dolor sit amet consectetur adipisicing',
      level: 0.85,
    },
    {
      skill: 'Lorem, ipsum dolor sit amet amet consectetur',
      level: 0.75,
    }
  ]

   title3 = 'CERTIFICATION'
   serts = ['Lorem, ipsum dolor sit amet consectetur adipisicing.',
    'Lorem, ipsum dolor sit amet consectetur .']

  constructor() { }

  ngOnInit() {
  }

}
