import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from "@angular/forms";
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';

import { PublishedAtRendererComponent } from './video-list/components/renderers/published-at-renderer/published-at-renderer.component';
import { DescriptionRendererComponent } from './video-list/components/renderers/description-renderer/description-renderer.component';
import { CustomToggleButtonComponent } from './video-list/components/toolbar/custom-toggle-button/custom-toggle-button.component';
import { ThumbnailsRendererComponent } from './video-list/components/renderers/thumbnails-renderer/thumbnails-renderer.component';
import { TitleRendererComponent } from './video-list/components/renderers/title-renderer/title-renderer.component';
import { CheckboxComponent } from './video-list/components/checkbox/checkbox.component';
import { VideoListComponent } from './video-list/video-list.component';
import { rootReducers } from './store/root/root.reducers';
import { environment } from '../environments/environment';
import { DataEffects } from './store/data/data.effects';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    PublishedAtRendererComponent,
    ThumbnailsRendererComponent,
    TitleRendererComponent,
    DescriptionRendererComponent,
    CustomToggleButtonComponent,
    CheckboxComponent
  ],
  imports: [
    AgGridModule.withComponents([]),
    HttpClientModule,
    BrowserModule,
    CommonModule,
    StoreModule.forRoot(rootReducers, {
      runtimeChecks: {
        strictActionImmutability: false,
        strictActionSerializability: false,
        strictStateImmutability: false,
        strictStateSerializability: false,
      }
    }),
    EffectsModule.forRoot([DataEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    BrowserAnimationsModule,
    FormsModule,
    MatButtonToggleModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
