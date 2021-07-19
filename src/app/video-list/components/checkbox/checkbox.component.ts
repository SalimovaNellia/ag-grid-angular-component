import { GridApi, IHeaderParams } from 'ag-grid-community';
import { IHeaderAngularComp } from 'ag-grid-angular';
import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';

import { selectGeneralCheckboxValue } from '../../../store/grid-params/grid-params.selectors';
import { AppState } from '../../../store/root/root.entity';


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements IHeaderAngularComp, OnInit {

  allRowsSelectedToggle = false;
  gridApi: GridApi;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select(selectGeneralCheckboxValue).subscribe(value => {
      this.allRowsSelectedToggle = value;
    });
  }

  agInit(params: IHeaderParams): void {
    this.gridApi = params.api;
    this.allRowsSelectedToggle = this.gridApi.getSelectedRows().length === this.gridApi.getDisplayedRowCount();
  }

  refresh(params: IHeaderParams): boolean {
    return false;
  }

  onChange(event: any) {
    event ? this.gridApi.selectAll() : this.gridApi.deselectAll();
  }
}
