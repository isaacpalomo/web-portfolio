import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './layout/site-header/site-header.component';
import { SiteFooterComponent } from './layout/site-footer/site-footer.component';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { ExperienceSectionComponent } from './sections/experience-section/experience-section.component';
import { ContactSectionComponent } from './sections/contact-section/contact-section.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ExperienceSectionComponent,
    ContactSectionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
