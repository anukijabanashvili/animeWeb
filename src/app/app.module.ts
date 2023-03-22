import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  GalleryComponent, HistoryComponent, HomepageComponent, NotfoundComponent } from './view';
import { FooterComponent, HeaderComponent }from './shared/shared';
import { Search } from './pipes/search.pipe'


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NotfoundComponent,
    GalleryComponent,
    HistoryComponent,
    HeaderComponent,
    FooterComponent,
    Search,
    
  ],
  imports: [
    FormsModule,
    MatSlideToggleModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
