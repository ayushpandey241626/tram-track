import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAlertsComponent } from './service-alerts.component';

describe('ServiceAlertsComponent', () => {
  let component: ServiceAlertsComponent;
  let fixture: ComponentFixture<ServiceAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceAlertsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
