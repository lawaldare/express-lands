import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemFiveComponent } from './menu-item-five.component';

describe('MenuItemFiveComponent', () => {
  let component: MenuItemFiveComponent;
  let fixture: ComponentFixture<MenuItemFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuItemFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
