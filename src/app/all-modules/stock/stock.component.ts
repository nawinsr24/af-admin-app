import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CatService } from 'src/app/core/services/cat/cat.service';
import { FileService } from 'src/app/core/services/file/file.service';
import { ProductService } from 'src/app/core/services/products/product.service';
import { ToasterService } from 'src/app/core/services/toastr/toaster.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent implements OnInit {
  //   {
  //     "success": true,
  //     "data": [
  //         {
  //             "id": "56369fab-4c95-432e-a2eb-b14fea2cc79e",
  //             "clientStockId": null,
  //             "product_id": "184759f5-a621-46be-8e69-2e8d7c982063",
  //             "size": 1,
  //             "color_code": "sfsdf",
  //             "available_quantity": 23,
  //             "base_price": "5200.00",
  //             "gst_rate": "20.00",
  //             "total_price": "10000.00",
  //             "created_at": "2023-06-19T15:41:05.000Z",
  //             "updated_at": "2023-06-19T15:41:05.000Z",
  //             "deleted_at": null,
  //             "color": "green",
  //             "size_name": "L"
  //         }
  //     ],
  //     "error": null,
  //     "message": "Success"
  // }
  config = {
    displayFn: (item: any) => {
      return item.name;
    },
    displayKey: 'name',
    search: true,
    height: 'auto', //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
    placeholder: 'Select', // text to be displayed when no item is selected defaults to Select,
    customComparator: () => { }, // a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
    limitTo: 0, // number thats limits the no of options displayed in the UI (if zero, options will not be limited)
    moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: 'No results found!,', // text to be displayed when no items are found while searching
    searchPlaceholder: 'Search', // label thats displayed in search input,
    searchOnKey: 'name', // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
  };

  stockForm = new FormGroup({
    productId: new FormControl('', Validators.required),
    size: new FormControl(''),
    colorCode: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
    availableQty: new FormControl(''),
    basePrice: new FormControl('', Validators.required),
    gstRate: new FormControl('', Validators.required),
    totalPrice: new FormControl('', Validators.required),
    clientStockId: new FormControl('', Validators.required),
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
      clientStockId: {
        title: 'SKU',
        filter: true,
      },
      size_name: {
        title: 'Size',
        filter: true,
      },
      color: {
        title: 'Color',
        filter: true,
      },
      available_quantity: {
        title: 'Available Quantity',
        filter: true,
      },
      base_price: {
        title: 'Base Price',
        filter: true,
      },
      gst_rate: {
        title: 'GST Rate',
        filter: true,
      },
      total_price: {
        title: 'Total Price',
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
        {
          class: 'center',
          name: 'image',
          title:
            '<span class="action-icons view-icon"><i class="fa fa-image"></i></span>',
        },
      ],
    },
  };

  size: any;
  products: any;
  stocks: any;
  selectedStock: any;

  imagesArray = [];
  deletedImages = [];

  draggingIndex: number | null = null;

  edit = false;
  selectedId;
  constructor(
    private renderer: Renderer2,
    private toaster: ToasterService,
    private catAPI: CatService,
    private productAPI: ProductService,
    private fileAPI: FileService
  ) { }

  ngOnInit(): void {
    this.edit = false;

    this.catAPI.getAllSize().subscribe((res: any) => {
      console.log(res);
      this.size = res.data;
    });
    this.productAPI.getAllProducts().subscribe((res: any) => {
      this.products = res.data;
    });

    this.productAPI.getAllStock().subscribe((res: any) => {
      this.stocks = res.data;
    });
  }
  calculateTotal(event: any) {
    let gstRate = parseFloat(event.target.value);
    let basePrice = parseFloat(this.stockForm.value.basePrice);

    let tp = basePrice + (basePrice * gstRate) / 100;

    this.stockForm.patchValue({
      totalPrice: tp ? tp : 0,
    });
  }

  selectionChanged(event) {
    console.log(event);
    this.stockForm.patchValue({
      productId: event.value.id,
    });
  }
  addStock() {
    console.log(this.stockForm.value);

    if (this.stockForm.invalid)
      return this.toaster.error('Enter Valid Details !');
    if (!this.edit) {
      this.productAPI.addStock(this.stockForm.value).subscribe(
        (res) => {
          this.toaster.success('Product Added !');
          this.stockForm.reset();
          console.log(this.stockForm.value
          );
          document.getElementById('cb').click();
          this.ngOnInit();
        },
        (err) => {
          if (err) this.toaster.error('Not Added !');
        }
      );
    } else {
      this.productAPI.putStock(this.selectedId, this.stockForm.value).subscribe(
        (res) => {
          this.toaster.success('Product Updated !');
          this.stockForm.reset();
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
    if (event.action == 'image') {
      this.imagesArray = [];
      document.getElementById('add-image').click();
      this.selectedStock = event.data;
      if (event.data.images.length > 0) {
        event.data.images.forEach((element) => {
          this.imagesArray.push({
            url: environment.imageUrl + element,
            key: element,
          });
        });
      }
    }

    if (event.action == 'edit') {
      this.edit = true;
      document.getElementById('add-task').click();
      setTimeout(() => {
        this.stockForm.patchValue({
          productId: event.data.product_id,
          size: event.data.size,
          colorCode: event.data.color_code,
          color: event.data.color,
          availableQty: event.data.available_quantity,
          basePrice: event.data.base_price,
          gstRate: event.data.gst_rate,
          totalPrice: event.data.total_price,
          clientStockId: event.data.clientStockId,
        });
      }, 800);
    }
    if (event.action === 'delete') {
      let r = await this.catAPI.deleteItem(
        this.productAPI.deleteStock(event.data.id)
      );
      if (r) this.ngOnInit();
    }
  }

  async imagesAdded(event: any) {
    console.log(this.imagesArray);
    [...event.target.files].forEach(async (ele) => {
      this.imagesArray.push({
        file: ele,
        url: await this.fileToDataURL(ele),
      });
    });
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
  uploadCancel() {
    document.getElementById('db').click();
    this.imagesArray = [];
  }

  async uploadImages() {
    let Obj = { imagesArray: [] };
    for (let i = 0; i < this.imagesArray.length; i++) {
      const element = this.imagesArray[i];
      let key;
      if (element.file) key = await this.singleFileUpload(element.file);
      else key = element.key;

      Obj.imagesArray.push({ stock_id: this.selectedStock.id, imgUrl: key });
    }
    this.productAPI.addStockImg(Obj, this.selectedStock.id).subscribe((res) => {
      console.log(res);
      this.toaster.success('Uploaded !');
      this.uploadCancel();
      this.selectedStock = null;
      for (let i = 0; i < this.deletedImages.length; i++) {
        const element = this.deletedImages[i];
        if (element.key)
          this.fileAPI.deleteImage(element.key).subscribe((res) => { });
      }
      this.ngOnInit();
    });
  }
  removeImage(i: any) {
    this.deletedImages.push(this.imagesArray[i]);
    this.imagesArray.splice(i, 1);
  }
  singleFileUpload(file: any) {
    return new Promise((resolve, rejects) => {
      this.fileAPI.uploadImage(file).subscribe((res: any) => {
        console.log(res.data.key);
        resolve(res.data.key);
      });
    });
  }

  cancelAll() {
    this.stockForm.reset();
    this.edit = false;
  }

}
