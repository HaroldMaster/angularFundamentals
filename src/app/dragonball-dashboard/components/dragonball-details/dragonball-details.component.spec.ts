import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonballDetailsComponent } from './dragonball-details.component';

describe('DragonballDetailsComponent', () => {
  let component: DragonballDetailsComponent;
  let fixture: ComponentFixture<DragonballDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragonballDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonballDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
