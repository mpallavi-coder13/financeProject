import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerydetailComponent } from './querydetail.component';

describe('QuerydetailComponent', () => {
  let component: QuerydetailComponent;
  let fixture: ComponentFixture<QuerydetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuerydetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuerydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
