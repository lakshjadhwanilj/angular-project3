import { Component, OnInit } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  prdList: Product[] = [
    { prdId: 101, prdName: 'Mobile', prdPrice: 50000 },
    { prdId: 102, prdName: 'Charger', prdPrice: 6000 },
    { prdId: 103, prdName: 'Keyboard', prdPrice: 3000 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
