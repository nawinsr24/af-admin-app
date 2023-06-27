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

  public addStockImg(data: any, id: any) {
    return this.http.post(APIENDPOINTS.stockImage + id, data)

  }

  public addLabel(data: any) {
    return this.http.post(APIENDPOINTS.stockType, data)
  }
  public getLabels() {
    return this.http.get(APIENDPOINTS.stockType)
  }
  public deleteLabel(id: any) {
    return this.http.delete(APIENDPOINTS.stockType + `/${id}`)
  }
  public addDiscount(data: any) {
    return this.http.post(APIENDPOINTS.discount, data)
  }

  public getDiscount() {
    return this.http.get(APIENDPOINTS.discount)
  }
  public deleteDiscount(id:any) {
    return this.http.delete(APIENDPOINTS.discount + `/${id}`)
  }

}
