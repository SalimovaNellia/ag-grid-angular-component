import { Action } from "@ngrx/store";

import { VideoListItem } from "../shared /interfaces";

export const GET_DATA_SUCCESS = '[Data] Get Success';
export const GET_DATA_FAIL = '[Data] Get Fail';
export const GET_DATA = '[Data] Get Data';

export class GetDataAction implements Action {
  readonly type = GET_DATA;
}

export class GetDataSuccessAction implements Action {
  readonly type = GET_DATA_SUCCESS;

  constructor(public payload: VideoListItem[]) { }
}

export class GetDataFailAction implements Action {
  readonly type = GET_DATA_FAIL;

  constructor(public payload: any) { }
}

export type Actions = GetDataAction | GetDataSuccessAction | GetDataFailAction;
