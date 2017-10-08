import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarItemTickerComponent } from './sidebar-item-ticker.component';

describe('SidebarItemTickerComponent', () => {
  let component: SidebarItemTickerComponent;
  let fixture: ComponentFixture<SidebarItemTickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarItemTickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarItemTickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
