import { ICellRendererAngularComp } from 'ag-grid-angular';
import { Component} from '@angular/core';

import { IThumbnailParams } from '../../../../shared /interfaces';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-thumbnails-renderer',
  templateUrl: './thumbnails-renderer.component.html',
  styleUrls: ['./thumbnails-renderer.component.scss']
})
export class ThumbnailsRendererComponent implements ICellRendererAngularComp {

  public thumbnailParams: IThumbnailParams;

  constructor() { }

  agInit(params: ICellRendererParams): void {
    this.thumbnailParams = params.value;
  }

  refresh(params: any): boolean {
    return false;
  }

}
