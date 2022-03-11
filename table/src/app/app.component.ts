import { Component } from '@angular/core';
import { ProductRepository } from '../repository.model'
@Component({
  selector: 'admin-products',
  templateUrl: './product.component.html',
  styleUrls: ['./app.component.css']
})
export class AdminProductsComponent {
  
  products;
  model: ProductRepository
  
  constructor() {}
    this.model = new ProductRepository();
}
