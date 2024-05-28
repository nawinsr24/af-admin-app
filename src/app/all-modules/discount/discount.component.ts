import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CatService } from 'src/app/core/services/cat/cat.service';
import { ProductService } from 'src/app/core/services/products/product.service';
import { ToasterService } from 'src/app/core/services/toastr/toaster.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css'],
})
export class DiscountComponent implements OnInit {
  //   {
  //     "id": "6649d00c-b428-46af-aa2d-e398baff54b8",
  //     "clientStockId": "pink-choli",
  //     "product_id": "9c6796c1-6ffe-4f7c-9f58-0a8eaabee5f8",
  //     "size": 1,
  //     "color_code": "#f76e6e",
  //     "available_quantity": 100,
  //     "base_price": "2000.00",
  //     "gst_rate": "14.00",
  //     "total_price": "2280.00",
  //     "created_at": "2023-06-22T11:16:04.000Z",
  //     "updated_at": "2023-06-22T11:16:04.000Z",
  //     "deleted_at": null,
  //     "color": "pink",
  //     "size_name": "S",
  //     "images": [
  //         "images/1687452389755-6-7-years-amfrfhsrw-amirtha-fashion-original-imafveh3xw3zkgft.webp",
  //         "images/1687452389906-8-9-years-amfrfhsrw-amirtha-fashion-original-imafveh3srhayfvg.webp"
  //     ]
  // }

  config = {
    displayFn: (item: any) => {
      return item.clientStockId;
    },
    displayKey: 'clientStockId',
    search: true,
    height: 'auto', //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
    placeholder: 'Select', // text to be displayed when no item is selected defaults to Select,
    customComparator: () => {}, // a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
    limitTo: 0, // number thats limits the no of options displayed in the UI (if zero, options will not be limited)
    moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: 'No results found!,', // text to be displayed when no items are found while searching
    searchPlaceholder: 'Search', // label thats displayed in search input,
    searchOnKey: 'name', // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
  };
  sizeForm = new FormGroup({
    stock_id: new FormControl('', Validators.required),
    discount_percentage: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?:\d|([1-9]\d)|99)$/),
    ]),
    start_period: new FormControl('', Validators.required),
    end_period: new FormControl('', Validators.required),
  });

  settings = {
    columns: {
      index: {
        title: 'Sl.No',
        filter: true,
        width: '5%',
        valuePrepareFunction: (value: any, row: any, cell: any) => {
          let slNo = cell.row.index + 1;
          return slNo;
        },
      },
      clientStockId: {
        title: 'SKU',
        filter: true,
      },
      discount_percentage: {
        title: 'Discount Rate',
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
        // {
        //   class: 'center',
        //   name: 'edit', title: '<span class="action-icons view-icon"><i class="fa fa-edit"></i></span>'
        // },
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
  stocks: any;
  bp = 0;
  gst = 0;
  tp = 0;
  dp = 0;
  gp = 0;
  constructor(
    private toaster: ToasterService,
    private productAPI: ProductService,
    private swal: CatService,
    private datepipe: DatePipe
  ) {}

  ngOnInit(): void {
    let d = this.datepipe.transform(new Date(Date.now()), 'yyyy-MM-dd');
    this.sizeForm.patchValue({
      start_period: d,
      end_period: d,
    });
    this.productAPI.getAllStock().subscribe((res: any) => {
      this.stocks = res.data;
    });
    this.productAPI.getDiscount().subscribe((res: any) => {
      console.log(res);
      this.data = res.data;
    });
  }

  selectionChanged(event: any) {
    this.sizeForm.patchValue({
      stock_id: event.value.id,
    });
    console.log(event.value);
    this.bp = event.value.base_price;
    this.gst = event.value.gst_rate;
    this.tp = event.value.total_price;
  }
  addDiscount() {
    if (this.sizeForm.invalid)
      return this.toaster.error('Enter Valid Details !');
    this.productAPI.addDiscount({ discounts: [this.sizeForm.value] }).subscribe(
      (res) => {
        this.toaster.success('Size Added !');
        this.sizeForm.reset();
        document.getElementById('cb').click();
        this.ngOnInit();
      },
      (err) => {
        if (err) this.toaster.error('Not Added !');
      }
    );
  }
  discountCalculation(event: any) {
    if (event.target.value > 99)
      return this.toaster.error('Invalid Discount !');
    this.dp = this.bp * (event.target.value / 100);
    let base = this.bp - this.dp;
    console.log(base);
    let total_price = base + (base * this.gst) / 100;
    console.log(total_price);
    this.tp = total_price;
    this.gp = (base * this.gst) / 100;
  }
  reset() {
    this.sizeForm.reset();
  }
  async onCustomAction(event: any) {
    if (event.action == 'edit') {
      // this.sizeForm.patchValue()
    }
    if (event.action == 'delete') {
      let r = await this.swal.deleteItem(
        this.productAPI.deleteDiscount(event.data.id)
      );
      if (r) this.ngOnInit();
    }
  }

  resetAll(){
    this.sizeForm.reset()
    this.ngOnInit()
  }
}
