import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueSectionComponent } from './value-section.component';

describe('ValueSectionComponent', () => {
  let component: ValueSectionComponent;
  let fixture: ComponentFixture<ValueSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
