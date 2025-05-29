import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  @Input() product_list_comp:ProductListComponent;
  product:Product;
  ngOnInit(){
    this.product = this.product_list_comp.selectedProduct;
    console.log(this.product.color)
  }
}
