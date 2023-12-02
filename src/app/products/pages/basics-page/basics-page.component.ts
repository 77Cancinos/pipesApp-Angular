import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'victor';
  public nameUpper: string = 'VICTOR';
  public fullName: string = 'VicToR CaNCInOs'

  public customDate: Date = new Date();

}
