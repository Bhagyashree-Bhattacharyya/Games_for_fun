import { Component } from '@angular/core';

import { postalAddress } from '../app/Models/postal-address';
import { PostalDeliveryService } from '../app/Services/postal-delivery.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'practice-app';

  dataLoad: boolean = false;
  postalCode:any = '';
  deliveryAddress:postalAddress = new postalAddress();

  constructor(private postalDelivery:PostalDeliveryService){}

  getPostalDeliveryDetails(){
    this.postalDelivery.getPostalDetail(this.postalCode).subscribe( (data) => {console.warn(data)});
  }

  getDataOnClick(){
   
    this.postalDelivery.getPostalDetail(this.postalCode).subscribe( (data) => {
     console.log(data);
       this.deliveryAddress = data
      });
  }
}
