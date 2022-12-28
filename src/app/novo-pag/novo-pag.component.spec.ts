import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoPagComponent } from './novo-pag.component';

describe('NovoPagComponent', () => {
  let component: NovoPagComponent;
  let fixture: ComponentFixture<NovoPagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoPagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
