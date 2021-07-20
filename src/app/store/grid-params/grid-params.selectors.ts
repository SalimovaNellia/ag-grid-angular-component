import { createSelector } from '@ngrx/store';

import { GridParamsState } from './grid-params.entity';
import { AppState } from '../root/root.entity';


export const getGridParams = (state: AppState) => state.gridParams;

export const selectColumnDefs = createSelector(
  getGridParams,
  (state: GridParamsState) => state.columnDefs
);

export const selectGeneralCheckboxValue = createSelector(
  getGridParams,
  (state: GridParamsState) => state.generalCheckboxValue
)
