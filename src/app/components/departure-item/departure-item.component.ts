import { Component, Input } from '@angular/core';
import { Departure } from '../../services/departure.service';

@Component({
  selector: 'app-departure-item',
  templateUrl: './departure-item.component.html',
  styleUrls: ['./departure-item.component.scss'],
})
export class DepartureItemComponent {
  @Input() departure!: Departure;
}
