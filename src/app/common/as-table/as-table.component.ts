import { Component, Input, OnChanges } from '@angular/core';
import {ColumnLayout} from '../../models/columns.layout';

@Component({
    selector: 'as-table',
    templateUrl: './as-table.component.html',
    styleUrls: ['./as-table.component.scss']
})


export class AsTableComponent implements OnChanges {

    constructor() { }
    @Input() columns: ColumnLayout[];
    @Input() records: any[];
    columnMaps: ColumnLayout[]; 
    ngOnChanges() {
        if (this.columns) {
            this.columnMaps = this.columns;
        } else {
            this.columnMaps = Object.keys(this.records[0])
                .map( key => {
                     return {
                        key: key,
                        header: key.slice(0, 1).toUpperCase() + key.replace(/_/g, ' ' ).slice(1)
                    };
            });
        }
    }
}


  