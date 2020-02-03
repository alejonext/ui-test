import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialSummaryComponent } from './trial-summary.component';

describe('TrialSummaryComponent', () => {
  let component: TrialSummaryComponent;
  let fixture: ComponentFixture<TrialSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
