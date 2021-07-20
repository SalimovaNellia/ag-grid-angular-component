import { Action, createReducer, on } from '@ngrx/store';
import { INITIAL_DATA_STATE } from './data.config';
import * as dataActions from './data.actions';
import { DataState } from "./data.entity";

const featureReducer = createReducer<DataState>(
  INITIAL_DATA_STATE,
  on(dataActions.VideoDataGetData, (state ) => ({
    ...state,
    loading: true
  })),
  on(dataActions.VideoDataGetDataSuccess, (state, { videoData }) => ({
    ...state,
    loading: false,
    videoData
  })),
  on(dataActions.VideoDataGetDataFail, (state, { error } ) => ({
    ...state,
    error
  })),
);

export function dataReducer(
  state: DataState | undefined,
  action: Action
) {
  return featureReducer(state, action);
}
