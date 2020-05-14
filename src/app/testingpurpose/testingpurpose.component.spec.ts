import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingpurposeComponent } from './testingpurpose.component';

describe('TestingpurposeComponent', () => {
  let component: TestingpurposeComponent;
  let fixture: ComponentFixture<TestingpurposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingpurposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingpurposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
