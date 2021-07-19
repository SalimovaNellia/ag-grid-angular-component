import { Injectable } from '@angular/core';
import {selectColumnDefs} from "../../store/grid-params/grid-params.selectors";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/root/root.entity";
import {Observable} from "rxjs";
import {IGridColumn} from "../../store/grid-params/grid-params.entity";
import {VideoListItem} from "../../shared /interfaces";
import {selectVideoDataSuccess} from "../../store/data/data.selectors";
import {
  GridParamsAddCheckboxColumn,
  GridParamsChangeGeneralCheckbox,
  GridParamsRemoveCheckboxColumn
} from "../../store/grid-params/grid-params.actions";
import {CheckboxComponent} from "../components/checkbox/checkbox.component";

@Injectable({
  providedIn: 'root'
})
export class VideoListService {

  constructor(private store: Store<AppState>) { }

  selectColumnDefFromStore(): Observable<IGridColumn[]> {
    return this.store.select(selectColumnDefs);
  }

  selectRowDataFromStore(): Observable<VideoListItem[] | null> {
    return this.store.select(selectVideoDataSuccess);
  }

  dispatchChangeGeneralCheckbox(isAllCheckboxesSelected: boolean): void {
    this.store.dispatch(GridParamsChangeGeneralCheckbox({generalCheckboxValue: isAllCheckboxesSelected}))
  }

  dispatchGridParamsRemoveCheckboxColumn(): void {
    this.store.dispatch(GridParamsRemoveCheckboxColumn());
  }

  dispatchGridParamsAddCheckboxColumn(): void {
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
