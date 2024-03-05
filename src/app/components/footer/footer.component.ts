import { Component, OnInit } from '@angular/core';
import {PHONE, INSTAGRAM_LINK} from "../../constants";

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  {

  public phoneNumber : string = PHONE;

  public instagramLink = INSTAGRAM_LINK;


}
