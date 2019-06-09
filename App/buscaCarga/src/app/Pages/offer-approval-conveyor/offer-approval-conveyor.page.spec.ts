import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferApprovalConveyorPage } from './offer-approval-conveyor.page';

describe('OfferApprovalConveyorPage', () => {
  let component: OfferApprovalConveyorPage;
  let fixture: ComponentFixture<OfferApprovalConveyorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferApprovalConveyorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferApprovalConveyorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
