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

  agInit(params: ICellRendererParams): void {
    this.description = params.value;
  }

  refresh(params: any): boolean {
    return false;
  }

}
