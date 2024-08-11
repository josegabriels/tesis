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
    ButtonMainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
