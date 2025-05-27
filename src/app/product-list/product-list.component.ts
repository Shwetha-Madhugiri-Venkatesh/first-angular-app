import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  addToCart:number=0;
  products={
    name:"IPHONE",
    color:"black",
    price:1000,
    discount:20,
    stock:10,
    pImage:"/assets/images/iphone.png",
  }
  discount_price(){
    return this.products.price-(this.products.price*this.products.discount/100);
  }
  decrementCartValue(){
    if(this.addToCart>0){
      this.addToCart--;
    }
  }
  incremCartValue(){
    if(this.addToCart<this.products.stock){
      this.addToCart++;
    }
  }
}
