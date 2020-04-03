import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  title = "EXPERIENCE"
  works = [
    {
      timeStart: '01.2008',
      timeEnd: '11.2012',
      title: 'ABC1 Company',
      position: 'Manager',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eaque, consequatur laudantium fugiat similique autem eum deleniti qui architecto nihil dolorem voluptatem.'
    },
    {
      timeStart: '12.2012',
      timeEnd: '27.02.2016',
      title: 'ABC2 Company',
      position: 'Junior Project Manager',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eaque, consequatur laudantium fugiat similique autem eum deleniti qui architecto nihil dolorem voluptatem ipsa ad facilis.'
    },
    {
      timeStart: '03.2016',
      timeEnd: 'till now',
      title: 'ABC3 Company',
      position: 'Middle Project Manager',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eaque, consequatur laudantium fugiat similique autem eum deleniti qui architecto nihil dolorem voluptatem ipsa.'
    }
]

  constructor() { }

  ngOnInit() {
  }

}
