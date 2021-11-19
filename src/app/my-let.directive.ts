import { Directive, EmbeddedViewRef, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Directive({
  selector: '[appMyLet]'
})
export class MyLetDirective<T> implements OnDestroy {
  Subscription?: Subscription;

  embeddedView?: EmbeddedViewRef<{ $implicit?: T, appMyLet?:T }>;
  data: { $implicit?: T, appMyLet?:T } = {};
  @Input() set appMyLet(value: Observable<T>) {
    if (this.Subscription) this.Subscription.unsubscribe();

    this.Subscription = value.subscribe(
      (data: T) => {
        console.log('data', data);
        this.data.$implicit = data;
        this.data.appMyLet = data;
        if (!this.embeddedView) {
          this.embeddedView = this.viewContainerRef.createEmbeddedView(this.templateRef, this.data);
        }
      });
  }

  constructor(
    private readonly templateRef: TemplateRef<{ $implicit: T, appMyLet: T }>,
    private readonly viewContainerRef: ViewContainerRef
  ) { console.log('MyLetDirective'); }

  ngOnDestroy(): void {
    if (this.Subscription) this.Subscription.unsubscribe();
  }

}
