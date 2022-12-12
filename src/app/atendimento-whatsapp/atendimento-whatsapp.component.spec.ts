import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendimentoWhatsappComponent } from './atendimento-whatsapp.component';

describe('AtendimentoWhatsappComponent', () => {
  let component: AtendimentoWhatsappComponent;
  let fixture: ComponentFixture<AtendimentoWhatsappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtendimentoWhatsappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtendimentoWhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
