import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  works = [
    {
      timeStart: '10.01.2008',
      timeEnd: '21.11.2012',
      title: 'ABC1',
      position: 'Lorem dolor',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eaque, consequatur laudantium fugiat similique autem eum deleniti qui architecto nihil dolorem voluptatem ipsa ad facilis consequuntur ducimus veniam. Totam, tenetur!'
    },
    {
      timeStart: '05.12.2012',
      timeEnd: '27.02.2016',
      title: 'ABC2',
      position: 'Lorem dolor',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eaque, consequatur laudantium fugiat similique autem eum deleniti qui architecto nihil dolorem voluptatem ipsa ad facilis consequuntur ducimus veniam. Totam, tenetur!'
    },
    {
      timeStart: '14.03.2016',
      timeEnd: 'till now',
      title: 'ABC3',
      position: 'Lorem dolor',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eaque, consequatur laudantium fugiat similique autem eum deleniti qui architecto nihil dolorem voluptatem ipsa ad facilis consequuntur ducimus veniam. Totam, tenetur!'
    }
]

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
  }

}
