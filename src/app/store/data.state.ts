import { ActionReducerMap, createSelector } from "@ngrx/store";

import * as dataReducers from './data.reducers';
import { DataState } from './data.reducers';
import { Actions} from './data.actions';


export interface State {
  grid: dataReducers.DataState;
}

export const reducers: ActionReducerMap<State, Actions> = {
  grid: dataReducers.reducer
};

export const getDataState = (state: State) => state.grid;

export const selectVideoListData = createSelector(
  getDataState,
  (state: DataState) => state.videoData
);
