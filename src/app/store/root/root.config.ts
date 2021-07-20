import { GRID_PARAMS_INITIAL_STATE } from '../grid-params/grid-params.config';
import { INITIAL_DATA_STATE } from '../data/data.config';
import { AppState } from './root.entity';

export const INITIAL_APP_STATE: AppState = {
  data: INITIAL_DATA_STATE,
  gridParams: GRID_PARAMS_INITIAL_STATE
}
