import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShipmentFormPage } from './new-shipment-form.page';

describe('NewShipmentFormPage', () => {
  let component: NewShipmentFormPage;
  let fixture: ComponentFixture<NewShipmentFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewShipmentFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewShipmentFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
