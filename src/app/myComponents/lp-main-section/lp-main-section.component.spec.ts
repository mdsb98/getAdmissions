import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpMainSectionComponent } from './lp-main-section.component';

describe('LpMainSectionComponent', () => {
  let component: LpMainSectionComponent;
  let fixture: ComponentFixture<LpMainSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LpMainSectionComponent]
    });
    fixture = TestBed.createComponent(LpMainSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
