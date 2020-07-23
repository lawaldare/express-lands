import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemThreeComponent } from './menu-item-three.component';

describe('MenuItemThreeComponent', () => {
  let component: MenuItemThreeComponent;
  let fixture: ComponentFixture<MenuItemThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuItemThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
