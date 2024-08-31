import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardInformationComponent } from './components/dashboard-information/dashboard-information.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginPageComponent },
  { path: "inicio/:user", component: HomePageComponent },
  { path: "infoCardShop/:shopName", component:DashboardComponent},
  { path: "informationCard/:shopName", component: DashboardInformationComponent },
  { path: "home", component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
