import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendimentoEmailComponent } from './atendimento-email.component';

describe('AtendimentoEmailComponent', () => {
  let component: AtendimentoEmailComponent;
  let fixture: ComponentFixture<AtendimentoEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtendimentoEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtendimentoEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
