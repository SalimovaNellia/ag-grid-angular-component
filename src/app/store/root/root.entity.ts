import { GridParamsState } from '../grid-params/grid-params.entity';
import { DataState } from '../data/data.entity';

export interface AppState {
  data: DataState;
  gridParams: GridParamsState;
}
