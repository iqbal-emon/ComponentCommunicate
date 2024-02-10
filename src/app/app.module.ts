import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    AComponent,
    BComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
