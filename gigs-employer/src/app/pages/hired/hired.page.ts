import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SegmentChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-hired',
  templateUrl: './hired.page.html',
  styleUrls: ['./hired.page.scss'],
})
export class HiredPage implements OnInit {
  RecentHustlers = false;

  constructor(public router: Router) { }

  ngOnInit() {
  }
  toProgress() {
    this.router.navigateByUrl('/jobprogress');
  }
  onFilter(event: CustomEvent<SegmentChangeEventDetail>) {
    if(event.detail.value === 'recenthustlers') {
      this.RecentHustlers = true;

    }else {
      this.RecentHustlers = false;

    }

  }

}
