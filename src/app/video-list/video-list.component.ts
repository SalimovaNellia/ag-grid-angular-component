import { Component, OnInit, Self } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { Observable } from 'rxjs';
import 'ag-grid-enterprise';

import { IGridColumn } from '../store/grid-params/grid-params.entity';
import { VideoListService } from './services/video-list.service';
import { gridOptionsConfig } from './video-list.config';
import { VideoListItem } from '../shared /interfaces';


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
  providers: [VideoListService]
})
export class VideoListComponent implements OnInit {

  public gridOptions: GridOptions = gridOptionsConfig;

  public rowData$: Observable<VideoListItem[] | null>;
  public columnDefs$: Observable<IGridColumn[]>;

  constructor(@Self() private videoListService: VideoListService) {}

  public ngOnInit(): void {
    this.columnDefs$ = this.videoListService.selectColumnDefFromStore();
    this.rowData$ = this.videoListService.selectRowDataFromStore();
  }

  public onGridReady(event: any) {
    this.getSelectionMode(event.api);
  }

  public getSelectionMode(gridApi: any) {
    const selectionMode$ = gridApi.getStatusPanel("customToggleButtonComponent")?.getFrameworkComponentInstance().selectionMode$;
    selectionMode$?.subscribe((mode: string) => {
      mode ? this.addCheckboxColumn() : this.removeCheckboxColumn();
    });
  }

  private addCheckboxColumn(): void {
    this.videoListService.dispatchGridParamsAddCheckboxColumn();
  }

  private removeCheckboxColumn(): void {
    this.videoListService.dispatchGridParamsRemoveCheckboxColumn();
  }

  public onSelectionChanged(event: any): void {
    const isAllCheckboxesSelected: boolean = event.api.getSelectedRows().length === event.api.getDisplayedRowCount();
    this.videoListService.dispatchChangeGeneralCheckbox(isAllCheckboxesSelected);
  }
}
