import { Injectable } from "@angular/core";
import { Product } from "./Product";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ProductService {
  api = "https://5e79b9dc17314d001613350c.mockapi.io/product1";
  constructor(private http: HttpClient) {}

  getProduct(id): Observable<Product> {
    return this.http.get<Product>(`${this.api}/${id}`);
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
  }
  updateProduct(product): Observable<Product> {
    return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }
  addProduct(product): Observable<Product> {
    return this.http.post<Product>(`${this.api}`, product);
  }
  removeProduct(id): Observable<Product> {
    return this.http.delete<Product>(`${this.api}/${id}`);
  }
}
