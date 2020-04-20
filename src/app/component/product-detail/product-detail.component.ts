import { Component, OnInit } from "@angular/core";
import { Product } from "../../Product";

import { ProductService } from "../../product.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  
  product: Product;
  constructor(
    private productService: ProductService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getProduct();
  }
  getProduct() {
    this.router.params.subscribe(param =>{
      console.log(param);
      this.productService.getProduct(param.productID).subscribe(data => (this.product = data))
    });
  }
}
