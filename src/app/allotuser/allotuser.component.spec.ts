import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllotuserComponent } from './allotuser.component';

describe('AllotuserComponent', () => {
  let component: AllotuserComponent;
  let fixture: ComponentFixture<AllotuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllotuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllotuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
