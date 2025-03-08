import { Component, OnInit } from '@angular/core';
import { DepartureService, Deviation } from '../../services/departure.service';

@Component({
  selector: 'app-service-alerts',
  templateUrl: './service-alerts.component.html',
  styleUrls: ['./service-alerts.component.scss'],
})
export class ServiceAlertsComponent implements OnInit {
  deviations: Deviation[] = [];

  constructor(private departureService: DepartureService) {}

  ngOnInit(): void {
    this.departureService.getDeviations().subscribe({
      next: (data) => (this.deviations = data),
      error: (err) => console.error('Error loading deviations:', err),
    });
  }
  getAlertColor(level: number): string {
    switch (level) {
      case 5:
        return '#dc3545'; // High importance (red)
      case 4:
        return '#ffc107'; // Medium (yellow)
      default:
        return '#6c757d'; // Low (gray)
    }
  }
}
