import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent {
  deliveries : any;
  constructor(private httpService: HttpService,private router:Router) { }

  ngOnInit() {
    this.httpService.getDeliveries().subscribe(
    (response) => { this.deliveries = response; },
    (error) => { console.log(error); });
  }

  newDelivery() {
    this.router.navigate(["/newdelivery"]);
  }

}
