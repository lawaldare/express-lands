import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemSettingsComponent } from './menu-item-settings.component';

describe('MenuItemSettingsComponent', () => {
  let component: MenuItemSettingsComponent;
  let fixture: ComponentFixture<MenuItemSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuItemSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
