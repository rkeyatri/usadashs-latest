import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AuthGuard } from './guards';

import {LoginComponent} from './login/login.component';
import {MainComponent} from './layouts/main/main.component';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ImportsComponent} from './imports/imports.component'; 

const routes: Routes = [
    {
        path: '', 
        component: MainComponent,
        canActivate: [AuthGuard],
        children: [
            {path: '', component: HomeComponent, pathMatch: 'full'},
            {path: 'imports', component: ImportsComponent, pathMatch: 'full'},  
            {path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
        ]
    },
    {path: 'login', component: LoginComponent},
    {path: 'forgot-password', component: LoginComponent},
    {path: 'register', component: LoginComponent},
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}