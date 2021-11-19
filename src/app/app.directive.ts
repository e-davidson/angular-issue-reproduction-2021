import { Directive } from '@angular/core';
import { CounterService } from './counter.service';

@Directive({
  selector: '[appDirective]'
})
export class AppDirective {

  constructor(private counter: CounterService) {
    this.counter.increment();
  }

}
