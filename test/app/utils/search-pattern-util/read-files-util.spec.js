const { readFile } = require('../../../../src/app/utils/search-pattern-util/read-files-util')

describe('printInfoFiles', () => {
    test('does not printInfoFiles word witch value teste', () => {
      const filesMatch = jest.fn();
       readFile('kevin');
      expect(filesMatch).toHaveBeenCalled();
    });
  });