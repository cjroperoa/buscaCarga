import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentDetailsTransporterPage } from './shipment-details-transporter.page';

describe('ShipmentDetailsTransporterPage', () => {
  let component: ShipmentDetailsTransporterPage;
  let fixture: ComponentFixture<ShipmentDetailsTransporterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentDetailsTransporterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentDetailsTransporterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
