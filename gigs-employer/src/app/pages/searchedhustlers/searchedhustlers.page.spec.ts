import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchedhustlersPage } from './searchedhustlers.page';

describe('SearchedhustlersPage', () => {
  let component: SearchedhustlersPage;
  let fixture: ComponentFixture<SearchedhustlersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchedhustlersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchedhustlersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
