import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveComponentModule } from '@ngrx/component';
import { AppComponent } from './app.component';
import { AppDirective } from './app.directive';
import { MyLetDirective } from './my-let.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyLetDirective,
    AppDirective,
  ],
  imports: [
    BrowserModule,
    ReactiveComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
