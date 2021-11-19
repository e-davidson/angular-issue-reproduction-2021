import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
