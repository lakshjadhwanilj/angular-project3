import { Component, OnInit } from '@angular/core';
import { Sale } from './Sale';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  saleList: Sale[] = [
    { prdId: 101, qty: 1, billAmount: 50000 },
    { prdId: 102, qty: 1, billAmount: 6000 },
    { prdId: 103, qty: 1, billAmount: 3000 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
