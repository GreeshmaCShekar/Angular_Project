import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficDemo } from './traffic-demo';

describe('TrafficDemo', () => {
  let component: TrafficDemo;
  let fixture: ComponentFixture<TrafficDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrafficDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrafficDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
