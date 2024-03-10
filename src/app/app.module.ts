import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';
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

import {registerLocaleData} from "@angular/common";
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu)

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
  providers: [
    ProductService,

    {
      provide: LOCALE_ID,
      useValue: 'ru-RU'
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'RUB'
    }
  ],
  bootstrap: [AppComponent, FooterComponent]
})
export class AppModule { }
