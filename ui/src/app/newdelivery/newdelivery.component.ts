import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newdelivery',
  templateUrl: './newdelivery.component.html',
  styleUrls: ['./newdelivery.component.css']
})
export class NewdeliveryComponent {
  registration_number : string = '';
  dataComboBox : any;
  id_product : number = 0;
  amount : number = 0;
  price: number = 0;
  registration_date : Date = new Date();
  deliver_date:Date = new Date();
  guide_number:string = '';
  id_discount : number = 0;
  value_discount : number = 0;
  amount_discount: number = 0;
  total_price : number = 0;
  id_port : number = 0;
  type_delivery : number = 0;
  fleet_number : string = '';
  id_client : number = 0;
  id_cellar : number = 0;
  value_product : number = 0;

  constructor(private httpService: HttpService,private router:Router) { }

  ngOnInit() {
    this.httpService.getDataComboBox().subscribe(
    (response) => { this.dataComboBox = response; },
    (error) => { console.log(error); });
  }

  back(){
    this.router.navigate(["/delivery"]);
  }

  saveDelivery(){
    let dataDelivery = {};
    if(this.type_delivery == 0){
      dataDelivery = this.getDataTruck();
      console.log(dataDelivery);

      this.httpService.saveDeliveryTruck(JSON.stringify(dataDelivery)).subscribe(
      (response) => { this.back();},
      (error) => { console.log(error); });;
    }else{

      dataDelivery = this.getDataMaritime();
      console.log(dataDelivery);
      this.httpService.saveDeliveryMaritime(JSON.stringify(dataDelivery)).subscribe(
      (response) => { this.back(); },
      (error) => { console.log(error); });;
    }

    
  }

  getDataTruck(){
    let valueProduct = this.getProduct();
    let discount = this.getDiscount(valueProduct.value);
    let value_discount = discount.value_discount;
    let amount_discount = discount.amount_discount;
    var dataDelivery = {
      registration_number: this.registration_number,
      id_cellar: this.id_cellar,
      id_client: this.id_client,
      total_price: this.amount * valueProduct.value,
      detailDeliveriesInput : {
        id_product: this.id_product,
        amount: this.amount,
        price: this.price,
        registration_date: this.registration_date,
        deliver_date: this.deliver_date,
        guide_number: this.guide_number,
        id_discount: discount.id_discount,
        value_discount: value_discount,
        amount_discount: amount_discount,
        total_price: (this.amount * valueProduct.value) - value_discount
      }
      
    }

    return dataDelivery;
  }

  getDataMaritime(){
    let valueProduct = this.getProduct();
    let discount = this.getDiscount(valueProduct.value);
   
    let value_discount = 0;
    let amount_discount = 0;
    var dataDelivery = {
      fleet_number: this.fleet_number,
      id_port: this.id_port,
      id_client: this.id_client,
      total_price: this.amount * valueProduct.value,
      detailDeliveriesInput : {
        id_product: this.id_product,
        amount: this.amount,
        price: this.price,
        registration_date: this.registration_date,
        deliver_date: this.deliver_date,
        guide_number: this.guide_number,
        id_discount: discount.id_discount,
        value_discount: value_discount,
        amount_discount: amount_discount,
        total_price: (this.amount * valueProduct.value) - value_discount
      }
      
    }

    return dataDelivery;
  }

  getDiscount(value_product:number){
    let dataDiscount = {
      id_discount: null,
      value_discount: 0,
      amount_discount: 0,
    };

    if(this.dataComboBox.discounts){
      this.dataComboBox.discounts.forEach((d: { min_value: number; max_value: number; id: null; percent: number; }) => {
        if(d.min_value <= this.amount && this.amount <= d.max_value){
          dataDiscount.id_discount = d.id;
          dataDiscount.amount_discount = d.percent;
          dataDiscount.value_discount = value_product * (100/d.percent);
        }
      });
    }

    return dataDiscount;
  }

  getProduct(){
    let dataProduct = {
      id: null,
      name: "",
      value: 0
    };

    if(this.dataComboBox.products){
      this.dataComboBox.products.forEach((d: { name: string; value: number; id: null; }) => {
        if(this.id_product == d.id){
          dataProduct.id = d.id;
          dataProduct.name = d.name;
          dataProduct.value = d.value
        }
      });
    }

    return dataProduct;
  }

}
