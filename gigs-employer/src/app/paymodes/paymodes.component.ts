import { Component, OnInit, AfterViewInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymodes',
  templateUrl: './paymodes.component.html',
  styleUrls: ['./paymodes.component.scss'],
})
export class PaymodesComponent implements OnInit, AfterViewInit {
  issearching = false;
  theoverlay: any;
  @ViewChild('payoverlay', { static: false }) payoverlay: ElementRef;

  constructor(private renderer: Renderer2, private router: Router) { }

  ngOnInit() {}
  ngAfterViewInit() {
    this.theoverlay = this.payoverlay.nativeElement;
    this.renderer.listen(this.theoverlay, 'click', (e) => {
      if (e.target.classList.contains('paymodeoverlay')) {
        this.renderer.removeClass(this.theoverlay, 'is-visible');
        this.issearching = false;
      }


    });

  }
  checking() {
    this.issearching = !this.issearching;
    // simulate http request
    setTimeout(() => {
      this.issearching = false;
      this.renderer.removeClass(this.theoverlay, 'is-visible');
      this.router.navigateByUrl('/searchedhustlers');

    }, 3000);
  }

}
