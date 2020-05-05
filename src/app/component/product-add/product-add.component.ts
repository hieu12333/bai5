import { Component, OnInit } from "@angular/core";
import { Product } from "../../Product";
import { ProductService } from "../../product.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.component.html",
  styleUrls: ["./product-add.component.css"]
})
export class ProductAddComponent implements OnInit {
  product: Product = new Product();
  url: String;

  registerForm: FormGroup;
  submitted = false;
  constructor(
    private productService: ProductService,
    private route: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      price: ["", [Validators.required, Validators.minLength(3)]],
      desc: ["", [Validators.required, Validators.minLength(5)]],
      img: ["", [Validators.required, Validators.minLength(15)]]
    });
  }
  get f() {
    return this.registerForm.controls;
  }

  addNewProduct() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    alert(" ADD SUCCESS!! :-)");
    this.productService.addProduct(this.product).subscribe(data => {this.route.navigateByUrl("/admin/product");
    });
   
  }
}
