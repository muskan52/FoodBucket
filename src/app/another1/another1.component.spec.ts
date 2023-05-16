import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Another1Component } from './another1.component';

describe('Another1Component', () => {
  let component: Another1Component;
  let fixture: ComponentFixture<Another1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Another1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Another1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
