import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Component } from '@angular/core';

import { YOUTUBE_BASE_LINK } from './title-renderer.config';

@Component({
  selector: 'app-title-renderer',
  templateUrl: './title-renderer.component.html',
  styleUrls: ['./title-renderer.component.scss']
})
export class TitleRendererComponent implements ICellRendererAngularComp {

  public videoTitle: string;
  public videoLink: string;

  public agInit({value}: ICellRendererParams): void {
    this.videoTitle = value.title;
    this.videoLink = `${YOUTUBE_BASE_LINK}${value.videoId}`;
  }

  public refresh(): boolean {
    return false;
  }

}
