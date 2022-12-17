import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValideContaSmsComponent } from './valide-conta-sms.component';

describe('ValideContaSmsComponent', () => {
  let component: ValideContaSmsComponent;
  let fixture: ComponentFixture<ValideContaSmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValideContaSmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValideContaSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
