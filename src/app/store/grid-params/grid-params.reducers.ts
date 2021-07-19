import * as gridParamsActions from './grid-params.actions';
import { Action, createReducer, on} from "@ngrx/store";
import { GridParamsState} from "./grid-params.entity";
import {ThumbnailsRendererComponent} from "../../video-list/components/renderers/thumbnails-renderer/thumbnails-renderer.component";
import {PublishedAtRendererComponent} from "../../video-list/components/renderers/published-at-renderer/published-at-renderer.component";
import {TitleRendererComponent} from "../../video-list/components/renderers/title-renderer/title-renderer.component";
import {DescriptionRendererComponent} from "../../video-list/components/renderers/description-renderer/description-renderer.component";

export const GRID_PARAMS_INITIAL_STATE = {
  columnDefs: [
    {field: 'thumbnail', headerName: '', cellRendererFramework: ThumbnailsRendererComponent},
    {field: 'publishedOn', cellRendererFramework: PublishedAtRendererComponent},
    {field: 'videoTitle', cellRendererFramework: TitleRendererComponent},
    {field: 'description', cellRendererFramework: DescriptionRendererComponent}
  ],
  checkboxColumn:  {
    field: 'checkbox',
    headerName: '',
    minWidth: '50',
    maxWidth: '50',
    headerComponentFramework: null,
    checkboxSelection: true,
    suppressMenu: true
  },
  generalCheckboxValue: false
}

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

