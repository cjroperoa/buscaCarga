import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeOfferPage } from './see-offer.page';

describe('SeeOfferPage', () => {
  let component: SeeOfferPage;
  let fixture: ComponentFixture<SeeOfferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeOfferPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeOfferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
