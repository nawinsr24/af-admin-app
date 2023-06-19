import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CatService } from 'src/app/core/services/cat/cat.service';
import { ToasterService } from 'src/app/core/services/toastr/toaster.service';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css']
})
export class SizeComponent implements OnInit {
  sizeForm = new FormGroup({
    sizeName: new FormControl('', Validators.required),
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
      size_name: {
        title: 'Size',
        filter: false
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
  data
  constructor(
    private toaster: ToasterService,
    private catAPI: CatService,
  ) { }

  ngOnInit(): void {
    this.catAPI.getAllSize().subscribe((res: any) => {
      console.log(res);
      this.data = res.data
    })
  }
  addSize() {
    if (this.sizeForm.invalid) return this.toaster.error('Enter Valid Details !')
    this.catAPI.addSize(this.sizeForm.value).subscribe(res => {
      this.toaster.success('Size Added !')
      this.sizeForm.reset()
      document.getElementById('cb').click()
      this.ngOnInit()
    }, err => {
      if (err) this.toaster.error('Not Added !')
    })
  }
  onCustomAction(event: any) {

  }
}
