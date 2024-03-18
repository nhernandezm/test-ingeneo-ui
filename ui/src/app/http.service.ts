import { HttpClient } from  '@angular/common/http';
import { Injectable } from  '@angular/core';

@Injectable({
providedIn:  'root'
})
export class HttpService {
  private url = 'http://localhost:20302/api/';
  constructor(private http: HttpClient) { }

  getDeliveries() {
    return this.http.get(this.url +  "delivery");
  }

  getDataComboBox() {
    return this.http.get(this.url +  "delivery/datacombobox");
  }

  saveDeliveryMaritime(dataDelivery:any) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post(this.url +  "delivery/create/maritime", dataDelivery,{headers});
  }

  saveDeliveryTruck(dataDelivery:any) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post(this.url +  "delivery/create/truck", dataDelivery,{headers});
  }

}