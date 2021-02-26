import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusMinusNumbersComponent } from './plus-minus-numbers.component';

describe('PlusMinusNumbersComponent', () => {
  let component: PlusMinusNumbersComponent;
  let fixture: ComponentFixture<PlusMinusNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlusMinusNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusMinusNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
