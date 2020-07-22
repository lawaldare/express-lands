import { NgModule, ComponentFactoryResolver } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { routedComponents, PageRoutingModule } from "./page.routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageComponent } from './page/page.component';


// import { MobileSidebarComponent } from "./mobile-sidebar/mobile-sidebar.component";
// import { MobileLeftSidebarComponent } from "./mobile-left-sidebar/mobile-left-sidebar.component";



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
  ],
  entryComponents: [],
  exports: [],
})
export class PageModule { }
