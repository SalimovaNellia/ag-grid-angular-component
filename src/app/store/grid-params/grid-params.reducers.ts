import { Action, createReducer, on} from "@ngrx/store";

import { GRID_PARAMS_INITIAL_STATE } from './grid-params.config';
import * as gridParamsActions from './grid-params.actions';
import { GridParamsState} from "./grid-params.entity";

const featureReducer = createReducer<GridParamsState>(
  GRID_PARAMS_INITIAL_STATE,
  on(gridParamsActions.GridParamsAddColumnDefs, (state, { columnDefs }) => ({
    ...state,
    columnDefs
  })),
  on(gridParamsActions.GridParamsAddCheckboxColumn, (state, { checkboxColumn }) => ({
    ...state,
    columnDefs: [
      checkboxColumn,
      ...state.columnDefs
    ]
  })),
  on(gridParamsActions.GridParamsRemoveCheckboxColumn, (state) => ({
    ...state,
    columnDefs: state.columnDefs.filter((col) => col.field !== "checkbox")
  })),
  on(gridParamsActions.GridParamsChangeGeneralCheckbox, (state, { generalCheckboxValue }) => ({
    ...state,
    generalCheckboxValue: generalCheckboxValue
  }))
);

export function gridParamsReducer(
  state: GridParamsState | undefined,
  action: Action
) {
  return featureReducer(state, action);
}

