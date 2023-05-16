import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Another3Component } from './another3.component';

describe('Another3Component', () => {
  let component: Another3Component;
  let fixture: ComponentFixture<Another3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Another3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Another3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
