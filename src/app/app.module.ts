import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing.module';
import { CoreModule } from './common/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts'; 
import { AppComponent } from './app.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './layouts/main/main.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layouts/header/header.component';
import { ImportsComponent } from './imports/imports.component';  
import { AgGridModule } from 'ag-grid-angular'; 
import   'ag-grid-enterprise';
 import { NgApexchartsModule } from 'ng-apexcharts';
 
//import { AgGridModule } from 'ag-grid-community/angular';
@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        MainComponent,
        HomeComponent,
        DashboardComponent,
        HeaderComponent,
        ImportsComponent, 

    ],
  
      
    imports: [
        CoreModule,  
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule, 
        NgxChartsModule, 
         NgApexchartsModule,
        AgGridModule.withComponents([ImportsComponent])
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
