import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHelloComponent } from './my-hello.component';

describe('MyHelloComponent', () => {
  let component: MyHelloComponent;
  let fixture: ComponentFixture<MyHelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyHelloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
