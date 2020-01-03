import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobprogressPage } from './jobprogress.page';

describe('JobprogressPage', () => {
  let component: JobprogressPage;
  let fixture: ComponentFixture<JobprogressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobprogressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobprogressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
