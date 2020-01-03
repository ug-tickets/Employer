import { Component, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hustlerbio',
  templateUrl: './hustlerbio.page.html',
  styleUrls: ['./hustlerbio.page.scss'],
})
export class HustlerbioPage implements OnInit, AfterViewInit {

  constructor(private sanitization: DomSanitizer, private router: Router, private elem: ElementRef, private renderer: Renderer2) { }
  hustlerdp = '../../assets/img/deno.jpg';
  currentSelection: String;

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.currentSelection = 'About';
    const thecollection = this.elem.nativeElement.querySelectorAll('.nze');
    Array.from(thecollection).forEach((ele: HTMLElement) => {
      this.renderer.listen(ele, 'click', (e) => {
        // get parent element
        const parentNode = this.renderer.parentNode(e.target);
        Array.from(parentNode.children).forEach((elem: HTMLElement) => {
          this.renderer.removeClass(elem, 'sorry');
        });
        this.renderer.addClass(e.target, 'deno');
        this.currentSelection = e.target.innerText;
      });
    });
  }
  getLink() {

    const bgurl = this.sanitization.bypassSecurityTrustStyle(`url(${this.hustlerdp}) center`);
    return bgurl;
  }
  triggerPayModes() {

    // const paymode = document.querySelector('.paymodeoverlay');
    // paymode.classList.add('is-visible');
    this.router.navigateByUrl('/hired');
  }

}
