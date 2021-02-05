import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService, AlertService } from '../services';
import { map } from 'rxjs/operators';

import { GraphModel, Import, MetaData } from '../models';
import { SlideAnimation } from '../helpers/animation.slide';
import { IMPORT_COLS } from '../helpers/import.columns';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    animations: [SlideAnimation],
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    constructor () { }
    ngOnInit() { }
    // isAdvanced = 'out';
    // searchForm: FormGroup;
    // datatypes = ['import', 'export'];
    // years = [2017, 2018];
    // importKeys = IMPORT_COLS;
    // shipments: Import[];
    // meta: MetaData;
    // shipmentFilters = [];
    // loading: Boolean;
    // chartData: GraphModel;
    // charPorttData: any;
    // pageIndex = 1;
    // pageSize = 20;
    // constructor (
    //     private fb: FormBuilder,
    //     private alertService: AlertService,
    //     private ds: DataService
    // ) { }

    // ngOnInit() {
    //     this.loading = false;
    //     this.searchForm = this.fb.group({
    //         datatype: '',
    //         year: '',
    //         month: '',
    //         chapter: '',
    //         hscode: '',
    //         product: '',
    //         port: '',
    //         country: '',
    //         exporter: '',
    //         importer: '',
    //         unit: '',
    //         type: ''
    //     });
    // }
    // get form() { return this.searchForm.controls; }
    // onUrlChange(urlParams: object){
    //     console.log(urlParams);
    // }
    // fileteImportData(key: string, value: any) {
    //     const paramObj = {};
    //     paramObj[key] = value;
    //     this.searchForm.patchValue(paramObj);
    //     console.log(this.getFormParams(this.searchForm.value));
    //     this.searchData(this.searchForm);
    // }
    // toggleAdvanceSearch() {
    //     this.isAdvanced = this.isAdvanced === 'out' ? 'in' : 'out';
    // }
    // searchData(form: FormGroup) {
    //     this.loading  = true;
    //     const formParams = this.getFormParams(form.value);
    //     this.ds.getImportData()
    //         .subscribe(
    //             ({ imports, meta }) => {
    //                 if (imports != null) {
    //                     this.shipments = imports;
    //                     this.meta = meta;
    //                 } else {
    //                     this.alertService.error('No records found');
    //                 }
    //                 window.scroll(0, 320);
    //                 this.loading = false;
    //             },
    //         error => {
    //             this.shipments = null;
    //             this.loading = false;
    //             this.alertService.error(error.statusText);
    //         }
    //     );

    //     this.ds.getImportFinters()
    //     .pipe(map(data => data[0]))
    //     .subscribe(
    //         data => {
    //             this.shipmentFilters = data;
    //         }
    //     );
    //     this.ds.getGraphicalData(formParams)
    //     .pipe(
    //         map(
    //             data =>  data[0].portwisegraph
    //         ),
    //         map(
    //             portwisegraph => portwisegraph.map((item: {
    //                 name: any;
    //                 total: any;
    //             }) => ({
    //                 name: item.name,
    //                 value: item.total
    //             }))
    //         )
    //     ).subscribe(
    //         data => {
    //             this.charPorttData = data;
    //         }
    //     );
    // }
    // getFormParams(formData: {}, params?: {}){
    //     const formParams = {};
    //     Object.entries(formData).forEach(
    //         ([key, value]) => {
    //             if (value !== '') {
    //                 formParams[key] = value;
    //             }
    //         }
    //     );
    //     if(params){
    //         Object.entries(params).forEach(
    //             ([key, value]) => {
    //                 if (value !== '') {
    //                     formParams[key] = value;
    //                 }
    //             }
    //         );
    //     }
    //     formParams['pageindex'] = this.pageIndex;
    //     formParams['pagesize'] = this.pageSize;
    //     return formParams;
    // }
    // goToPage(n: number): void {
    //     this.pageIndex = n;
    //     this.searchData(this.searchForm);
    // }
    // onNext(): void {
    //     this.pageIndex++;
    //     this.searchData(this.searchForm);
    // }
    // onPrev(): void {
    //     this.pageIndex--;
    //     this.searchData(this.searchForm);
    // }
}
