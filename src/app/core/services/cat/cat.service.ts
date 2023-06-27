import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIENDPOINTS } from '../../config/apiEndpoint';
import Swal from 'sweetalert2';
import { ToasterService } from '../toastr/toaster.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient, private toaster: ToasterService) {
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
  public getAllSubCategoryUnderCategory(id: any) {
    return this.http.get(APIENDPOINTS.subCategory + `?categoryId=${id}`)
  }
  public addSize(data: any) {
    return this.http.post(APIENDPOINTS.size, data)
  }
  public getAllSize() {
    return this.http.get(APIENDPOINTS.size)
  }

  public addBanners(data: any) {
    return this.http.post(APIENDPOINTS.banner, data)
  }
  public getBanners() {
    return this.http.get(APIENDPOINTS.banner)
  }

  deleteItem(callBack: Observable<any>) {
    return new Promise((resolve,rejects)=>{
       Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this item!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel',
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(callBack);
          
          callBack.subscribe(
            (res) => {
              // this.catAPI.deleteCategory()
              Swal.fire(
                'Deleted!',
                'Your item has been deleted.',
                'success'
              ).then(res=>{
                resolve(true)
              })
            },
            (err) => {
              if (err) {
                this.toaster.error('Not Completed!');
              }
            }
          );
    
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // Handle cancel logic if needed
        }
      });
    })
  
  }
  

}
