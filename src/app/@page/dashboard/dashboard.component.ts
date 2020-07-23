import { DashboardService } from './../../@core/dashboard.service';
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
  capexPercent: number;

  opexOuterStrokeColor = '#FF6542';
  opexInnerStrokeColor = '#F8E9E2';
  opexTitle: string = 'OPEX';
  opexPercent: number;

  countOuterStrokeColor = '#F6AE2D';
  countInnerStrokeColor = '#FFFBF5';
  countTitle: string = 'ASSETS';
  countPercent: string = '80';

  dashboardData: any;
  loading: boolean = false;


  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getDashboardData();
  }

  getDashboardData() {
    this.loading = true;
    this.dashboardService.getDashboardData().subscribe(data => {
      this.loading = false;
      this.dashboardData = data[0];
      this.capexPercent = (+this.dashboardData.totalPlayBudgetSpent / +this.dashboardData.totalPlayBudget) * 100;
      this.opexPercent = (+this.dashboardData.totalWorkBudgetSpent / +this.dashboardData.totalWorkBudget) * 100;
      this.capexPercent = (+this.dashboardData.totalCardsInUse / +this.dashboardData.totalCardsCount) * 100;
    })
  }

}
