import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CatService } from 'src/app/core/services/cat/cat.service';
import { ToasterService } from 'src/app/core/services/toastr/toaster.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categoryForm = new FormGroup({
    categoryName: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });
  edit = false;
  selectedId: any;
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
        filter: true,
      },
      description: {
        title: 'Description',
        filter: true,
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
  data;
  constructor(private toaster: ToasterService, private catAPI: CatService) {}

  ngOnInit(): void {
    this.edit = false;
    this.catAPI.getAllCategory().subscribe((res: any) => {
      console.log(res);
      this.data = res.data;
    });
  }
  addCategory() {
    if (this.categoryForm.invalid)
      return this.toaster.error('Enter Valid Details !');
    if (!this.edit) {
      this.catAPI.addCategory(this.categoryForm.value).subscribe(
        (res) => {
          this.toaster.success('Category Added !');
          this.categoryForm.reset();
          document.getElementById('cb').click();
          this.ngOnInit();
        },
        (err) => {
          if (err) this.toaster.error('Not Added !');
        }
      );
    } else {
      this.catAPI
        .editCategory(this.selectedId, this.categoryForm.value)
        .subscribe(
          (res) => {
            this.toaster.success('Category Updated !');
            this.categoryForm.reset();
            document.getElementById('cb').click();
            this.ngOnInit();
          },
          (err) => {
            if (err) this.toaster.error('Not Updated !');
          }
        );
    }
  }
  async onCustomAction(event: any) {
    console.log(event);
    this.selectedId = event.data.id;
    if (event.action == 'edit') {
      this.edit = true;
      document.getElementById('add-task').click();
      this.categoryForm.patchValue({
        categoryName: event.data.category_name,
        description: event.data.description,
      });
    }
    if (event.action === 'delete') {
      let r = await this.catAPI.deleteItem(
        this.catAPI.deleteCategory(event.data.id)
      );
      if (r) this.ngOnInit();
    }
  }

  cancelAll() {
    this.categoryForm.reset();
    this.edit = false;
  }
}
