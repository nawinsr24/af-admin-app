import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CatService } from 'src/app/core/services/cat/cat.service';
import { OrdersService } from 'src/app/core/services/orders/orders.service';
import { ToasterService } from 'src/app/core/services/toastr/toaster.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order-requests',
  templateUrl: './order-requests.component.html',
  styleUrls: ['./order-requests.component.css'],
})
export class OrderRequestsComponent implements OnInit {
  //   {
  //     "id": 33,
  //     "user_id": 14,
  //     "order_date": null,
  //     "order_status": "pending",
  //     "tracking_id": null,
  //     "house_flat_no": "4/444",
  //     "area": "thuraipakkam",
  //     "city": "chennai city",
  //     "state": "tamil nadu state",
  //     "pincode": "9000043",
  //     "delivery_mobile_1": "990090909",
  //     "delivery_mobile_2": "9898989898989",
  //     "delivery_name": "Arun 2",
  //     "address_type": "address type",
  //     "delivery_charge": null,
  //     "total_discount": "0.00",
  //     "base_total": "4500.00",
  //     "gst_total": "14.21",
  //     "total": "5130.00",
  //     "gross_total": "0.00",
  //     "created_at": "2023-08-08T06:59:58.000Z",
  //     "updated_at": "2023-08-08T06:59:58.000Z",
  //     "deleted_at": null,
  //     "payment_id": 1,
  //     "payment_type": "cod",
  //     "transaction_id": "",
  //     "payment_status": "pending",
  //     "order_stock": [
  //         {
  //             "gst_rate": 14.21,
  //             "order_id": 33,
  //             "quantity": null,
  //             "stock_id": "6d425b07-496c-46e1-b107-fe011d45b471",
  //             "base_price": 4500,
  //             "total_price": 5130,
  //             "discount_percentage": null
  //         }
  //     ]
  // }
  stocksInOrder: any;
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
      id: {
        title: 'Order Id',
        filter: true,
      },
      user_id: {
        title: 'User Id',
        filter: true,
      },
      order_date: {
        title: 'Order Date',
        filter: true,
      },
      order_status: {
        title: 'Order Status',
        filter: true,
      },
      tracking_id: {
        title: 'Tracking Id',
        filter: true,
      },
      house_flat_no: {
        title: 'House/Flat No',
        filter: true,
      },
      area: {
        title: 'Area',
        filter: true,
      },
      city: {
        title: 'City',
        filter: true,
      },
      state: {
        title: 'State',
        filter: true,
      },
      pincode: {
        title: 'Pincode',
        filter: true,
      },
      delivery_mobile_1: {
        title: 'Delivery Mobile 1',
        filter: true,
      },
      delivery_mobile_2: {
        title: 'Delivery Mobile 2',
        filter: true,
      },
      delivery_name: {
        title: 'Delivery Name',
        filter: true,
      },
      address_type: {
        title: 'Address Type',
        filter: true,
      },
      delivery_charge: {
        title: 'Delivery Charge',
        filter: true,
      },
      total_discount: {
        title: 'Total Discount',
        filter: true,
      },
      base_total: {
        title: 'Base Total',
        filter: true,
      },
      gst_total: {
        title: 'GST Total',
        filter: true,
      },
      total: {
        title: 'Total',
        filter: true,
      },
      gross_total: {
        title: 'Gross Total',
        filter: true,
      },
      created_at: {
        title: 'Requested At',
        filter: true,
      },

