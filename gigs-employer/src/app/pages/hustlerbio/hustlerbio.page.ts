import { Component, OnInit, AfterViewInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
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
  @ViewChild('currentSelection', { static: false }) currentSelection: ElementRef;

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.currentSelection.nativeElement.innerHTML = 'About';

    const thecollection = this.elem.nativeElement.querySelectorAll('.whichsection');
    Array.from(thecollection).forEach((ele: HTMLElement) => {
      this.renderer.listen(ele, 'click', (e) => {
        // get parent element
        let parentNode;
        if (e.target.className == "whichsection") {
          parentNode = e.target;

        }
        if (e.target.parentNode.classList.contains('whichsection')) {
          // continue one level up
          parentNode = this.renderer.parentNode(e.target);

        }
        // get all children for the stats div
        const rootEl = document.querySelector('.stats').children;

        Array.from(rootEl).forEach((elem: HTMLElement) => {
          this.renderer.removeClass(elem, 'highlighted');
        }); 
        // add class to parentNode
        this.renderer.addClass(parentNode, 'highlighted');
        this.renderer.setProperty(this.currentSelection.nativeElement, 'innerHTML', parentNode.childNodes[1].data);
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
