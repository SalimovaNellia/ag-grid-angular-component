import { IStatusPanelAngularComp } from 'ag-grid-angular';
import { Component } from '@angular/core';
import {IStatusPanelParams} from "ag-grid-community";
import {BehaviorSubject} from "rxjs";

import { ToggleParams } from './custom-toggle-button.config';

@Component({
  selector: 'app-custom-toggle-button',
  templateUrl: './custom-toggle-button.component.html',
  styleUrls: ['./custom-toggle-button.component.scss']
})
export class CustomToggleButtonComponent implements IStatusPanelAngularComp {
  public ToggleParams = ToggleParams;

  public selectionMode$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  agInit(params: IStatusPanelParams): void {
  }

}
