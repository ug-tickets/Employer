import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HustlerbioPage } from './hustlerbio.page';

describe('HustlerbioPage', () => {
  let component: HustlerbioPage;
  let fixture: ComponentFixture<HustlerbioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HustlerbioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HustlerbioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
