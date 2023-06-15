import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CatService } from 'src/app/core/services/cat/cat.service';
import { ToasterService } from 'src/app/core/services/toastr/toaster.service';

@Component({
  selector: 'app-sub-cat',
  templateUrl: './sub-cat.component.html',
  styleUrls: ['./sub-cat.component.css']
})
export class SubCatComponent implements OnInit {
  subCategoryForm = new FormGroup({
    categoryId:new FormControl('',Validators.required),
    subCategoryName: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  })
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
        filter: true
      },
      category_name: {
        title: 'Category Name',
        filter: true
      },
      description: {
        title: 'Description',
        filter: true
      }
    },
    pager:
    {
      perPage: 8
    },
    actions: {
      position: 'right',
      add: false,
      delete: false,
      edit: false,
      custom: [
  
        {
          class: 'center',
          name: 'edit', title: '<span class="action-icons view-icon"><i class="fa fa-edit"></i></span>'
        },
        {
          class: 'center',
          name: 'edit', title: '<span class="action-icons view-icon"><i class="fa fa-trash"></i></span>'
        }
      ]
    }
  };
  category
  data:any
  constructor(
    private toaster: ToasterService,
    private catAPI: CatService,
  ) { }

  ngOnInit(): void {
    this.catAPI.getAllCategory().subscribe((res: any) => {
      console.log(res);
      this.category = res.data
    })
    this.catAPI.getAllSubCategory().subscribe((res: any) => {
      console.log(res);
      this.data = res.data
    })
  }
  addSubCategory() {
    if (this.subCategoryForm.invalid) return this.toaster.error('Enter Valid Details !')
    this.catAPI.addSubCategory(this.subCategoryForm.value).subscribe(res => {
      this.toaster.success('Sub Category Added !')
      this.subCategoryForm.reset()
      document.getElementById('cb').click()
      this.ngOnInit()
    }, err => {
      if (err) this.toaster.error('Not Added !')
    })
  }

  onCustomAction(event: any) {

  }

}
