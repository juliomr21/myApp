import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsenhaComponent } from './rsenha.component';

describe('RsenhaComponent', () => {
  let component: RsenhaComponent;
  let fixture: ComponentFixture<RsenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsenhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RsenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
