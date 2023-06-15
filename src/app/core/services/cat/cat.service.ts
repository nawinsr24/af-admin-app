import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIENDPOINTS } from '../../config/apiEndpoint';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) {
  }

  public addCategory(data: any) {
    return this.http.post(APIENDPOINTS.category, data)
  }
  public getAllCategory() {
    return this.http.get(APIENDPOINTS.category)
  }
  public editCategory(id: any, data: any) {
    return this.http.put(APIENDPOINTS.category + '/' + id, data)
  }
  public deleteCategory(id: any) {
    return this.http.delete(APIENDPOINTS.category + '/' + id)
  }

  public addSubCategory(data: any) {
    return this.http.post(APIENDPOINTS.subCategory, data)
  }
  public getAllSubCategory() {
    return this.http.get(APIENDPOINTS.subCategory)
  }
  public getAllSubCategoryUnderCategory(id:any) {
    return this.http.get(APIENDPOINTS.subCategory+`?categoryId=${id}`)
  }
}
