import {createAction, props} from "@ngrx/store";
import {IGridColumn} from "./grid-params.entity";

export const GridParamsAddColumnDefs = createAction(
  "[Grid Params] Add Columns Defs",
  props<{ columnDefs: IGridColumn[] }>()
);

export const GridParamsAddCheckboxColumn = createAction(
  "[Grid Params] Add Checkbox Column",
  props<{ checkboxColumn: IGridColumn }>()
);

export const GridParamsRemoveCheckboxColumn = createAction(
  "[Grid Params] Remove Checkbox Column"
);

// {
//   field: 'checkbox',
//     headerName: '',
//   minWidth: '50',
//   maxWidth: '50',
//   headerComponentFramework: HeaderCheckboxComponent,
//   checkboxSelection: true,
//   suppressMenu: true,
//   headerValueGetter: () => this.rowDataLength,
//   aggFunc: 'sum'
