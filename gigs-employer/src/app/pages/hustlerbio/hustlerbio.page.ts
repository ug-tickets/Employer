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
    //TODO: Change html navs to div coz divs will be easier to work with
    this.currentSelection.nativeElement.innerHTML = 'About';

    const thecollection = this.elem.nativeElement.querySelectorAll('.nze');
    Array.from(thecollection).forEach((ele: HTMLElement) => {
      this.renderer.listen(ele, 'click', (e) => {
        // get parent element
        let parentNode;
        if(e.target.className="nze") {
          parentNode = this.renderer.parentNode(e.target);

        }
        if (e.target.parentNode.classList.contains('nze')) {
          // continue one level up
          parentNode = this.renderer.parentNode(e.target.parentNode); 

        }
        
        Array.from(parentNode.children).forEach((elem: HTMLElement) => {
          this.renderer.removeClass(elem, 'deno');
        });
        if (e.target.className == 'nze') { // he has clicked the li its self
         // this.renderer.addClass(e.target, 'deno');
         e.target.classList.add('deno');
          

        }
        if (e.target.parentNode.classList.contains('nze')) { // he has clicked on the divs inside the li
         // this.renderer.addClass(e.target.parentNode, 'deno');
         //e.target.parentNode.classList.add('deno');

        };


        this.renderer.setProperty(this.currentSelection.nativeElement, 'innerHTML', e.target.innerText);
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
