import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

//let div1 = document.getElementById("div");
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  // addToCart:number=0;
  // products={
  //   name:"IPHONE",
  //   color:"black",
  //   price:1000,
  //   discount:20,
  //   stock:10,
  //   pImage:"/assets/images/iphone.png",
  // }
  // discount_price(){
  //   return this.products.price-(this.products.price*this.products.discount/100);
  // }
  // decrementCartValue(){
  //   if(this.addToCart>0){
  //     this.addToCart--;
  //   }
  // }
  // incremCartValue(){
  //   if(this.addToCart<this.products.stock){
  //     this.addToCart++;
  //   }
  // }
  listStrings:string[]=["shwetha","manu","manjula","Jayanth","Hruthvik"];
  theSearchText:string='';
  fromSearch(val){
    this.theSearchText=val;
  }

  @ViewChild(ProductListComponent) productListComponent:ProductListComponent;
  // func(){
  //   console.log(div1);
  // }
}