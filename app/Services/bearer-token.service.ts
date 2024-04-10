import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userMaster } from '../Models/user-master';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BearerTokenService {

  private tokenURL = 'https://webapi.jaipurrugs.com/api/oauth/access_token';

  constructor(private http: HttpClient) { }

  getToken(userCredentials : userMaster): Observable<userMaster>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    return this.http.post<userMaster>(this.tokenURL, userCredentials, { headers: headers }); 
  }
}
