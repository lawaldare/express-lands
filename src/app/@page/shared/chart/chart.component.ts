import { Component, OnInit, Input } from '@angular/core';

// const circle = document.querySelectorAll('svg');

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() outerStrokeColor: string = '#000000';
  @Input() innerStrokeColor: string = '#ffffff';
  @Input() title: any = ['CAPEX'];
  @Input() percent: string = '64';



  constructor() { }

  ngOnInit() {

  }

}
