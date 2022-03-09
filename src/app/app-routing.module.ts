import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import { CommonModule } from '@angular/common';
import {OwlCarouselExampleComponent} from "./owl-carousel-example/owl-carousel-example.component";
import {JqueryOwlCarouselExampleComponent} from "./jquery-owl-carousel-example/jquery-owl-carousel-example.component";

const routes: Routes = [
  { path: 'owl-carousel-o-example', component: OwlCarouselExampleComponent},
  { path: 'jquery-owl-carousel-example', component: JqueryOwlCarouselExampleComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
