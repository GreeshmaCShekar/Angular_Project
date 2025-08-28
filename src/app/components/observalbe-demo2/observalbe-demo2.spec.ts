import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservalbeDemo2 } from './observalbe-demo2';

describe('ObservalbeDemo2', () => {
  let component: ObservalbeDemo2;
  let fixture: ComponentFixture<ObservalbeDemo2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservalbeDemo2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservalbeDemo2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
