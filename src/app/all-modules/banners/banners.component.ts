import { Component, OnInit } from '@angular/core';
import { CatService } from 'src/app/core/services/cat/cat.service';
import { FileService } from 'src/app/core/services/file/file.service';
import { ToasterService } from 'src/app/core/services/toastr/toaster.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit {
  imagesArray: any = []
  draggingIndex: number | null = null;
  copyArray
  deletedImages = []
  constructor(private bannerAPI: CatService, private fileAPI: FileService, private toaster: ToasterService) { }

  ngOnInit(): void {
    this.imagesArray = []

    this.bannerAPI.getBanners().subscribe((res: any) => {
      console.log(res);
      if (res.data.length > 0) {
        res.data.forEach(element => {
          this.imagesArray.push({ url: environment.imageUrl + element.banner_image, key: element.banner_image })

        });
      }
      setTimeout(() => {
        this.copyArray = [...this.imagesArray]

      }, 1000);

    })
  }
  async imagesAdded(event: any) {
    console.log(this.imagesArray);
    [...event.target.files].forEach(async ele => {
      this.imagesArray.push({
        file: ele,
        url: await this.fileToDataURL(ele)
      })
    })

  }
  async fileToDataURL(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const dataURL = event.target.result;
        resolve(dataURL);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  }
  dragStart(event: DragEvent, index: number) {
    this.draggingIndex = index;
    // this.renderer.addClass(event.target, 'dragging');
  }

  dragOver(event: DragEvent) {
    event.preventDefault();
  }

  drop(event: DragEvent, index: number) {
    event.preventDefault();
    if (this.draggingIndex !== null) {
      const movedImage = this.imagesArray[this.draggingIndex];
      this.imagesArray.splice(this.draggingIndex, 1);
      this.imagesArray.splice(index, 0, movedImage);
      this.draggingIndex = null;
      // this.renderer.removeClass(event.target, 'dragging');

    }
  }

  removeImage(i: any) {
    this.deletedImages.push(this.imagesArray[i])

    this.imagesArray.splice(i, 1);
  }

  uploadCancel() { }
  arraysAreEqual(arr1, arr2) {

    return JSON.stringify(arr1) === JSON.stringify(arr2);
  }
  async singleFileUpload(file: any) {
    return new Promise((resolve, rejects) => {
      this.fileAPI.uploadImage(file).subscribe((res: any) => {

        console.log(res.data.key);
        resolve(res.data.key)
      })
    })
  }

  async uploadImages() {
    let Obj = { bannersArray: [] }
    for (let i = 0; i < this.imagesArray.length; i++) {
      const element = this.imagesArray[i];
      let key
      if (element.file)
        key = await this.singleFileUpload(element.file)
      else
        key = element.key

      Obj.bannersArray.push({ banner_image: key, tag_line: '', description: "", arrangement_number: i + 1 })
    }
    this.bannerAPI.addBanners(Obj).subscribe(res => {
      console.log(res);
      this.toaster.success("Uploaded !")
      this.uploadCancel()
      for (let i = 0; i < this.deletedImages.length; i++) {
        const element = this.deletedImages[i];
        if (element.key)
          this.fileAPI.deleteImage(element.key).subscribe(res => {
          })
      }
      this.deletedImages = []
      this.ngOnInit()
    })
  }
}
