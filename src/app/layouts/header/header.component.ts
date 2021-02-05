import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services';
import { User } from '../../models';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {    
    currentUser: User;

    constructor(
        private router: Router,
        private auth: AuthService
    ){
        this.auth.currentUser.subscribe(x => this.currentUser = x);
    }

    ngOnInit() {

    }

    logout() {
        this.auth.logout();
        this.router.navigate(['/login']);
    }

}
