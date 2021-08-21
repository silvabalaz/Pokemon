import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'pokemon-home',
  templateUrl: './home.component.html'
})
export class HomeComponent  {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  onClickVersionOneButton(event: any) {
    this.router.navigate(['/versionOne']);
  }

  onClickVersionTwoButton(event: any) {
    this.router.navigate(['/versionTwo']);
  }

}
