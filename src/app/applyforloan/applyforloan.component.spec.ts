import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyforloanComponent } from './applyforloan.component';

describe('ApplyforloanComponent', () => {
  let component: ApplyforloanComponent;
  let fixture: ComponentFixture<ApplyforloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyforloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyforloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
