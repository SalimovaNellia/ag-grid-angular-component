import {DataState} from "./data.reducers";
import {createSelector} from "@ngrx/store";
import {AppState} from "../root/root.entity";

const getDataState = (state: AppState) => state.data;

export const selectVideoDataSuccess = createSelector(
  getDataState,
  (state: DataState) => state.videoData
);
export const selectVideoDataLoading = createSelector(
  getDataState,
  (state: DataState) => state.loading
);
export const selectVideoDataFail = createSelector(
  getDataState,
  (state: DataState) => state.error
);
