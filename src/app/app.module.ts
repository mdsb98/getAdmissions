import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmissionFormComponent } from './myComponents/admission-form/admission-form.component';
import { SliderComponent } from './myComponents/slider/slider.component';
import { LandingPageComponent } from './myComponents/landing-page/landing-page.component';
import { LpMainSectionComponent } from './myComponents/lp-main-section/lp-main-section.component';
import { HelpdeskComponent } from './myComponents/helpdesk/helpdesk.component';
import { SidebarMenuComponent } from './myComponents/sidebar-menu/sidebar-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmissionFormComponent,
    SliderComponent,
    LandingPageComponent,
    LpMainSectionComponent,
    HelpdeskComponent,
    SidebarMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
