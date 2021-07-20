import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { transformApiDataToRowData } from '../../video-list/utils/tranform-api-data.pipe';
import { DataService } from '../../shared /services/data.service';
import { VideoListItem } from '../../shared /interfaces';
import { AppState } from '../root/root.entity';
import * as dataActions from './data.actions';

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
