import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { ApodDescComponent } from './components/apod-desc/apod-desc.component';
import { ApodTitleComponent } from './components/apod-title/apod-title.component';
import { ApodMediaComponent } from './components/apod-media/apod-media.component';
import { ApodContainerComponent } from './components/apod-container/apod-container.component';
import { ApodNavButtonComponent } from './components/apod-nav-button/apod-nav-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { ApiKeyInputComponent } from './components/api-key-input/api-key-input.component';
import { ApodArticleComponent } from './components/apod-article/apod-article.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BasicButtonComponent } from './components/basic-button/basic-button.component';

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
    ApodArticleComponent,
    BasicButtonComponent
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
