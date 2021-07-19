import {Component, OnInit, Self} from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { Observable } from 'rxjs';

import { VideoListItem } from '../shared /interfaces';
import {IGridColumn} from "../store/grid-params/grid-params.entity";
import 'ag-grid-enterprise';
import {CustomToggleButtonComponent} from "./components/toolbar/custom-toggle-button/custom-toggle-button.component";

import {VideoListService} from "./services/video-list.service";


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
  providers: [VideoListService]
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
    applyColumnDefOrder: true,
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

  constructor(@Self() private videoListService: VideoListService) {
  }

  ngOnInit(): void {
    this.columnDefs$ = this.videoListService.selectColumnDefFromStore();
    this.rowData$ = this.videoListService.selectRowDataFromStore();
  }

  onGridReady(event: any) {
    this.getSelectionMode(event.api);
  }

  getSelectionMode(gridApi: any) {
    const selectionMode$ = gridApi.getStatusPanel("customToggleButtonComponent")?.getFrameworkComponentInstance().selectionMode$;
    selectionMode$?.subscribe((mode: string) => {
      mode ? this.addCheckboxColumn() : this.removeCheckboxColumn();
    });
  }

  addCheckboxColumn(): void {
    this.videoListService.dispatchGridParamsAddCheckboxColumn();
  }

  removeCheckboxColumn(): void {
    this.videoListService.dispatchGridParamsRemoveCheckboxColumn();
  }

  onSelectionChanged(event: any): void {
    const isAllCheckboxesSelected: boolean = event.api.getSelectedRows().length === event.api.getDisplayedRowCount();
    this.videoListService.dispatchChangeGeneralCheckbox(isAllCheckboxesSelected);
  }
}
