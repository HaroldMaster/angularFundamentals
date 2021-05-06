import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDragonballComponent } from './formulario-dragonball.component';

describe('FormularioDragonballComponent', () => {
  let component: FormularioDragonballComponent;
  let fixture: ComponentFixture<FormularioDragonballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioDragonballComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDragonballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
