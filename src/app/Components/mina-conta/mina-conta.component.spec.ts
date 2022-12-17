import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinaContaComponent } from './mina-conta.component';

describe('MinaContaComponent', () => {
  let component: MinaContaComponent;
  let fixture: ComponentFixture<MinaContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinaContaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinaContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
