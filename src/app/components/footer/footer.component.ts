import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  {

  public phoneNumber : string = '+375 (29) 368-98-68';

  public instagramLink = 'https://instagram.com';


}
