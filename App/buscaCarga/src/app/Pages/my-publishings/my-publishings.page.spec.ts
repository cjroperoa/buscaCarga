import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPublishingsPage } from './my-publishings.page';

describe('MyPublishingsPage', () => {
  let component: MyPublishingsPage;
  let fixture: ComponentFixture<MyPublishingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPublishingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPublishingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
