# AgGridComponent

This Angular application was developed to demonstrate my aptitude to create a standalone
Angular application with 3rd party library agGrid (https://www.ag-grid.com) integration and customize the functionality
through the 3rd party library API.

## Compliance with the requirements

- @Self decorator was applied in the VideoListComponent to ensure the only place allowed to find the injector is the component itself.
  
- The checkIsAllRowsSelected function can be an example of pure function implementation and transformApiDataToRowData as example of RxJs pipe.
  
- NgRx Store, Actions and Effects were used for state management and data manipulation.
  
- Cell Renderer components that extend 'ICellRendererAngularComp' Ag-Grid interface, and VideoListService are covered by unit tests.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
