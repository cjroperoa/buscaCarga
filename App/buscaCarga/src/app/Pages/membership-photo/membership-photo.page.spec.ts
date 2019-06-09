import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipPhotoPage } from './membership-photo.page';

describe('MembershipPhotoPage', () => {
  let component: MembershipPhotoPage;
  let fixture: ComponentFixture<MembershipPhotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershipPhotoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipPhotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
