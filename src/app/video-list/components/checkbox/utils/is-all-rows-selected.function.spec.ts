import { checkIsAllRowsSelected } from './is-all-rows-selected.function';

const mockResults = [true, false];
const incomingValuesEquals = {
  selectedRows: 10,
  displayedRows: 10
}

const incomingValuesUnequals = {
  selectedRows: 10,
  displayedRows: 5
}


describe("checkIsAllRowsSelected", () => {
  mockResults.forEach(mockResult => {
    it(`should compare selected rows and return ${mockResult} if they are ${mockResult ? "equal" : "not equal"}`,
      () => {
      if (mockResult) {
        const result = checkIsAllRowsSelected(incomingValuesEquals.selectedRows, incomingValuesEquals.displayedRows);
        expect(result).toEqual(mockResult);
      } else {
        const result = checkIsAllRowsSelected(incomingValuesUnequals.selectedRows, incomingValuesUnequals.displayedRows);
        expect(result).toEqual(mockResult);
      }
    })
  })
})
