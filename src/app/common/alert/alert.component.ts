import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { AlertModel } from '../../models';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
    alerts: AlertModel[] = [];
    constructor(
        private as: AlertService
    ) { }

    ngOnInit(): void {
        this.as.getAlert().subscribe((alert: AlertModel) => {
            if (!alert) {
                this.alerts = [];
                return;
            }
            this.alerts.push(alert);
            setTimeout(() => this.removeAlert(alert), 10000);
        });
    }

    removeAlert(alert: AlertModel): void {
        this.alerts = this.alerts.filter(x => x !== alert);
    }
}
