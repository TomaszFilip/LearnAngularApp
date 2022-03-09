import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OwlCarouselExampleComponent } from './owl-carousel-example/owl-carousel-example.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CarouselModule } from "ngx-owl-carousel-o";
import { AppRoutingModule } from './app-routing.module';
import { JqueryOwlCarouselExampleComponent } from './jquery-owl-carousel-example/jquery-owl-carousel-example.component';
import {OwlModule} from "ngx-owl-carousel";

@NgModule({
  declarations: [
    AppComponent,
    OwlCarouselExampleComponent,
    JqueryOwlCarouselExampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    OwlModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
