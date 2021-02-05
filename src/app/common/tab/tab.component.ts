import { Component, Input } from '@angular/core';

@Component({
    selector: 'as-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss']
})
export class TabComponent {
    @Input() icon: string;
    @Input() for: string;
    @Input() title: string;
    @Input() active = false;
}
