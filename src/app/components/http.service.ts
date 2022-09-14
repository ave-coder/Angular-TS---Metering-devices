import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from './user'
import { Data } from './data'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) { }

    postData(user: User): Observable<{ data: { access_token: string } }> {
        return this.http.post<{ data: { access_token: string } }>('https://core.nekta.cloud/api/auth/login', user)
    }

    getDevices(data: Data): Observable<{ data: string }> {
        const authHeaders = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);

        return this.http.post<{ data: string }>('https://core.nekta.cloud/api/device/metering_devices', data, { headers: authHeaders })
    }
}
