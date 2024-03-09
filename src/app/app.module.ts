import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import {ProductService} from "./services/product.service";
import { InputEffectsDirective } from './directives/input-effects.directive';
import { ShortenTextPipe } from './pipes/shorten-text.pipe';
import { AdvantageComponent } from './components/advantage/advantage.component';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProductComponent,
    InputEffectsDirective,
    InputEffectsDirective,
    ShortenTextPipe,
    AdvantageComponent,
    PhoneFormatPipe,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
    ],
  providers: [ProductService],
  bootstrap: [AppComponent, FooterComponent]
})
export class AppModule { }
