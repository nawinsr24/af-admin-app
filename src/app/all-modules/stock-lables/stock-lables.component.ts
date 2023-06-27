import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CatService } from 'src/app/core/services/cat/cat.service';
import { ProductService } from 'src/app/core/services/products/product.service';
import { ToasterService } from 'src/app/core/services/toastr/toaster.service';

@Component({
  selector: 'app-stock-lables',
  templateUrl: './stock-lables.component.html',
  styleUrls: ['./stock-lables.component.css']
})
export class StockLablesComponent implements OnInit {

  config = {
    displayFn: (item: any) => { return item.clientStockId; },
    displayKey: "clientStockId",
    search: true,
    height: 'auto', //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
    placeholder: 'Select', // text to be displayed when no item is selected defaults to Select,
    customComparator: () => { }, // a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
    limitTo: 0, // number thats limits the no of options displayed in the UI (if zero, options will not be limited)
    moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: 'No results found!,', // text to be displayed when no items are found while searching
    searchPlaceholder: 'Search', // label thats displayed in search input,
    searchOnKey: 'name' // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
  }
  labelForm = new FormGroup({
    type: new FormControl('', Validators.required),
    stock_id: new FormControl('', Validators.required)

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
      clientStockId: {
        title: 'SKU',
        filter: false
      },
      type: {
        title: 'Label',
        filter: false,
        valuePrepareFunction: (value: any, row: any, cell: any) => {
          return value.replace(/_/g, ' ').toLowerCase();
        },
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
          name: 'delete', title: '<span class="action-icons view-icon"><i class="fa fa-trash"></i></span>'
        }
      ]
    }
  };
  data
  stocks: any
  constructor(
    private toaster: ToasterService,
    private productAPI: ProductService,
    private swal: CatService
  ) { }

  ngOnInit(): void {
    this.stocks = []
  let  dummy=[]
    this.productAPI.getAllStock().subscribe((res: any) => {
      this.productAPI.getLabels().subscribe((res1: any) => {
        this.data = [...res1.data]
        console.log(res);
        console.log(res1);

        for (let i = 0; i < res.data.length; i++) {
          const element = res.data[i];
          console.log(element);
          let found = false
          for (let j = 0; j < res1.data.length; j++) {
            const element1 = res1.data[j];
            console.log(element1);
            if (element.id == element1.stock_id) {
              found = true
            }

          }

          console.log(found);
          found == false ? dummy.push(element) : null
          
          console.log(this.stocks);
          


        }
        this.stocks=[...dummy]

      })
    })

  }

  selectionChanged(event: any) {
    console.log(event);

    this.labelForm.patchValue({
      stock_id: event.value.id
    })
  }

  addLabel() {
    console.log(this.labelForm);

    if (this.labelForm.invalid) return this.toaster.error('Enter Valid Details !')
    this.productAPI.addLabel(this.labelForm.value).subscribe(res => {
      this.toaster.success("Label Added !")
      this.labelForm.reset()
      this.ngOnInit()
      document.getElementById('cb').click()
    }, err => {
      this.toaster.error("Label Not Added !")

    })
  }
  async onCustomAction(event: any) {
    if (event.action == 'delete') {
      let r = await this.swal.deleteItem(this.productAPI.deleteLabel(event.data.id))
      console.log(r);
      if (r) this.ngOnInit()

    }
  }
}
