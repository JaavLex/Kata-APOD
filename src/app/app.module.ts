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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { ApiKeyInputComponent } from './api-key-input/api-key-input.component';
import { ApodArticleComponent } from './apod-article/apod-article.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    PageTitleComponent,
    ApodDescComponent,
    ApodTitleComponent,
    ApodMediaComponent,
    ApodContainerComponent,
    ApodNavButtonComponent,
    ApiKeyInputComponent,
    ApodArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
