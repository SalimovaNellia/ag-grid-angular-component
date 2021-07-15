import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, startWith, switchMap } from "rxjs/operators";
import { of, OperatorFunction } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { ApiData, VideoListItem, VideoItemFromApi } from "../shared /interfaces";
import { DataService } from '../shared /services/data.service';
import * as dataActions from './data.actions';
import { State } from './data.state';

@Injectable()
export class DataEffects {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private dataService: DataService
  ) {}

  loadData$ = createEffect(() => this.actions$.pipe(
    ofType(dataActions.GET_DATA),
    startWith(new dataActions.GetDataAction()),
    switchMap(() =>
      this.dataService.getData().pipe(
        this.getVideoList(),
        map((videoList: VideoListItem[]) => new dataActions.GetDataSuccessAction(videoList)),
        catchError(err => of(new dataActions.GetDataFailAction(err)))
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
