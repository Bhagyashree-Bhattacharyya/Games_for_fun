import { Component } from '@angular/core';
import { postalAddress } from '../../Models/postal-address';
import { PostalDeliveryService } from '../../Services/postal-delivery.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  postalCode:any = "302020";
  deliveryAddress:postalAddress = new postalAddress();

  constructor(private postalService : PostalDeliveryService){
  //  this.postalDelivery.getPostalDetail(this.postalCode).subscribe(data=>{console.warn(data)});
  }
  
  getPostalDeliveryDetails(){
    this.postalService.getPostalDetail(this.postalCode).subscribe((data : postalAddress)=>{console.warn(data)});
  }

}
