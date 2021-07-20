import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Component} from '@angular/core';

import { IThumbnailParams } from '../../../../shared /interfaces';

@Component({
  selector: 'app-thumbnails-renderer',
  templateUrl: './thumbnails-renderer.component.html',
  styleUrls: ['./thumbnails-renderer.component.scss']
})
export class ThumbnailsRendererComponent implements ICellRendererAngularComp {

  public thumbnailParams: IThumbnailParams;

  public agInit({value}: ICellRendererParams): void {
    this.thumbnailParams = value;
  }

  public refresh(): boolean {
    return false;
  }

}
