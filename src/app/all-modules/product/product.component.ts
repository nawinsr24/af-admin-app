import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CatService } from 'src/app/core/services/cat/cat.service';
import { ProductService } from 'src/app/core/services/products/product.service';
import { ToasterService } from 'src/app/core/services/toastr/toaster.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productForm = new FormGroup({
    prdName: new FormControl('', Validators.required),
    tagLine: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    clientPrdId: new FormControl(''),
    catId: new FormControl('', Validators.required),
    subCatId: new FormControl('', Validators.required),
  });

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
      name: {
        title: 'Product Name',
        filter: true,
      },
      tag_line: {
        title: 'Tag Line',
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
  category;
  subcategory;
  products: any;
  edit = false;
  selectedId;
  constructor(
    private toaster: ToasterService,
    private catAPI: CatService,
    private productAPI: ProductService
  ) {}

  ngOnInit(): void {
    this.edit = false;
    this.catAPI.getAllCategory().subscribe((res: any) => {
      console.log(res);
      this.category = res.data;
    });
    this.productAPI.getAllProducts().subscribe((res: any) => {
      this.products = res.data;
    });
  }

  categoryChane(event) {
    console.log(event);

    this.catAPI
      .getAllSubCategoryUnderCategory(event.target.value)
      .subscribe((res: any) => {
        console.log(res);
        this.subcategory = res.data;
      });
  }
  addProduct() {
    if (this.productForm.invalid)
      return this.toaster.error('Enter Valid Details !');
    const prdCategory = [
      {
        catId: this.productForm.value.catId,
        subCatId: this.productForm.value.subCatId,
      },
    ];
    delete this.productForm.value.catId;
    delete this.productForm.value.subCatId;
    const reqBody = {
      product: this.productForm.value,
      prdCategory,
    };
    if (!this.edit) {
      this.productAPI.addProduct(reqBody).subscribe(
        (res) => {
          this.toaster.success('Product Added !');
          this.productForm.reset();
          document.getElementById('cb').click();
          this.ngOnInit();
        },
        (err) => {
          if (err) this.toaster.error('Not Added !');
        }
      );
    } else {
      this.productAPI.putProduct(this.selectedId,reqBody).subscribe(
        (res) => {
          this.toaster.success('Product Updated !');
          this.productForm.reset();
          document.getElementById('cb').click();
          this.ngOnInit();
        },
        (err) => {
          if (err) this.toaster.error('Not Updated !');
        }
      );
    }
  }
  //   {
  //     "id": "e899b78b-fb4c-47e6-9825-a99d09b76196",
  //     "name": "wdfwe",
  //     "tag_line": "fewrfwef",
  //     "description": "dfgsdgsd",
  //     "client_prdid": "",
  //     "created_at": "2023-08-25T02:05:58.000Z",
  //     "updated_at": "2023-08-25T02:05:58.000Z",
  //     "deleted_at": null
  // }
  async onCustomAction(event: any) {
    console.log(event);
    this.selectedId = event.data.id;
    if (event.action == 'edit') {
      this.categoryChane({ target: { value: event.data.cat_id } });
      this.edit = true;
      document.getElementById('add-task').click();
      setTimeout(() => {
        this.productForm.patchValue({
          prdName: event.data.name,
          tagLine: event.data.tag_line,
          description: event.data.description,
          clientPrdId: event.data.client_prdid,
          catId: event.data.cat_id,
          subCatId: event.data.sub_cat_id,
        });
      }, 800);
    }
    if (event.action === 'delete') {
      let r = await this.catAPI.deleteItem(
        this.productAPI.deleteProduct(event.data.id)
      );
      if (r) this.ngOnInit();
    }
  }

  cancelAll() {
    this.productForm.reset();
    this.edit = false;
  }
}
