import { VideoListItem } from '../shared /interfaces';
import * as dataActions from '../store/data.actions';

export interface DataState {
  videoData: VideoListItem[] | null;
  loading: boolean;
  error: boolean;
}

export const INIT_STATE: DataState = {
  videoData: null,
  loading: false,
  error: false
};

export function reducer(state: DataState = INIT_STATE, action: dataActions.Actions): DataState {
  switch (action.type) {
    case dataActions.GET_DATA:
      return { ...state, loading: true };
    case dataActions.GET_DATA_SUCCESS:
      return { ...state, loading: false, videoData: action.payload };
    case dataActions.GET_DATA_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export const getDataSuccess = (state: DataState) => state.videoData;
export const getDataLoading = (state: DataState) => state.loading;
export const getDataFail = (state: DataState) => state.error;
