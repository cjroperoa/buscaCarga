import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShipmentCategoryPage } from './new-shipment-category.page';

describe('NewShipmentCategoryPage', () => {
  let component: NewShipmentCategoryPage;
  let fixture: ComponentFixture<NewShipmentCategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewShipmentCategoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewShipmentCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
