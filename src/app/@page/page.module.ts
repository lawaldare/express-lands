import { SharedModule } from './shared/shared.module';
import { NgModule, ComponentFactoryResolver } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { routedComponents, PageRoutingModule } from "./page.routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageComponent } from './page/page.component';



@NgModule({
  declarations: [
    ...routedComponents,
    DashboardComponent,
    PageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PageRoutingModule,
    SharedModule,

  ],
  entryComponents: [],
  exports: [],
})
export class PageModule { }
