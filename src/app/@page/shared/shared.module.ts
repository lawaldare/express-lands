import { ChartComponent } from './chart/chart.component';

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgCircleProgressModule } from 'ng-circle-progress';
import { TooltipModule } from 'ng2-tooltip-directive';




@NgModule({
  declarations: [
    ChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TooltipModule,
    NgCircleProgressModule.forRoot(
      {
        "radius": 60,
        "space": -10,
        "outerStrokeWidth": 10,
        "innerStrokeWidth": 10,
        "animateTitle": false,
        "titleColor": '#000000',
        "titleFontSize": '16',
        "titleFontWeight": '700',
        "showUnits": false,
        "showBackground": false,
        "clockwise": false,
        "startFromZero": false,
        "showSubtitle": false,
        "animation": true,
        "animationDuration": 300
      }
    )

  ],
  exports: [
    ChartComponent
  ],

})
export class SharedModule { }
