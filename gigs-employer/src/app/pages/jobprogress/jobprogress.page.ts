import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobprogress',
  templateUrl: './jobprogress.page.html',
  styleUrls: ['./jobprogress.page.scss'],
})
export class JobprogressPage implements OnInit {
  extensionheader: string = 'Extend Gig By';
  confirmit =false;
  constructor() { }

  ngOnInit() {
  }
  onSelect(event: CustomEvent) {
    // console.log(event);
    
    this.confirmit = true;

  }
  onConfirm() {
    this.extensionheader = 'Extended by';
    this.confirmit = false;

  }

}
