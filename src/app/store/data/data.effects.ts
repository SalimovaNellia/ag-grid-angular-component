import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, map, startWith, switchMap, tap} from "rxjs/operators";
import { of, OperatorFunction } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { VideoListItem } from "../../shared /interfaces";
import { DataService } from '../../shared /services/data.service';
import * as dataActions from './data.actions';
import {AppState} from "../root/root.entity";
import {transformApiDataToRowData} from "../../video-list/utils/tranform-api-data.pipe";

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
        transformApiDataToRowData(),
        map((videoData: VideoListItem[]) => dataActions.VideoDataGetDataSuccess({videoData})),
        catchError(error => of(dataActions.VideoDataGetDataFail({ error })))
      )
    ),
  ));
}
