import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarContaComponent } from './validar-conta.component';

describe('ValidarContaComponent', () => {
  let component: ValidarContaComponent;
  let fixture: ComponentFixture<ValidarContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidarContaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidarContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
