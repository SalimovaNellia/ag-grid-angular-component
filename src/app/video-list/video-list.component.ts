import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { Store} from '@ngrx/store';
import { Observable } from 'rxjs';

import { VideoListItem } from '../shared /interfaces';
import {IGridColumn} from "../store/grid-params/grid-params.entity";
import {selectColumnDefs} from "../store/grid-params/grid-params.selectors";
import {selectVideoDataSuccess} from "../store/data/data.selectors";
import {AppState} from "../store/root/root.entity";
import 'ag-grid-enterprise';
import {CustomToggleButtonComponent} from "./components/toolbar/custom-toggle-button/custom-toggle-button.component";
import {
  GridParamsAddCheckboxColumn,
  GridParamsAddColumnDefs,
  GridParamsRemoveCheckboxColumn
} from "../store/grid-params/grid-params.actions";
import {CheckboxComponent} from "./components/checkbox/checkbox.component";
import {ToggleParams} from "./components/toolbar/custom-toggle-button/custom-toggle-button.config";


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  public gridOptions: GridOptions = {
    defaultColDef: {
      flex: 1,
      autoHeight: true,
      resizable: true,
    },
    suppressRowClickSelection: true,
    rowSelection: 'multiple',
    statusBar: {
      statusPanels: [
        {
          statusPanel: "customToggleButtonComponent"
        },
        {
          statusPanel: "agSelectedRowCountComponent"
        },
        {
          statusPanel: 'agTotalRowCountComponent'
        }
      ],
    },
    frameworkComponents: {
      customToggleButtonComponent: CustomToggleButtonComponent
    }
  };

  columnDefs$: Observable<IGridColumn[]>;
  rowData$: Observable<VideoListItem[] | null>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    // this.store.dispatch(GridParamsAddColumnDefs({
    //   columnDefs: [
    //     { field: 'thumbnail', headerName: '', cellRendererFramework: ThumbnailsRendererComponent },
    //     { field: 'publishedOn', cellRendererFramework: PublishedAtRendererComponent },
    //     { field: 'videoTitle', cellRendererFramework: TitleRendererComponent },
    //     { field: 'description', cellRendererFramework: DescriptionRendererComponent }
    //   ]
    // }));
    this.columnDefs$ = this.store.select(selectColumnDefs);
    this.rowData$ = this.store.select(selectVideoDataSuccess);
  }

  onGridReady(event: any) {
    this.getSelectionMode(event.api);
  }

  getSelectionMode(gridApi: any) {
    const selectionMode$ = gridApi.getStatusPanel("customToggleButtonComponent")?.getFrameworkComponentInstance().selectionMode$;
    selectionMode$?.subscribe((mode: string) => {
      mode ? this.addCheckboxColumn() : this.removeCheckboxColumn();
    })
  }

  addCheckboxColumn(): void {
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

  removeCheckboxColumn(): void {
    this.store.dispatch(GridParamsRemoveCheckboxColumn());
  }

}
