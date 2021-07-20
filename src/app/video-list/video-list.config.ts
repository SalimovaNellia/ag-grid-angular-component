import { GridOptions } from 'ag-grid-community';

import { CustomToggleButtonComponent } from './components/toolbar/custom-toggle-button/custom-toggle-button.component';


export const gridOptionsConfig: GridOptions = {
  defaultColDef: {
    flex: 1,
    autoHeight: true,
    resizable: true,
  },
  suppressRowClickSelection: true,
  rowSelection: 'multiple',
  applyColumnDefOrder: true,
  statusBar: {
    statusPanels: [
      {
        statusPanel: "customToggleButtonComponent"
      },
      {
        statusPanel: "agSelectedRowCountComponent"
      },
      {
        statusPanel: 'agTotalRowCountComponent'
      }
    ],
  },
  frameworkComponents: {
    customToggleButtonComponent: CustomToggleButtonComponent
  }
};


