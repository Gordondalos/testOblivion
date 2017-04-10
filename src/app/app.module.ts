import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OblivionNavbarComponent } from "./OblivionNavbar/oblivion-navbar/oblivion-navbar.component";
import { OblivionSortPipe } from "./OblivionNavbar/oblivion-navbar/oblivion-sort.pipe";
import { AppRoutingModule } from "./Routing/app-routing.module";
import { OblivionSearchFormComponent } from "./OblivionSearchForm/oblivion-search-form/oblivion-search-form.component";
import { OblivionSliderComponent } from "./OblivionSlider/oblivion-slider/oblivion-slider.component";
import { OblivionCardComponent } from "./OblivionCard/oblivion-card/oblivion-card.component";
import { OblivionFooterComponent } from "./OblivionFooter/oblivion-footer/oblivion-footer.component";


@NgModule({
  declarations: [
    AppComponent,
    OblivionNavbarComponent,
    OblivionSortPipe,
    OblivionSearchFormComponent,
    OblivionSliderComponent,
    OblivionCardComponent,
    OblivionFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
