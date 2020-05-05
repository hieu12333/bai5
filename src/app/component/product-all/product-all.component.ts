import { Component, OnInit } from "@angular/core";
import { Product } from "../../Product";
import { ProductService } from "../../product.service";
@Component({
  selector: "app-product-all",
  templateUrl: "./product-all.component.html",
  styleUrls: ["./product-all.component.css"]
})
export class ProductAllComponent implements OnInit {
  keyword;
  page = 1;
  pageSize = 8;
  products: Product[];
  constructor(
    
    private productService: ProductService
    
    ) {}

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe(data => {
      //  console.log(data);
      this.products = data;
    });
  }
  search() {
    return this.productService.searchProduct(this.keyword).subscribe(data => (this.products = data));
  }

  removeTteam(id) {
    this.productService.removeProduct(id).subscribe(response => {
      console.log(response);
      this.products = this.products.filter(
        product => product.id != response.id
      );
    });
    alert("Bạn đã xóa thành công!");
  }
}
