import { Component } from '@angular/core';
import { IHeaderAngularComp } from "ag-grid-angular";
import {GridApi, IHeaderParams} from "ag-grid-community";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements IHeaderAngularComp {

  gridApi: GridApi;
  allRowsSelectedToggle = false;

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
