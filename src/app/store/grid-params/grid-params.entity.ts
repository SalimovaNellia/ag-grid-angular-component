export interface IGridColumn {
  field: string;
  headerName?: string;
  minWidth?: string;
  maxWidth?: string;
  headerComponentFramework?: any;
  cellRendererFramework?: any;
  checkboxSelection?: boolean;
  suppressMenu?: boolean;
  headerValueGetter?: any;
}

export interface GridParamsState {
  columnDefs: any[],
  checkboxColumn: IGridColumn,
  generalCheckboxValue: boolean
}


