import { GetContextMenuItemsParams, GridOptions, MenuItemDef } from 'ag-grid-community';
import { Component, OnInit, Self } from '@angular/core';
import { Observable } from 'rxjs';
import 'ag-grid-enterprise';

import { IGridColumn } from '../store/grid-params/grid-params.entity';
import { EColumnId, VideoListItem } from '../shared /interfaces';
import { VideoListService } from './services/video-list.service';
import { gridOptionsConfig } from './video-list.config';


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

  public getContextMenuItems(params: GetContextMenuItemsParams): any {
    const menu: MenuItemDef[] = [
      {
        name: 'Open in new tab',
        action: () => {
          const url = `https://www.youtube.com/watch?v=${params.value.videoId}`;
          window.open(url, '_blank');
        }
      }
    ];

    return params.column.getColId() === EColumnId.VIDEO_TITLE ? menu : null;
  }

}
