import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { ApodDescComponent } from './apod-desc/apod-desc.component';
import { ApodTitleComponent } from './apod-title/apod-title.component';

@NgModule({
  declarations: [
    AppComponent,
    PageTitleComponent,
    ApodDescComponent,
    ApodTitleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
