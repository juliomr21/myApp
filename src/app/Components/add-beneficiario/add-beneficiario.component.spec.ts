import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBeneficiarioComponent } from './add-beneficiario.component';

describe('AddBeneficiarioComponent', () => {
  let component: AddBeneficiarioComponent;
  let fixture: ComponentFixture<AddBeneficiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBeneficiarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
