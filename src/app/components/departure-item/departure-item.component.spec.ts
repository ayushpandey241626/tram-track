import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartureItemComponent } from './departure-item.component';

describe('DepartureItemComponent', () => {
  let component: DepartureItemComponent;
  let fixture: ComponentFixture<DepartureItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepartureItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepartureItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
