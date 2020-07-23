import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  capexOuterStrokeColor = '#1B5BAC';
  capexInnerStrokeColor = '#E2EDF8';
  capexTitle: string = 'CAPEX';
  capexPercent: string = '89';

  opexOuterStrokeColor = '#FF6542';
  opexInnerStrokeColor = '#F8E9E2';
  opexTitle: string = 'OPEX';
  opexPercent: string = '50';

  countOuterStrokeColor = '#F6AE2D';
  countInnerStrokeColor = '#FFFBF5';
  countTitle: string = 'ASSETS';
  countPercent: string = '80';
  constructor() { }

  ngOnInit() {
  }

}
