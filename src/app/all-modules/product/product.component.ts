import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CatService } from 'src/app/core/services/cat/cat.service';
import { ProductService } from 'src/app/core/services/products/product.service';
import { ToasterService } from 'src/app/core/services/toastr/toaster.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
//   {
//     "product": {
//         "prdName": "Polo Shirt",
//         "tagLine": "shirt 001",
//         "description": "ABC",
//         "clientPrdId": "1232"
//     },
//     "prdCategory": [
//         {
//             "catId": "1",
//             "subCatId": "1"
//         }
//     ]
// }
  productForm = new FormGroup({
    prdName:new FormControl('',Validators.required),
    tagLine: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    clientPrdId: new FormControl(''),
    catId: new FormControl('', Validators.required),
    subCatId: new FormControl('', Validators.required)    
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
  subcategory
  data:any
  constructor(
    private toaster: ToasterService,
    private catAPI: CatService,
    private productAPI:ProductService
  ) { }

  ngOnInit(): void {
    this.catAPI.getAllCategory().subscribe((res: any) => {
      console.log(res);
      this.category = res.data
    })
    this.productAPI.getAllProducts().subscribe((res:any)=>{
      this.data = res.data
    })

  }

  categoryChane(event){
    this.catAPI.getAllSubCategoryUnderCategory(event.target.value).subscribe((res: any) => {
      console.log(res);
      this.subcategory = res.data
    })
  } 
  addProduct() {
    if (this.productForm.invalid) return this.toaster.error('Enter Valid Details !')
    const prdCategory=[{
      catId:this.productForm.value.catId,
      subCatId:this.productForm.value.subCatId
    }]
    delete this.productForm.value.catId
    delete this.productForm.value.subCatId
    const reqBody={
      product:this.productForm.value,
      prdCategory
    }
    this.productAPI.addProduct(reqBody).subscribe(res => {
      this.toaster.success('Product Added !')
      this.productForm.reset()
      document.getElementById('cb').click()
      this.ngOnInit()
    }, err => {
      if (err) this.toaster.error('Not Added !')
    })
  }

  onCustomAction(event: any) {

  }

}
