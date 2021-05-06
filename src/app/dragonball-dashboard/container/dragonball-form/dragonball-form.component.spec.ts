import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonballFormComponent } from './dragonball-form.component';

describe('DragonballFormComponent', () => {
  let component: DragonballFormComponent;
  let fixture: ComponentFixture<DragonballFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragonballFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonballFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
