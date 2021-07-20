import { IStatusPanelAngularComp } from 'ag-grid-angular';
import { IStatusPanelParams} from 'ag-grid-community';
import { Component } from '@angular/core';
import { BehaviorSubject} from 'rxjs';


@Component({
  selector: 'app-custom-toggle-button',
  templateUrl: './custom-toggle-button.component.html',
  styleUrls: ['./custom-toggle-button.component.scss']
})
export class CustomToggleButtonComponent implements IStatusPanelAngularComp {

  public selectionMode$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public agInit(params: IStatusPanelParams): void {
  }

}
