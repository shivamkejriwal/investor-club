import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividendSectionComponent } from './dividend-section.component';

describe('DividendSectionComponent', () => {
  let component: DividendSectionComponent;
  let fixture: ComponentFixture<DividendSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividendSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividendSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
