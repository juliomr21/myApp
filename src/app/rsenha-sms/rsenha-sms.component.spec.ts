import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsenhaSmsComponent } from './rsenha-sms.component';

describe('RsenhaSmsComponent', () => {
  let component: RsenhaSmsComponent;
  let fixture: ComponentFixture<RsenhaSmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsenhaSmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RsenhaSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
