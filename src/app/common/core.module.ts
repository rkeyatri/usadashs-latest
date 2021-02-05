import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ReplacePipe } from '../helpers/replace.pipe';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AuthService, AlertService, ApiService, DataService } from '../services';

import { AsTableComponent } from './as-table/as-table.component';
import { AlertComponent } from './alert/alert.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { PagerComponent } from './pager/pager.component';
import { SearchBoxComponent } from './search/search-box.component';

@NgModule({
    declarations: [AsTableComponent, ReplacePipe, AlertComponent, TabsComponent, TabComponent, PagerComponent, SearchBoxComponent],
    imports: [
        AngularFontAwesomeModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ],
    exports: [
        AsTableComponent,
        SearchBoxComponent,
        TabComponent,
        TabsComponent,
        AlertComponent,
        PagerComponent,
        AngularFontAwesomeModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        AuthService,
        AlertService,
        DataService,
        ApiService
    ]
})
export class CoreModule { }
