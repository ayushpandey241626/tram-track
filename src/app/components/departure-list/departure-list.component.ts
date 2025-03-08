import { Component, OnInit } from '@angular/core';
import { DepartureService, Departure } from '../../services/departure.service';

@Component({
  selector: 'app-departure-list',
  templateUrl: './departure-list.component.html',
  styleUrls: ['./departure-list.component.scss'],
})
export class DepartureListComponent implements OnInit {
  departures: Departure[] = [];

  constructor(private departureService: DepartureService) {}

  ngOnInit(): void {
    this.loadDepartures();
  }

  loadDepartures(): void {
    this.departureService.getTramsToLinde().subscribe({
      next: (data) => (this.departures = data),
      error: (err) => console.error('Error loading departures:', err),
    });
  }

  // Extra Feature: Refresh Button
  refresh(): void {
    this.loadDepartures();
  }
}
