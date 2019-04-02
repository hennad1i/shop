import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const minYear = 2015;
const maxYear = 2019;
const minValue = 25;
const maxValue = 200;
let randomData = [];

let randYear = (max, min) => {
  return Math.ceil(Math.random() * (max - min) + min);
}

@Component({
  selector: 'app-statistic-item',
  templateUrl: './statistic-item.component.html',
  styleUrls: ['./statistic-item.component.scss']
})

export class StatisticItemComponent implements OnInit {

  width;
  height;
  type;
  dataFormat;
  dataSource;
  data;
  caption;

  constructor(private router: Router) {
    const split = this.router.url.split('/');
    this.caption = split.length <= 3 ? 'phones' : split[split.length - 1];

    randomData = [];
    for (let index = 0; index < 10; index++) {
      randomData.push({
        label: randYear(maxYear, minYear),
        value: randYear(maxValue, minValue)
      })
    }

    randomData = randomData.sort((a, b) => {
      if (a.label > b.label) {return 1;}
      if (a.label < b.label) {return -1;}
      return 0;
    })

    this.data = {
      "chart": {
        "caption": "Sales "+ this.caption,
        "yaxisname": "Thousands $",
        "subcaption": "[2015-2019]",
        "numbersuffix": " $",
        "rotatelabels": "1",
        "setadaptiveymin": "1",
        "theme": "fusion"
      },
      "data": randomData
    }

    this.width = '100%';
    this.height = '80%';
    this.type = 'line';
    this.dataFormat = 'json';
    this.dataSource = this.data;
    
  }

  ngOnInit() {
  }

}
