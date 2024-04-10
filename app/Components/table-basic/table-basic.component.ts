import { Component, Input, OnInit } from '@angular/core';
import { postalAddress } from '../../Models/postal-address';
import { PostalDeliveryService } from '../../Services/postal-delivery.service';




@Component({
  selector: 'app-table-basic',
  templateUrl: './table-basic.component.html',
  styleUrl: './table-basic.component.css'
})

export class TableBasicComponent implements OnInit {

  deliveryAddress: postalAddress = new postalAddress();
  //@Input() postalCode: string = '';
  postalCode="302020"

  constructor(private postalService: PostalDeliveryService) {}

  ngOnInit(): void {
    this.postalService.getPostalDetail(this.postalCode).subscribe((data : postalAddress) => {this.deliveryAddress = data});
  }
    
}
