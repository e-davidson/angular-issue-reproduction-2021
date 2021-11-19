import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  count = 0;

  counter = new BehaviorSubject(this.count);

  state$ = this.counter.asObservable();

  increment() {
    this.count++;
    this.counter.next(this.count);
  }

  constructor() { }
}
