import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDrawerComponent } from './item-drawer.component';

describe('ItemDrawerComponent', () => {
  let component: ItemDrawerComponent;
  let fixture: ComponentFixture<ItemDrawerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemDrawerComponent]
    });
    fixture = TestBed.createComponent(ItemDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
