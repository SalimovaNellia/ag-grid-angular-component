import { createAction, props} from '@ngrx/store';

import { VideoListItem } from '../../shared /interfaces';


export const VideoDataGetData = createAction(
  "[Video Data] Get Data",
);

export const VideoDataGetDataSuccess = createAction(
  "[Video Data] Get Data Success",
  props<{ videoData: VideoListItem[] }>()
);

export const VideoDataGetDataFail = createAction(
  "[Video Data] Get Data Fail",
  props<{ error: any }>()
);
