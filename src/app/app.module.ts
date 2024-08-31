import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ButtonLogoComponent } from './components/buttons/button-logo/button-logo.component';
import { CardShopComponent } from './components/cards/card-shop/card-shop.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardMetricsComponent } from './components/cards/card-metrics/card-metrics.component';
import { TableMetricsComponent } from './components/tables/table-metrics/table-metrics.component';
import { TableAdvertisingComponent } from './components/tables/table-advertising/table-advertising.component';
import { CardInfoPuntualComponent } from './components/cards/card-info-puntual/card-info-puntual.component';
import { ButtonMainComponent } from './components/buttons/button-main/button-main.component';
import { CardEventoComponent } from './components/cards/card-evento/card-evento.component';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { BaseChartDirective } from 'ng2-charts';
import { TableTrackingComponent } from './components/tables/table-tracking/table-tracking.component';
import { DashboardInformationComponent } from './components/dashboard-information/dashboard-information.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignupPageComponent,
    LoginPageComponent,
    ButtonLogoComponent,
    CardShopComponent,
    DropdownComponent,
    NavbarComponent,
    DashboardComponent,
    CardMetricsComponent,
    TableMetricsComponent,
    TableAdvertisingComponent,
    CardInfoPuntualComponent,
    ButtonMainComponent,
    CardEventoComponent,
    TableTrackingComponent,
    DashboardInformationComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BaseChartDirective,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    provideClientHydration(),
    provideCharts(withDefaultRegisterables()),
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
