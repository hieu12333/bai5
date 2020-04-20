import { Component, OnInit } from '@angular/core';
import { Product } from '../../Product';
import { ProductService } from '../../product.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products: Product[];
page = 1;
pageSize = 12;
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