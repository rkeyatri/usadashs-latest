import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthService, AlertService } from '../services';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    public submitted = false; 

    constructor(
        private fb: FormBuilder,
        private auth: AuthService,
        private alert: AlertService,
        private route: ActivatedRoute,
        private router: Router,
    ) {
        if(this.auth.currentUserValue){
            this.router.navigate(['/dashboard']);
        }
    } 
    ngOnInit() {
        this.loginForm = this.fb.group({
            remember: [''],
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    get form() { return this.loginForm.controls; }

    onSubmit(){
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }

        this.auth.login(this.form.username.value, this.form.password.value);
        this.router.navigate(['/home']); 
            // .pipe(first())
            // .subscribe(
            //     data => {
            //         console.log(data);
            //         this.router.navigate(['/dashboard']);
            //     },
            //     error => {
            //         this.alert.error(error.statusText);
            //     }
            // );
           
    }
}
