import { Component, OnInit } from "@angular/core";
import { Product } from "../../Product";
import { ProductService } from "../../product.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.component.html",
  styleUrls: ["./product-add.component.css"]
})
export class ProductAddComponent implements OnInit {
  product: Product = new Product();
  url: String;
  constructor(
  private productService: ProductService,
   private route: Router) {}

  ngOnInit() {}
  addNewProduct() {
    this.productService.addProduct(this.product).subscribe(data => {
      // console.log(data);
       this.route.navigateByUrl('/admin/product');
       });
        alert("Bạn đã thêm thành công!");
  }


 
      
      onSelectFile(event) { // called each time file input changes
      if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]) // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
      this.url = event.target.result;
      
    }

  }
}

}
