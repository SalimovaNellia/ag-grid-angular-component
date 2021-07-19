import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, map, startWith, switchMap, tap} from "rxjs/operators";
import { of, OperatorFunction } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { ApiData, VideoListItem, VideoItemFromApi } from "../../shared /interfaces";
import { DataService } from '../../shared /services/data.service';
import * as dataActions from './data.actions';
import {DataState} from "./data.reducers";
import {AppState} from "../root/root.entity";

@Injectable()
export class DataEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private dataService: DataService
  ) {}

  loadData$ = createEffect(() => this.actions$.pipe(
    ofType(dataActions.VideoDataGetData),
    startWith(dataActions.VideoDataGetData()),
    switchMap(() =>
      this.dataService.getData().pipe(
        this.getVideoList(),
        map((videoData: VideoListItem[]) => dataActions.VideoDataGetDataSuccess({videoData})),
        catchError(error => of(dataActions.VideoDataGetDataFail({ error })))
      )
    ),
  ));

  getVideoList(): OperatorFunction<ApiData, VideoListItem[]> {
    return map<ApiData, VideoListItem[]>(({items}) => {
      return items.map((item: VideoItemFromApi) => ({
          thumbnail: item.snippet.thumbnails.default,
          publishedOn: item.snippet.publishedAt,
          videoTitle: {title: item.snippet.title, videoId: item.id.videoId},
          description: item.snippet.description,
        })
      );
    });
  }
}
