import { Component, OnInit } from '@angular/core';
import { Product } from '../../Product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  page = 1;
  pageSize = 12;
products: Product[];
  constructor(
     private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }
getProducts() {
    this.productService.getProducts().subscribe(data => {
      console.log(data)
      this.products = data;
    });
  }
}