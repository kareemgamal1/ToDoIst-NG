import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DoneService {
  number: number = 0;
  numberOfDone: Subject<number> = new Subject<number>();
  constructor() {
    this.numberOfDone.subscribe((value) => {
      this.number = value;
    });
  }
  onTaskDone() {
    this.numberOfDone.next(++this.number);
  }
}
