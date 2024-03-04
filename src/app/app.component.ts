import { Component } from '@angular/core';
import {ProductType} from "./types/product.type";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {


  public showPresent: boolean = true;
  public products: ProductType[] = [
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

  public formValues = {
    productTitle: '',
    name: '',
    phone: '',
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior:'smooth'});
  }

  public addToCart(product: ProductType, target: HTMLElement ): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title;
  }

  public createOrder() {
    if(!this.formValues.productTitle) {
      alert('Write Pizza');
      return;
    }
    if(!this.formValues.name) {
      alert('Write Address');
      return;
    }
    if(!this.formValues.phone) {
      alert('Write Phone');
      return;
    }
    alert('Thank you for order');

    this.formValues = {
      productTitle: '',
      name: '',
      phone: '',
    }
  }
}
