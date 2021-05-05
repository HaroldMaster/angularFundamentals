import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonballDashboardComponent } from './dragonball-dashboard.component';

describe('DragonballDashboardComponent', () => {
  let component: DragonballDashboardComponent;
  let fixture: ComponentFixture<DragonballDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragonballDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonballDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
