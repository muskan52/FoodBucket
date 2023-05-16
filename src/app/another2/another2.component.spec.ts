import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Another2Component } from './another2.component';

describe('Another2Component', () => {
  let component: Another2Component;
  let fixture: ComponentFixture<Another2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Another2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Another2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
