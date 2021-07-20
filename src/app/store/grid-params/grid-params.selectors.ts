import { createSelector } from '@ngrx/store';

import { AppState } from '../root/root.entity';
import { GridParamsState } from "./grid-params.entity";


export const getGridParams = (state: AppState) => state.gridParams;

export const selectColumnDefs = createSelector(
  getGridParams,
  (state: GridParamsState) => state.columnDefs
);

export const selectGeneralCheckboxValue = createSelector(
  getGridParams,
  (state: GridParamsState) => state.generalCheckboxValue
)
