import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceSectionComponent } from './performance-section.component';

describe('PerformanceSectionComponent', () => {
  let component: PerformanceSectionComponent;
  let fixture: ComponentFixture<PerformanceSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
