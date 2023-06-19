import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIENDPOINTS } from '../../config/apiEndpoint';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {
  }

  public addProduct(data: any) {
    return this.http.post(APIENDPOINTS.product, data)
  }
  public getAllProducts() {
    return this.http.get(APIENDPOINTS.product)
  }


  public addStock(data: any) {
    return this.http.post(APIENDPOINTS.stock, data)
  }
  public getAllStock() {
    return this.http.get(APIENDPOINTS.stock)
  }

}
