import { VideoListItem } from '../../shared /interfaces';
import * as dataActions from './data.actions';
import {Action, createReducer, on} from "@ngrx/store";

export interface DataState {
  videoData: VideoListItem[] | null;
  loading: boolean;
  error: boolean;
}

export const INITIAL_STATE: DataState = {
  videoData: null,
  loading: false,
  error: false,
};

const featureReducer = createReducer<DataState>(
  INITIAL_STATE,
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


// export function reducer(state: DataState = INIT_STATE, action: dataActions.Actions): DataState {
//   switch (action.type) {
//     case dataActions.GET_DATA:
//       return { ...state, loading: true };
//     case dataActions.GET_DATA_SUCCESS:
//       return { ...state, loading: false, videoData: action.payload };
//     case dataActions.GET_DATA_FAIL:
//       return { ...state, error: action.payload };
//     default:
//       return state;
//   }
// }


