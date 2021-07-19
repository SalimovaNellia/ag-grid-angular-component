import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Component } from '@angular/core';

@Component({
  selector: 'app-published-at-renderer',
  templateUrl: './published-at-renderer.component.html',
  styleUrls: ['./published-at-renderer.component.scss']
})
export class PublishedAtRendererComponent implements ICellRendererAngularComp {

  public publishedAt: string;

  agInit(params: ICellRendererParams): void {
    this.publishedAt = params.value;
  }

  refresh(): boolean {
    return false;
  }

}
