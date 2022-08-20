import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  totalNumberOfMatch: number = 0;

  constructor() { }

  incrementCount() {
    this.totalNumberOfMatch++;
  }

  decrementCount() {
    this.totalNumberOfMatch--;
  }
}