import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from 'products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = products;
  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  loadProducts() {
    this.router.navigate(['products'], {relativeTo: this.route });
  }
}
