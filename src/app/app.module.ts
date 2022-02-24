import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OwlCarouselExampleComponent } from './owl-carousel-example/owl-carousel-example.component';

@NgModule({
  declarations: [
    AppComponent,
    OwlCarouselExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
