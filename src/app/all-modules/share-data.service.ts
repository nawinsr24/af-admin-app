import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ShareDataService {
  private _listners = new Subject<any>();

  listen(): Observable<any> {
    return this._listners.asObservable();
  }

  filter(filterBy: any) {
    this._listners.next(filterBy);
  }
  invoicesList = [
    {
      id: "INV001",
      category: "Software",
      createdOn: "16 June 2022",
      invoiceto: "Barbara Moore",
      amount:"$5200",
      dueDate:"23 June 2022",
      status:"Paid",
      img:"assets/img/profiles/avatar-04.jpg"
    },
    {
      id: "INV002",
      category: "Food",
      createdOn: "18 June 2022",
      invoiceto: "Karlene Chaidez",
      amount:"$3800",
      dueDate:"24 June 2022",
      status:"Overdue",
      img:"assets/img/profiles/avatar-06.jpg"
    },
    {
      id: "INV003",
      category: "Marketing",
      createdOn: "20 June 2022",
      invoiceto: "Russell Copeland",
      amount:"$1800",
      dueDate:"26 June 2022",
      status:"Cancelled",
      img:"assets/img/profiles/avatar-08.jpg"    
    },
    {
      id: "INV004",
      category: "Repairs",
      createdOn: "21 June 2022",
      invoiceto: "Joseph Collins",
      amount:"$4800",
      dueDate:"28 June 2022",
      status:"Paid",
      img:"assets/img/profiles/avatar-10.jpg"
    },
    {
      id: "INV005",
      category: "Software",
      createdOn: "23 June 2022",
      invoiceto: "Jennifer Floyd",
      amount:"$6200",
      dueDate:"30 June 2022",
      status:"Overdue",
      img:"assets/img/profiles/avatar-11.jpg"
    },
    {
      id: "INV006",
      category: "Repairs",
      createdOn: "26 June 2022",
      invoiceto: "Leatha Bailey",
      amount:"$3200",
      dueDate:"30 June 2022",
      status:"Paid",
      img:"assets/img/profiles/avatar-09.jpg"
    },
    {
      id: "INV007",
      category: "Food",
      createdOn: "27 June 2022",
      invoiceto: "Alex Canpbell",
      amount:"$4300",
      dueDate:"30 June 2022",
      status:"Cancelled",
      img:"assets/img/profiles/avatar-12.jpg"
    },
    {
      id: "INV008",
      category: "Marketing",
      createdOn: "30 June 2022",
      invoiceto: "Marie Canales",
      amount:"$6200",
      dueDate:"05 July 2022",
      status:"Paid",
      img:"assets/img/profiles/avatar-03.jpg"
    },
  ]
  paidInvoices = [
    {
      id: "INV001",
      category: "Software",
      createdOn: "16 June 2022",
      invoiceto: "Barbara Moore",
      amount:"$5200",
      paidOn:"23 June 2022",
      status:"Paid"
    },
    {
      id: "INV002",
      category: "Food",
      createdOn: "18 June 2022",
      invoiceto: "Karlene Chaidez",
      amount:"$3800",
      paidOn:"24 June 2022",
      status:"Paid"
    },
    {
      id: "INV003",
      category: "Marketing",
      createdOn: "20 June 2022",
      invoiceto: "Russell Copeland",
      amount:"$1800",
      paidOn:"26 June 2022",
      status:"Paid"
    },
    {
      id: "INV004",
      category: "Repairs",
      createdOn: "21 June 2022",
      invoiceto: "Joseph Collins",
      amount:"$4800",
      paidOn:"28 June 2022",
      status:"Paid"
    },
    {
      id: "INV005",
      category: "Software",
      createdOn: "23 June 2022",
      invoiceto: "Jennifer Floyd",
      amount:"$6200",
      paidOn:"30 June 2022",
      status:"Paid"
    },
    {
      id: "INV006",
      category: "Repairs",
      createdOn: "26 June 2022",
      invoiceto: "Leatha Bailey",
      amount:"$3200",
      paidOn:"30 June 2022",
      status:"Paid"
    },
    {
      id: "INV007",
      category: "Food",
      createdOn: "27 June 2022",
      invoiceto: "Alex Canpbell",
      amount:"$4300",
      paidOn:"30 June 2022",
      status:"Paid"
    },
    {
      id: "INV008",
      category: "Marketing",
      createdOn: "30 June 2022",
      invoiceto: "Marie Canales",
      amount:"$6200",
      paidOn:"05 July 2022",
      status:"Paid"
    },
  ]
  overdueInvoices = [
    {
      id: "INV001",
      createdOn: "16 June 2022",
      invoiceto: "Barbara Moore",
      amount:"$5200",
      lastDate:"23 June 2022",
      status:"overdue 7 days"
    },
    {
      id: "INV002",
      createdOn: "18 June 2022",
      invoiceto: "Karlene Chaidez",
      amount:"$3800",
      lastDate:"24 June 2022",
      status:"overdue 6 days"
    },
    {
      id: "INV003",
      createdOn: "20 June 2022",
      invoiceto: "Russell Copeland",
      amount:"$1800",
      lastDate:"26 June 2022",
      status:"overdue 6 days"
    },
    {
      id: "INV004",
      createdOn: "21 June 2022",
      invoiceto: "Joseph Collins",
      amount:"$4800",
      lastDate:"28 June 2022",
      status:"overdue 7 days"
    },
    {
      id: "INV005",
      createdOn: "23 June 2022",
      invoiceto: "Jennifer Floyd",
      amount:"$6200",
      lastDate:"29 June 2022",
      status:"overdue 6 days"
    },
    {
      id: "INV006",
      createdOn: "26 June 2022",
      invoiceto: "Leatha Bailey",
      amount:"$3200",
      lastDate:"30 June 2022",
      status:"overdue 4 days"
    },
    {
      id: "INV007",
      createdOn: "27 June 2022",
      invoiceto: "Alex Canpbell",
      amount:"$4300",
      lastDate:"30 June 2022",
      status:"overdue 3 days"
    },
    {
      id: "INV008",
      createdOn: "30 June 2022",
      invoiceto: "Marie Canales",
      amount:"$6200",
      lastDate:"05 July 2022",
      status:"overdue 5 days"
    },
  ]
  draftInvoices = [
    {
      createdOn: "16 June 2022",
      invoiceto: "Barbara Moore",
      amount:"$5200",
    },
    {
      createdOn: "18 June 2022",
      invoiceto: "Karlene Chaidez",
      amount:"$3800",
    },
    {
      createdOn: "20 June 2022",
      invoiceto: "Russell Copeland",
      amount:"$1800",
    },
    {
      createdOn: "21 June 2022",
      invoiceto: "Joseph Collins",
      amount:"$4800",
    },
    {
      createdOn: "23 June 2022",
      invoiceto: "Jennifer Floyd",
      amount:"$6200",
    },
    {
      createdOn: "26 June 2022",
      invoiceto: "Leatha Bailey",
      amount:"$3200",
    },
    {
      createdOn: "27 June 2022",
      invoiceto: "Alex Canpbell",
      amount:"$4300",
    },
    {
      createdOn: "30 June 2022",
      invoiceto: "Marie Canales",
      amount:"$6200",
    },
  ]
  recurringInvoices = [
    {
      id: "INV001",
      createdOn: "16 June 2022",
      invoiceto: "Barbara Moore",
      amount:"$5200",
      lastInvoice:"23 June 2022",
      nextInvoice:"28 June 2022",
      frequency: "14 Months",
      status:"Active"
    },
    {
      id: "INV002",
      createdOn: "18 June 2022",
      invoiceto: "Karlene Chaidez",
      amount:"$3800",
      lastInvoice:"18 June 2022",
      nextInvoice:"20 June 2022",
      frequency: "12 Months",
      status:"Expired"
    },
    {
      id: "INV003",
      createdOn: "20 June 2022",
      invoiceto: "Russell Copeland",
      amount:"$1800",
      lastInvoice:"10 June 2022",
      nextInvoice:"18 June 2022",
      frequency: "08 Months",
      status:"Active"
    },
    {
      id: "INV004",
      createdOn: "21 June 2022",
      invoiceto: "Joseph Collins",
      amount:"$4800",
      lastInvoice:"15 June 2022",
      nextInvoice:"22 June 2022",
      frequency: "10 Months",
      status:"Expired"
    },
    {
      id: "INV005",
      createdOn: "23 June 2022",
      invoiceto: "Jennifer Floyd",
      amount:"$6200",
      lastInvoice:"20 June 2022",
      nextInvoice:"24 June 2022",
      frequency: "04 Months",
      status:"Active"
    },
    {
      id: "INV006",
      createdOn: "26 June 2022",
      invoiceto: "Leatha Bailey",
      amount:"$3200",
      lastInvoice:"23 June 2022",
      nextInvoice:"26 June 2022",
      frequency: "06 Months",
      status:"Expired"
    },
    {
      id: "INV007",
      createdOn: "27 June 2022",
      invoiceto: "Alex Canpbell",
      amount:"$4300",
      lastInvoice:"15 June 2022",
      nextInvoice:"25 June 2022",
      frequency: "08 Months",
      status:"Active"
    },
    {
      id: "INV008",
      createdOn: "30 June 2022",
      invoiceto: "Marie Canales",
      amount:"$6200",
      lastInvoice:"09 June 2022",
      nextInvoice:"19 June 2022",
      frequency: "04 Months",
      status:"Expired"
    },
  ]
  cancelledInvoices = [
    {
      id: "INV001",
      createdOn: "16 June 2022",
      invoiceto: "Barbara Moore",
      amount:"$5200",
      cancelledOn:"23 June 2022",
    },
    {
      id: "INV002",
      createdOn: "18 June 2022",
      invoiceto: "Karlene Chaidez",
      amount:"$3800",
      cancelledOn:"24 June 2022",
    },
    {
      id: "INV003",
      createdOn: "20 June 2022",
      invoiceto: "Russell Copeland",
      amount:"$1800",
      cancelledOn:"26 June 2022",
    },
    {
      id: "INV004",
      createdOn: "21 June 2022",
      invoiceto: "Joseph Collins",
      amount:"$4800",
      cancelledOn:"28 June 2022",
    },
    {
      id: "INV005",
      createdOn: "23 June 2022",
      invoiceto: "Jennifer Floyd",
      amount:"$6200",
      cancelledOn:"29 June 2022",
    },
    {
      id: "INV006",
      createdOn: "26 June 2022",
      invoiceto: "Leatha Bailey",
      amount:"$3200",
      cancelledOn:"30 June 2022",
    },
    {
      id: "INV007",
      createdOn: "27 June 2022",
      invoiceto: "Alex Canpbell",
      amount:"$4300",
      cancelledOn:"30 June 2022",
    },
    {
      id: "INV008",
      createdOn: "30 June 2022",
      invoiceto: "Marie Canales",
      amount:"$6200",
      cancelledOn:"05 July 2022",
    },
  ]
}
