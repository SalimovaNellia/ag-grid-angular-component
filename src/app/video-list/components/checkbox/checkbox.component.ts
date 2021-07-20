import { GridApi, IHeaderParams } from 'ag-grid-community';
import { IHeaderAngularComp } from 'ag-grid-angular';
import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';

import { selectGeneralCheckboxValue } from '../../../store/grid-params/grid-params.selectors';
import { checkIsAllRowsSelected } from './utils/is-all-rows-selected.function';
import { AppState } from '../../../store/root/root.entity';


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements IHeaderAngularComp, OnInit {

  public allRowsSelectedToggle = false;
  public gridApi: GridApi;

  public constructor(private store: Store<AppState>) {}

  public ngOnInit() {
    this.store.select(selectGeneralCheckboxValue).subscribe(value => {
      this.allRowsSelectedToggle = value;
    });
  }

  public agInit(params: IHeaderParams): void {
    this.gridApi = params.api;
    this.allRowsSelectedToggle =
      checkIsAllRowsSelected(
        this.gridApi.getSelectedRows().length,
        this.gridApi.getDisplayedRowCount()
      )
  }

  public refresh(params: IHeaderParams): boolean {
    return false;
  }

  public onChange(event: any) {
    event ? this.gridApi.selectAll() : this.gridApi.deselectAll();
  }
}
