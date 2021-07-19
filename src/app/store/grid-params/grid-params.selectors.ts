import { createSelector } from '@ngrx/store';
import {DataState} from "../data/data.reducers";
import {AppState} from "../root/root.entity";
import {GridParamsState} from "./grid-params.entity";


export const getGridParams = (state: AppState) => state.gridParams;

export const selectColumnDefs = createSelector(
  getGridParams,
  (state: GridParamsState) => state.columnDefs
);
