import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuceesspageComponent } from './suceesspage.component';

describe('SuceesspageComponent', () => {
  let component: SuceesspageComponent;
  let fixture: ComponentFixture<SuceesspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuceesspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuceesspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
