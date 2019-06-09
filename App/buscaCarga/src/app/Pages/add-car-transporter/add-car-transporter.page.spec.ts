import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarTransporterPage } from './add-car-transporter.page';

describe('AddCarTransporterPage', () => {
  let component: AddCarTransporterPage;
  let fixture: ComponentFixture<AddCarTransporterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCarTransporterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarTransporterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
