import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AlertModel } from '../models';

@Injectable({
    providedIn: 'root'
})

export class AlertService {
    private subject = new Subject<AlertModel>();
    private keepAfterRouteChange = false;

    constructor(private router: Router) {
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    this.keepAfterRouteChange = false;
                } else {
                    this.clear();
                }
            }
        });
    }
    getAlert(): Observable<any> {
        return this.subject.asObservable();
    }
    success(message, keepAfterRouteChange = true): void {
        this.alert(message, keepAfterRouteChange, 'success', 'check');
    }
    error(message, keepAfterRouteChange = true): void {
        this.alert(message, keepAfterRouteChange, 'error', 'exclamation');
    }
    info(message: string, keepAfterRouteChange = true): void {
        this.alert(message, keepAfterRouteChange, 'info', 'info');
    }
    warn(message: string, keepAfterRouteChange = true): void {
        this.alert(message, keepAfterRouteChange, 'warn', 'exclamation-triangle');
    }
    alert(message: string, keepAfterRouteChange = true, type: string, icon: string): void {
        this.keepAfterRouteChange = keepAfterRouteChange;
        const alertIcon = typeof icon !== 'undefined' ? icon : 'info';
        const alertType = typeof type !== 'undefined' ? type : 'alert';
        this.subject.next(<AlertModel>{
            message: message,
            alertIcon: alertIcon,
            alertType: alertType,
            keepAfterRouteChange: this.keepAfterRouteChange
        });
    }
    clear() {
        this.subject.next();
    }
}