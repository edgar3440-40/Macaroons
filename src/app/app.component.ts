import {Component, OnInit} from '@angular/core';
import {INSTAGRAM_LINK, PHONE} from "./constants";
import {ProductType} from "./types/product.type";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";
import {AdvantageService} from "./services/advantage.service";
import {AdvantageType} from "./types/advantage.type";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})



export class AppComponent implements OnInit{

  public phoneNumber : string = PHONE;


  public instagramLink = INSTAGRAM_LINK;
  public showPresent: boolean = true;
  public products: ProductType[] = [

  ];

  public advantages: AdvantageType[] = [

  ];

  public formValues = {
    productTitle: '',
    name: '',
    phone: '',
  }



  constructor(private  productService: ProductService, public cartService: CartService, public advantageService: AdvantageService) {

  }


  ngOnInit() {
    this.products = this.productService.getProducts();
    this.advantages = this.advantageService.getAdvantages();
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior:'smooth'});
  }

  public addToCart(title: string, target: HTMLElement ): void {
    this.scrollTo(target);
    console.log(title)
    this.formValues.productTitle = title;
    this.cartService.count++;
    this.cartService.price+= 1.70;
    alert(title + ' добавлен в корзину!')
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
