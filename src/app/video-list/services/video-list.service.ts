import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectColumnDefs } from '../../store/grid-params/grid-params.selectors';
import { CheckboxComponent } from '../components/checkbox/checkbox.component';
import { selectVideoDataSuccess } from '../../store/data/data.selectors';
import { IGridColumn} from '../../store/grid-params/grid-params.entity';
import { AppState } from '../../store/root/root.entity';
import { VideoListItem } from '../../shared /interfaces';
import {
  GridParamsChangeGeneralCheckbox,
  GridParamsRemoveCheckboxColumn,
  GridParamsAddCheckboxColumn
} from '../../store/grid-params/grid-params.actions';

@Injectable({
  providedIn: 'root'
})
export class VideoListService {

  constructor(private store: Store<AppState>) { }

  public selectColumnDefFromStore(): Observable<IGridColumn[]> {
    return this.store.select(selectColumnDefs);
  }

  public selectRowDataFromStore(): Observable<VideoListItem[] | null> {
    return this.store.select(selectVideoDataSuccess);
  }

  public dispatchChangeGeneralCheckbox(isAllCheckboxesSelected: boolean): void {
    this.store.dispatch(GridParamsChangeGeneralCheckbox({generalCheckboxValue: isAllCheckboxesSelected}))
  }

  public dispatchGridParamsRemoveCheckboxColumn(): void {
    this.store.dispatch(GridParamsRemoveCheckboxColumn());
  }

  public dispatchGridParamsAddCheckboxColumn(): void {
    this.store.dispatch(GridParamsAddCheckboxColumn({
      checkboxColumn: {
        field: 'checkbox',
        headerName: '',
        minWidth: '50',
        maxWidth: '50',
        headerComponentFramework: CheckboxComponent,
        checkboxSelection: true,
        suppressMenu: true,
      }
    }));
  }
}
