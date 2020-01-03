import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PaymodesComponent } from 'src/app/paymodes/paymodes.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.page.html',
  styleUrls: ['./hire.page.scss'],
})
export class HirePage implements OnInit {
  
  @ViewChild('payoverlay', {static: false}) payoverlay: ElementRef;
  private paymcomp: PaymodesComponent;

  constructor() { }

  ngOnInit() {
  }
  onSubmit(f: NgForm) {
    const paymode = document.querySelector('.paymodeoverlay');
    paymode.classList.add('is-visible');

  }

}
