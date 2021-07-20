import { PublishedAtRendererComponent } from '../../video-list/components/renderers/published-at-renderer/published-at-renderer.component';
import { DescriptionRendererComponent } from '../../video-list/components/renderers/description-renderer/description-renderer.component';
import { ThumbnailsRendererComponent } from '../../video-list/components/renderers/thumbnails-renderer/thumbnails-renderer.component';
import { TitleRendererComponent } from '../../video-list/components/renderers/title-renderer/title-renderer.component';
import { IGridColumn } from './grid-params.entity';

export interface GridParamsState {
  columnDefs: any[],
  checkboxColumn: IGridColumn,
  generalCheckboxValue: boolean
}

export const GRID_PARAMS_INITIAL_STATE: GridParamsState =  {
  columnDefs: [
    {field: 'thumbnail', headerName: '', cellRendererFramework: ThumbnailsRendererComponent},
    {field: 'publishedOn', cellRendererFramework: PublishedAtRendererComponent},
    {field: 'videoTitle', cellRendererFramework: TitleRendererComponent},
    {field: 'description', cellRendererFramework: DescriptionRendererComponent}
  ],
  checkboxColumn:  {
    field: 'checkbox',
    headerName: '',
    minWidth: '50',
    maxWidth: '50',
    headerComponentFramework: null,
    checkboxSelection: true,
    suppressMenu: true
  },
  generalCheckboxValue: false
}
