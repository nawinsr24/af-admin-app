import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIENDPOINTS } from '../../config/apiEndpoint';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  constructor(private http: HttpClient) {
  }

  public uploadImage(file: any) {

    var formdata = new FormData();
    formdata.append("image", file, file.name);

    return this.http.post(APIENDPOINTS.s3Uplaod, formdata)
  }
  public deleteImage(key: any) {
    return this.http.delete(APIENDPOINTS.s3Delete + key)
  }
}