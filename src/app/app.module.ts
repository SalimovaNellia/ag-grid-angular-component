import { BrowserModule } from '@angular/platform-browser';
import { ReactiveComponentModule } from '@ngrx/component';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { AgGridModule } from "ag-grid-angular";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { NgModule } from '@angular/core';

import { PublishedAtRendererComponent } from './video-list/componetns/published-at-renderer/published-at-renderer.component';
import { DescriptionRendererComponent } from './video-list/componetns/description-renderer/description-renderer.component';
import { ThumbnailsRendererComponent } from './video-list/componetns/thumbnails-renderer/thumbnails-renderer.component';
import { TitleRendererComponent } from './video-list/componetns/title-renderer/title-renderer.component';
import { VideoListComponent } from './video-list/video-list.component';
import { DataEffects } from './store/data.effects';
import { AppComponent } from './app.component';
import { reducers } from './store/data.state';


@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    PublishedAtRendererComponent,
    ThumbnailsRendererComponent,
    TitleRendererComponent,
    DescriptionRendererComponent
  ],
  imports: [
    AgGridModule.withComponents([]),
    HttpClientModule,
    BrowserModule,
    CommonModule,
    StoreModule.forRoot(reducers),
    ReactiveComponentModule,
    EffectsModule.forRoot([DataEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
