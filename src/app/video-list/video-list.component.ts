import { GetContextMenuItemsParams, GridOptions, MenuItemDef } from 'ag-grid-community';
import { Component, OnDestroy, OnInit, Self } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import 'ag-grid-enterprise';

import { CUSTOM_TOGGLE_BUTTON_COMPONENT_KEY } from './components/toolbar/custom-toggle-button/custom-toggle-button.config';
import { YOUTUBE_BASE_LINK } from './components/renderers/title-renderer/title-renderer.config';
import { IGridColumn } from '../store/grid-params/grid-params.entity';
import { EColumnId, VideoListItem } from '../shared /interfaces';
import { VideoListService } from './services/video-list.service';
import { gridOptionsConfig } from './video-list.config';
import { takeUntil} from 'rxjs/operators';


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
  providers: [VideoListService]
})
export class VideoListComponent implements OnInit, OnDestroy {

  public gridOptions: GridOptions = gridOptionsConfig;
  public rowData$: Observable<VideoListItem[] | null>;
  public columnDefs$: Observable<IGridColumn[]>;

  private unsubscribe$ = new Subject();

  constructor(@Self() private videoListService: VideoListService) {}

  public ngOnInit(): void {
    this.columnDefs$ = this.videoListService.selectColumnDefFromStore();
    this.rowData$ = this.videoListService.selectRowDataFromStore();
  }

  public onGridReady(event: any) {
    this.getSelectionMode(event.api);
  }

  public getSelectionMode(gridApi: any) {
    gridApi.getStatusPanel(CUSTOM_TOGGLE_BUTTON_COMPONENT_KEY).getFrameworkComponentInstance().selectionMode$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((mode: boolean) => mode ? this.addCheckboxColumn() : this.removeCheckboxColumn());
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
          const url = `${YOUTUBE_BASE_LINK}${params.value.videoId}`;
          window.open(url, '_blank');
        }
      }
    ];

    return params.column.getColId() === EColumnId.VIDEO_TITLE ? menu : null;
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
