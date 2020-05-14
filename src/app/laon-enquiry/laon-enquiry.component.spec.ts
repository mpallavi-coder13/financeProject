import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaonEnquiryComponent } from './laon-enquiry.component';

describe('LaonEnquiryComponent', () => {
  let component: LaonEnquiryComponent;
  let fixture: ComponentFixture<LaonEnquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaonEnquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaonEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
