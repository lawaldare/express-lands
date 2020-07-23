import { MenuItemSettingsComponent } from './menu-item-settings/menu-item-settings.component';
import { MenuItemFiveComponent } from './menu-item-five/menu-item-five.component';
import { MenuItemFourComponent } from './menu-item-four/menu-item-four.component';
import { MenuItemThreeComponent } from './menu-item-three/menu-item-three.component';
import { MenuItemTwoComponent } from './menu-item-two/menu-item-two.component';
import { MenuItemOneComponent } from './menu-item-one/menu-item-one.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageComponent } from './page/page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: PageComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "menu-one", component: MenuItemOneComponent },
      { path: "menu-two", component: MenuItemTwoComponent },
      { path: "menu-three", component: MenuItemThreeComponent },
      { path: "menu-four", component: MenuItemFourComponent },
      { path: "menu-five", component: MenuItemFiveComponent },
      { path: "settings", component: MenuItemSettingsComponent },
      { path: "", pathMatch: "full", redirectTo: "dashboard" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule { }

export const routedComponents = [
  PageComponent,
  DashboardComponent,
  MenuItemOneComponent,
  MenuItemTwoComponent,
  MenuItemThreeComponent,
  MenuItemFourComponent,
  MenuItemFiveComponent,
  MenuItemSettingsComponent
];
