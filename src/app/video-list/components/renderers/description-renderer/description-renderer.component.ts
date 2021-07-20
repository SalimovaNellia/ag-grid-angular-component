import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Component } from '@angular/core';

@Component({
  selector: 'app-description-renderer',
  templateUrl: './description-renderer.component.html',
  styleUrls: ['./description-renderer.component.scss']
})
export class DescriptionRendererComponent implements ICellRendererAngularComp {

  public description: string;

  public agInit({value}: ICellRendererParams): void {
    this.description = value;
  }

  public refresh(): boolean {
    return false;
  }

}
