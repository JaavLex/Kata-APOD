import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { ApodDescComponent } from './apod-desc/apod-desc.component';
import { ApodTitleComponent } from './apod-title/apod-title.component';
import { ApodMediaComponent } from './apod-media/apod-media.component';
import { ApodContainerComponent } from './apod-container/apod-container.component';
import { ApodNavButtonComponent } from './apod-nav-button/apod-nav-button.component';

@NgModule({
  declarations: [
    AppComponent,
    PageTitleComponent,
    ApodDescComponent,
    ApodTitleComponent,
    ApodMediaComponent,
    ApodContainerComponent,
    ApodNavButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
