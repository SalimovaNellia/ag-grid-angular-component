import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Component } from '@angular/core';

@Component({
  selector: 'app-title-renderer',
  templateUrl: './title-renderer.component.html',
  styleUrls: ['./title-renderer.component.scss']
})
export class TitleRendererComponent implements ICellRendererAngularComp {

  public videoTitle: string;
  public videoLink: string;

  agInit(params: ICellRendererParams): void {
    this.videoTitle = params.value.title;
    this.videoLink = params.value.videoId;
  }

  refresh(params: any): boolean {
    return false;
  }

}
