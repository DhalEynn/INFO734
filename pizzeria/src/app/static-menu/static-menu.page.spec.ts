import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StaticMenuPage } from './static-menu.page';

describe('StaticMenuPage', () => {
  let component: StaticMenuPage;
  let fixture: ComponentFixture<StaticMenuPage>;
  let staticMenuPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticMenuPage ],
      schemas: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(StaticMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 8 elements', () => {
    staticMenuPage = fixture.nativeElement;
    const items = staticMenuPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(8);
  });

});
