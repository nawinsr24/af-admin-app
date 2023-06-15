import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastr: ToastrService) { }
  success(msg: any) {
    this.toastr.success(msg, 'SUCCESS !');
  }
  error(msg: any) {
    this.toastr.error(msg, 'ERROR !');
  }

}
