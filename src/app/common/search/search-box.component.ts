import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../services';
import { SlideAnimation } from '../../helpers/animation.slide';

@Component({
    selector: 'app-search-box',
    templateUrl: './search-box.component.html',
    animations: [SlideAnimation],
    styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
    @Output() searchSubmit = new EventEmitter(); 
    searchForm: FormGroup; 
    constructor (
        private router: Router,
        private ds: DataService,
        private route: ActivatedRoute,
        private fb: FormBuilder,
    ) { }

    ngOnInit() {
        this.searchForm = this.fb.group({
            mode: '',
            fromdate:'',
            todate:'',
            year:'',
            product:'',            
            hscode: '', 
            port: '',
            country: '',
            exporter: '',
            importer: '',
            unit: '', 
          
        });

        const urlParams = combineLatest(
            this.route.params,
            this.route.queryParams,
            (params, queryParams) => ({ ...params, ...queryParams})
        );

        urlParams.subscribe(routeParams => {
            routeParams.mode = this.route.snapshot.routeConfig.path;
            this.searchForm.patchValue(routeParams);
        });
    }
    get form() { return this.searchForm.controls; }
  
    onDataSearch(form: FormGroup) {
        this.searchSubmit.emit(this.searchForm);
    }
}
