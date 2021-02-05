import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private activeUser: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.activeUser = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('in_exu')));
        this.currentUser = this.activeUser.asObservable();
    }

    public get currentUserValue(): User {
        return this.activeUser.value;
    }

    login(username: string, password: string) {
        const user = {
            id: 2,
            username: 'Ravinder',
            password:'Atri',
            firstName: '',
            lastName: '',
            token: 'sdvmnfksjfbcsdk.fjciufhvjsdnneuivdhb'
        };
        if (user && user.token) {
            localStorage.setItem('in_exu', JSON.stringify(user));
            this.activeUser.next(user);
        }

        return user;
        /*
        return this.http.post<any>(`/users/authenticate`, { username, password })
            .pipe(map(user => {
                if (user && user.token) {
                    localStorage.setItem('in_exu', JSON.stringify(user));
                    this.activeUser.next(user);
                }

                return user;
            }));
            */
    }

    logout() {
        localStorage.removeItem('in_exu');
        this.activeUser.next(null);
    }
}