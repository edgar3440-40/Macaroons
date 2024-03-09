import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): ProductType[] {
    return  [
      {
        image: '1.png',
        title: 'Макарун с малиной',
      },{
        image: '4.png',
        title: 'Макарун с манго',
      },{
        image: '5.png',
        title: 'Пирог с ванилью',
      },{
        image: '7.png',
        title: 'Пирог с фисташками',
      },
    ]
  }
}
