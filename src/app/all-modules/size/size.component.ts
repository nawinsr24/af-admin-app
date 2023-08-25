import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CatService } from 'src/app/core/services/cat/cat.service';
import { ToasterService } from 'src/app/core/services/toastr/toaster.service';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css'],
})
export class SizeComponent implements OnInit {
  sizeForm = new FormGroup({
    sizeName: new FormControl('', Validators.required),
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
      size_name: {
        title: 'Size',
        filter: false,
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
    this.catAPI.getAllSize().subscribe((res: any) => {
      console.log(res);
      this.data = res.data;
    });
  }
  addSize() {
    if (this.sizeForm.invalid)
      return this.toaster.error('Enter Valid Details !');
    if (!this.edit) {
      this.catAPI.addSize(this.sizeForm.value).subscribe(
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
    } else {
      this.catAPI.putSize(this.selectedId, this.sizeForm.value).subscribe(
        (res) => {
          this.toaster.success('Size Updated !');
          this.sizeForm.reset();
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
      this.sizeForm.patchValue({
        sizeName: event.data.size_name,
      });
    }
    if (event.action === 'delete') {
      let r = await this.catAPI.deleteItem(
        this.catAPI.deleteSize(event.data.id)
      );
      if (r) this.ngOnInit();
    }
  }

  cancelAll() {
    this.sizeForm.reset();
    this.edit = false;
  }
}