      payment_id: {
        title: 'Payment Id',
        filter: true,
      },
      payment_type: {
        title: 'Payment Type',
        filter: true,
      },
      transaction_id: {
        title: 'Transaction Id',
        filter: true,
      },
      payment_status: {
        title: 'Payment Status',
        filter: true,
      },
    },
    pager: {
      perPage: 50,
    },
    actions: {
      position: 'left',
      add: false,
      delete: false,
      edit: false,
      custom: [
        {
          class: 'center',
          name: 'cart',
          title:
            '<span class="action-icons view-icon"><i class="fa fa-shopping-cart"></i></span>',
        },
        {
          class: 'center',
          name: 'next',
          title:
            '<span class="action-icons view-icon"><i class="fa fa-arrow-circle-right"></i></span>',
        },
      ],
    },
  };

  data;
  constructor(private toaster: ToasterService, private API: OrdersService) {}

  ngOnInit(): void {
    this.API.getRequestedOrders().subscribe((res: any) => {
      console.log(res);
      this.data = res.data;
    });
  }

  async onCustomAction(event: any) {
    if (event.action == 'cart') {
      this.stocksInOrder = event.data.order_stock;
      document.getElementById('add-task').click();
    }
    if (event.action == 'next') {
      let reqBody = await this.prepareDataforShipment(event.data);
      let stringBody = {
        data: 'format=json&data=' + JSON.stringify(reqBody),
        order_id: event.data.id,
      };
      console.log(stringBody);
      Swal.fire({
        title: 'Are you sure?',
        text: 'Want to create Shipment !',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, I Confirm!',
        cancelButtonText: 'No, cancel',
      }).then((result) => {
        if (result.isConfirmed) {
          this.API.createShipment(stringBody).subscribe(
            (res) => {
              this.toaster.success('Shipment Created !,');
            },
            (err) => {
              this.toaster.success('Shipment Not Created !,');
            }
          );
        }
      });
    }
  }

  //   {
  //     "id": 33,
  //     "user_id": 14,
  //     "order_date": null,
  //     "order_status": "pending",
  //     "tracking_id": null,
  //     "house_flat_no": "4/444",
  //     "area": "thuraipakkam",
  //     "city": "chennai city",
  //     "state": "tamil nadu state",
  //     "pincode": "9000043",
  //     "delivery_mobile_1": "990090909",
  //     "delivery_mobile_2": "9898989898989",
  //     "delivery_name": "Arun 2",
  //     "address_type": "address type",
  //     "delivery_charge": null,
  //     "total_discount": "0.00",
  //     "base_total": "4500.00",
  //     "gst_total": "14.21",
  //     "total": "5130.00",
  //     "gross_total": "0.00",
  //     "created_at": "2023-08-08T06:59:58.000Z",
  //     "updated_at": "2023-08-08T06:59:58.000Z",
  //     "deleted_at": null,
  //     "payment_id": 1,
  //     "payment_type": "cod",
  //     "transaction_id": "",
  //     "payment_status": "pending",
  //     "order_stock": [
  //         {
  //             "gst_rate": 14.21,
  //             "order_id": 33,
  //             "quantity": null,
  //             "stock_id": "6d425b07-496c-46e1-b107-fe011d45b471",
  //             "base_price": 4500,
  //             "total_price": 5130,
  //             "discount_percentage": null
  //         }
  //     ]
  // }
  async prepareDataforShipment(data: any) {
    return {
      pickup_location: {
        add: 'No: 275, Pycrofts Road, Triplicane, Chennai - 600005 , Chennai, Tamil Nadu ,India 600005',
        country: 'India',
        pin: '600005',
        phone: '9444258767',
        city: 'Chennai',
        name: 'SF MYTHREI 0108542',
        state: 'Tamil nadu',
      },
      shipments: [
        {
          country: 'India',
          city: data.city,
          seller_add: '',
          cod_amount: data.payment_type == 'cod' ? data.total : 0,
          return_phone: data.delivery_mobile_1,
          seller_inv_date: '',
          seller_name: '',
          pin: data.pincode,
          seller_inv: '',
          state: data.state,
          return_name: data.delivery_name,
          order: data.id,
          add: `${data.house_flat_no},${data.area},${data.city},${data.state},${data.pincode}`,
          payment_mode: data.payment_type == 'cod' ? 'COD' : 'Prepaid',
          quantity: '1',
          return_add: `${data.house_flat_no},${data.area},${data.city},${data.state},${data.pincode}`,
          seller_cst: '',
          seller_tin: '',
          phone: '9603304294',
          total_amount: data.total,
          name: data.delivery_name,
          return_country: 'India',
          return_city: data.city,
          return_state: data.state,
          return_pin: data.pincode,
        },
      ],
    };
  }
}
// format=json&data={
//   "pickup_location": {
//       "add": "Unit No 7, Plot No 71E to T, GOVERNMENT INDUSTRIAL ESTATE, Behind Garuda Petrol Pump, Charkop, KANDIVALI WEST,Mumbai, Maharashtra, ",
//       "country": "India",
//       "pin": "600005",
//       "phone": "7774855283",
//       "city": "Mumbai",
//       "name": "BRILLARE SURFACE",
//       "state": "Maharastra"
//   },
//   "shipments": [
//       {
//           "country": "India",
//           "city": "Kohima",
//           "seller_add": "",
//           "cod_amount": "0",
//           "return_phone": "7774855283",
//           "seller_inv_date": "",
//           "seller_name": "",
//           "pin": "797001",
//           "seller_inv": "",
//           "state": "Nagaland",
//           "return_name": "Unit No 7,GOVERNMENT INDUSTRIAL ESTATE",
//           "order": "528323",
//           "add": "MRH- C 113, Ward no - 18. Below Sumi Church, Merhulietsa School Road",
//           "payment_mode": "Prepaid",
//           "quantity": "1",
//           "return_add": "Unit No 7, Plot No 71E to T, GOVERNMENT INDUSTRIAL ESTATE, Behind Garuda Petrol Pump, Charkop, KANDIVALI WEST,Mumbai, Maharashtra, ",
//           "seller_cst": "",
//           "seller_tin": "",
//           "phone": "9603304294",
//           "total_amount": "750",
//           "name": "Asen  Jamir",
//           "return_country": "India",
//           "return_city": "Mumbai",
//           "return_state": "Maharastra",
//           "return_pin": "400067"
//       }

//   ]
// }

// {
//   "cash_pickups_count": 0.0,
//   "package_count": 1,
//   "upload_wbn": "UPL11731599169335871361",
//   "replacement_count": 0,
//   "pickups_count": 0,
//   "packages": [
//       {
//           "status": "Success",
//           "client": "SF MYTHREI 0108542",
//           "sort_code": "TRC/NVH",
//           "remarks": [
//               ""
//           ],
//           "waybill": "12358110002914",
//           "cod_amount": 0.0,
//           "payment": "Pre-paid",
//           "serviceable": true,
//           "refnum": "89"
//       }
//   ],
//   "cash_pickups": 0.0,
//   "cod_count": 0,
//   "success": true,
//   "prepaid_count": 1,
//   "cod_amount": 0.0
// }
