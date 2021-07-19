import { BrowserModule } from '@angular/platform-browser';
import { ReactiveComponentModule } from '@ngrx/component';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { AgGridModule } from "ag-grid-angular";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { NgModule } from '@angular/core';

import { PublishedAtRendererComponent } from './video-list/components/renderers/published-at-renderer/published-at-renderer.component';
import { DescriptionRendererComponent } from './video-list/components/renderers/description-renderer/description-renderer.component';
import { ThumbnailsRendererComponent } from './video-list/components/renderers/thumbnails-renderer/thumbnails-renderer.component';
import { TitleRendererComponent } from './video-list/components/renderers/title-renderer/title-renderer.component';
import { VideoListComponent } from './video-list/video-list.component';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {gridParamsReducer} from "./store/grid-params/grid-params.reducers";
import {dataReducer} from "./store/data/data.reducers";
import {DataEffects} from "./store/data/data.effects";
import {rootReducers} from "./store/root/root.reducers";
import { CustomToggleButtonComponent } from './video-list/components/toolbar/custom-toggle-button/custom-toggle-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {FormsModule} from "@angular/forms";
import { CheckboxComponent } from './video-list/components/checkbox/checkbox.component';
import {MatCheckboxModule} from "@angular/material/checkbox";

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
                strictActionTypeUniqueness: false,
                strictActionWithinNgZone: false,
                strictStateImmutability: false,
                strictStateSerializability: false,
            }
        }),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
            autoPause: true, // Pauses recording actions and state changes when the extension window is not open
        }),
        ReactiveComponentModule,
        EffectsModule.forRoot([DataEffects]),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
        BrowserAnimationsModule,
        MatButtonToggleModule,
        FormsModule,
        MatCheckboxModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
