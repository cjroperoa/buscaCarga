import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferApprovalSenderPage } from './offer-approval-sender.page';

describe('OfferApprovalSenderPage', () => {
  let component: OfferApprovalSenderPage;
  let fixture: ComponentFixture<OfferApprovalSenderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferApprovalSenderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferApprovalSenderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
