import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(
        private http: HttpClient
    ) { }

    private apiUrl =  environment.API_URL;
    private formatErrors(error: any) {
        return throwError( error );
    }

    get(path: string, data = {}): Observable<any> {
        const params: HttpParams  = new HttpParams({ fromObject: data });
        return this.http.get(`${this.apiUrl}${path}`, { params })
        .pipe(catchError(this.formatErrors));
    }

    put(path: string, body: Object = {}): Observable<any> {
        return this.http.put(`${this.apiUrl}${path}`, JSON.stringify(body))
        .pipe(catchError(this.formatErrors));
    }

    post(path: string, body: Object = {}): Observable<any> {
        return this.http.post(`${this.apiUrl}${path}`, JSON.stringify(body))
        .pipe(catchError(this.formatErrors));
    }

    delete(path): Observable<any> {
        return this.http.delete(`${this.apiUrl}${path}`)
        .pipe(catchError(this.formatErrors));
    }
}
