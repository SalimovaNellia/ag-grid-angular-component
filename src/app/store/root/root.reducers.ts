import { ActionReducerMap } from '@ngrx/store';

import { gridParamsReducer } from '../grid-params/grid-params.reducers';
import { dataReducer } from '../data/data.reducers';
import { AppState } from './root.entity';

export const rootReducers: ActionReducerMap<AppState> = {
  data: dataReducer,
  gridParams: gridParamsReducer
}
