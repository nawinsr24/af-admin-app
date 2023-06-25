import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CatService } from 'src/app/core/services/cat/cat.service';
import { ToasterService } from 'src/app/core/services/toastr/toaster.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryForm = new FormGroup({
    categoryName: new FormControl('', Validators.required),
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
          name: 'delete', title: '<span class="action-icons view-icon"><i class="fa fa-trash"></i></span>'
        }
      ]
    }
  };
  data
  constructor(
    private toaster: ToasterService,
    private catAPI: CatService,
  ) { }

  ngOnInit(): void {
    this.catAPI.getAllCategory().subscribe((res: any) => {
      console.log(res);
      this.data = res.data
    })
  }
  addCategory() {
    if (this.categoryForm.invalid) return this.toaster.error('Enter Valid Details !')
    this.catAPI.addCategory(this.categoryForm.value).subscribe(res => {
      this.toaster.success('Category Added !')
      this.categoryForm.reset()
      document.getElementById('cb').click()
      this.ngOnInit()
    }, err => {
      if (err) this.toaster.error('Not Added !')
    })
  }
  onCustomAction(event: any) {
    console.log(event);

    if (event.action === 'delete') {
      this.catAPI.deleteItem().then((result) => {
        if (result.isConfirmed) {

          // this.catAPI.deleteCategory()
          Swal.fire(
            'Deleted!',
            'Your item has been deleted.',
            'success'
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {

        }
      });

    }

  }
}
