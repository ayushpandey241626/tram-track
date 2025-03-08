import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Departure {
  destination: string;
  direction_code: number;
  display: string;
  expected: Date;
  line: {
    designation: string;
    transport_mode: string;
  };
  // Additional fields for UI
  scheduled?: string;
  state?: string;
}

@Injectable({
  providedIn: 'root',
})
export class DepartureService {
  private dataUrl = 'assets/server_response.json';

  constructor(private http: HttpClient) {}

  getTramsToLinde(): Observable<Departure[]> {
    return this.http.get<any>(this.dataUrl).pipe(
      map((response) =>
        response.departures.filter(
          (dep: any) =>
            dep.line.transport_mode === 'TRAM' && dep.direction_code === 1 // Filter TRAMs heading towards Linde
        )
      )
    );
  }
}
