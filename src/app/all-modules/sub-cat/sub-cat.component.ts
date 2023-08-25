import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { CatService } from 'src/app/core/services/cat/cat.service';
import { FileService } from 'src/app/core/services/file/file.service';
import { ToasterService } from 'src/app/core/services/toastr/toaster.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sub-cat',
  templateUrl: './sub-cat.component.html',
  styleUrls: ['./sub-cat.component.css'],
})
export class SubCatComponent implements OnInit {
  subCategoryForm = new FormGroup({
    categoryId: new FormControl('', Validators.required),
    subCategoryName: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    dummyC: new FormControl(''),
  });
  edit = false;
  selectedId;
  settings = {
    columns: {
      index: {
        title: 'Sl.No',
        filter: false,
        width: '5%',
        valuePrepareFunction: (value: any, row: any, cell: any) => {
          let slNo = cell.row.index + 1;
          return slNo;
        },
      },
      sub_category_name: {
        title: 'Sub Category Name',
        filter: true,
      },
      category_name: {
        title: 'Category Name',
        filter: true,
      },
      description: {
        title: 'Description',
        filter: true,
      },
      image: {
        title: 'Image',
        type: 'html',

        valuePrepareFunction: (value: any, row: any, cell: any) => {
          return this.dom.bypassSecurityTrustHtml(
            `<img  src="${
              environment.imageUrl + value
            }" alt="Image" style="height: 100px;">`
          );
        },
      },
    },
    pager: {
      perPage: 50,
    },
    actions: {
      position: 'right',
      add: false,
      delete: false,
      edit: false,
      custom: [
        {
          class: 'center',
          name: 'edit',
          title:
            '<span class="action-icons view-icon"><i class="fa fa-edit"></i></span>',
        },
        {
          class: 'center',
          name: 'delete',
          title:
            '<span class="action-icons view-icon"><i class="fa fa-trash"></i></span>',
        },
      ],
    },
  };
  category;
  data: any;
  file: any;
  constructor(
    private toaster: ToasterService,
    private catAPI: CatService,
    private fileAPI: FileService,
    private dom: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.edit = false;
    this.file = undefined;
    this.catAPI.getAllCategory().subscribe((res: any) => {
      console.log(res);
      this.category = res.data;
    });
    this.catAPI.getAllSubCategory().subscribe((res: any) => {
      console.log(res);
      this.data = res.data;
    });
  }
  async addSubCategory() {
    if (this.file) {
      let k = await this.singleFileUpload(this.file);
      this.subCategoryForm.patchValue({
        image: k,
      });
    }
    if (this.subCategoryForm.invalid)
      return this.toaster.error('Enter Valid Details !');
    if (!this.edit) {
      this.catAPI.addSubCategory(this.subCategoryForm.value).subscribe(
        (res) => {
          this.toaster.success('Sub Category Added !');
          this.subCategoryForm.reset();
          document.getElementById('cb').click();
          this.ngOnInit();
        },
        (err) => {
          if (err) this.toaster.error('Not Added !');
        }
      );
    } else {
      this.catAPI
        .putSubCat(this.selectedId, this.subCategoryForm.value)
        .subscribe(
          (res) => {
            this.toaster.success('Sub Category Updated !');
            this.subCategoryForm.reset();
            document.getElementById('cb').click();
            this.ngOnInit();
          },
          (err) => {
            if (err) this.toaster.error('Not Updated !');
          }
        );
    }
  }
  imageUploaded(event: any) {
    console.log(event.target.files[0]);
    this.file = event.target.files[0];
  }
  singleFileUpload(file: any) {
    return new Promise((resolve, rejects) => {
      this.fileAPI.uploadImage(file).subscribe((res: any) => {
        console.log(res.data.key);
        resolve(res.data.key);
      });
    });
  }
  async onCustomAction(event: any) {
    console.log(event);
    this.selectedId = event.data.id;
    if (event.action == 'edit') {
      this.edit = true;
      document.getElementById('add-task').click();
      this.subCategoryForm.patchValue({
        categoryId: event.data.category_id,
        subCategoryName: event.data.sub_category_name,
        description: event.data.description,
        image: event.data.image,
      });
    }
    if (event.action === 'delete') {
      let r = await this.catAPI.deleteItem(
        this.catAPI.deleteSubCat(event.data.id)
      );
      if (r) this.ngOnInit();
    }
  }
  cancelAll() {
    this.subCategoryForm.reset();
    this.file = undefined;
    this.edit = false;
  }
}
