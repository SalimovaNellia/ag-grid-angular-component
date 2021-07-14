import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AgGridModule } from "ag-grid-angular";
import { NgModule } from '@angular/core';

import { VideoListComponent } from './video-list/video-list.component';
import { AppComponent } from './app.component';
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent
  ],
  imports: [
    AgGridModule.withComponents([]),
    HttpClientModule,
    BrowserModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
