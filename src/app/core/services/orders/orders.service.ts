import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIENDPOINTS } from '../../config/apiEndpoint';
import { ToasterService } from '../toastr/toaster.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private http: HttpClient, private toaster: ToasterService) {
  }

  public getRequestedOrders() {
    return this.http.get(APIENDPOINTS.requestedOrders)
  }

  public createShipment(data:any){
    return this.http.post(APIENDPOINTS.cerateShipment,data)
  }
}
