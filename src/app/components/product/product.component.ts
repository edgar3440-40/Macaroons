import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductType} from "../../types/product.type";
import {CartProductService} from "../../services/cart-product.service";


@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [CartProductService]
})
export class ProductComponent implements OnInit  {

  @Input() product: ProductType;
  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();


  // @ViewChild(TitleComponent)
  // private titleComponent!: TitleComponent;



  constructor(public cartProductService: CartProductService ) {
    this.product = {
      image: '',
      title: '',
    }

  }

  ngOnInit() {

  }

  public addProductToCart() {
    this.cartProductService.count++;
    this.cartProductService.price+= 1.70;
    this.addToCartEvent.emit(this.product.title)
  }

}

