import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonballCountComponent } from './dragonball-count.component';

describe('DragonballCountComponent', () => {
  let component: DragonballCountComponent;
  let fixture: ComponentFixture<DragonballCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragonballCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonballCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
