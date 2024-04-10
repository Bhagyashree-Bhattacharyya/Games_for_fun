import { Component, OnInit } from '@angular/core';
import { postalAddress } from '../../Models/postal-address';
import { PostalDeliveryService } from '../../Services/postal-delivery.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-on-click',
  templateUrl: './table-on-click.component.html',
  styleUrl: './table-on-click.component.css',
 
})

export class TableOnClickComponent implements OnInit {

  deliveryAddress: postalAddress = new postalAddress();
  postalCode : any = "";


  constructor(private postalService: PostalDeliveryService) {}

  ngOnInit(): void {
    this.postalService.getPostalDetail(this.postalCode).subscribe((data : postalAddress) => {this.deliveryAddress = data});
  }
     
  getDataOnClick(){
    this.postalService.getPostalDetail(this.postalCode).subscribe((data : postalAddress) => {this.deliveryAddress = data});
  }

}
