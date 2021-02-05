import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Import, MetaData, GraphModel } from '../models';
import { map } from 'rxjs/operators';

@Injectable()

export class DataService {
    constructor (
        private api: ApiService
    ) {}

    sanitizedParams(params: object){
        const formParams = {};
        Object.entries(params).forEach(
            ([key, value]) => {
                if (value !== '') {
                    formParams[key] = value;
                }
            }
        )
        return formParams;
    }
   
    getDashboard(params: any): Observable<GraphModel> {
        return this.api.get('USA/GetUsaGraphadata', this.sanitizedParams(params));
    }
    getImportData(params: object): Observable<{imports: Import[], meta: MetaData}> {
        return this.api.get('USA/GetUsadata', this.sanitizedParams(params)).pipe(map(
            data => {
                return {
                    imports: data.usaImportMasters,
                    meta: {
                    total: data.totalCount,
                        pageIndex: data.pageIndex,                        
                        pageSize: data.pageSize 
                    },
                     
                };
               
            }
            
        ));
    }
    getImportFilters(params: object) {
        return this.api.get('USA/GetUsaFilterdata', this.sanitizedParams(params));
    }
 
    
}
