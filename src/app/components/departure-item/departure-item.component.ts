import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Departure } from '../../services/departure.service';

@Component({
  selector: 'app-departure-item',
  templateUrl: './departure-item.component.html',
  styleUrls: ['./departure-item.component.scss'],
})
export class DepartureItemComponent implements OnInit, OnDestroy {
  @Input() departure!: Departure;
  remainingTime: string = '';
  private timer: any;

  ngOnInit(): void {
    this.updateTimer();
    this.timer = setInterval(() => this.updateTimer(), 60000); // Update every minute
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  private updateTimer(): void {
    const now = new Date();
    const diff = this.departure.expected.getTime() - now.getTime();
    const minutes = Math.floor(diff / 60000);

    if (minutes <= 0) {
      this.remainingTime = 'Departed';
    } else {
      this.remainingTime = `Departs in ${minutes} min`;
    }
  }
}
