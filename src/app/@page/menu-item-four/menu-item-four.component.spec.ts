import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemFourComponent } from './menu-item-four.component';

describe('MenuItemFourComponent', () => {
  let component: MenuItemFourComponent;
  let fixture: ComponentFixture<MenuItemFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuItemFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
