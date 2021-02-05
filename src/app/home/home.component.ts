import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }
    onSearchSubmit(form: any){
        const searchFormData = form.value;
        if(searchFormData.mode === 'exports'){
            this.router.navigate(['/exports'], { queryParams: this.getFormParams(searchFormData)});
        } else if(searchFormData.mode === 'imports') {
            this.router.navigate(['/imports'], { queryParams: this.getFormParams(searchFormData)});
        }
    }
    getFormParams(formData: object){
        const formParams = {};
        Object.entries(formData).forEach(
            ([key, value]) => {
                if (value !== '' && key !== 'mode') {
                    formParams[key] = value;
                }
            }
        );
        return formParams;
    }
}
