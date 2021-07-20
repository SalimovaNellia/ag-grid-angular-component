import { GridOptions } from 'ag-grid-community';

import { CUSTOM_TOGGLE_BUTTON_COMPONENT_KEY } from './components/toolbar/custom-toggle-button/custom-toggle-button.config';
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
        statusPanel: CUSTOM_TOGGLE_BUTTON_COMPONENT_KEY
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
    [CUSTOM_TOGGLE_BUTTON_COMPONENT_KEY]: CustomToggleButtonComponent
  }
};


