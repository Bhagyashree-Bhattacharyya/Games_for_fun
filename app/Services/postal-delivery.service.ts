import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { postalAddress } from '../Models/postal-address';


const postalAddressURL ="http://www.postalpincode.in/api/pincode/";

@Injectable({
  providedIn: 'root'
})

export class PostalDeliveryService {

  constructor(private httpclient:HttpClient) { }

  getPostalDetail(postalCode: any):Observable<postalAddress>{
    return this.httpclient.get<postalAddress>(postalAddressURL + postalCode)
  }
}



