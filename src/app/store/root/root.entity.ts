import {DataState} from "../data/data.reducers";
import {GridParamsState} from "../grid-params/grid-params.entity";

export interface AppState {
  data: DataState;
  gridParams: GridParamsState;
}
