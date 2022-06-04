const { printInfoFiles } = require('../../../../src/app/utils/search-pattern-util/print-files-util')

describe('printInfoFiles', () => {
    // test('printInfoFiles  call of word witch value kevin', () => {
    //   const filesMatch = ['teste', 'teste2']
    //   printInfoFiles(filesMatch, 'kevin');
    //   expect(filesMatch).toHaveBeenCalled();
    // });
  
    test('does not printInfoFiles word witch value teste', () => {
      const filesMatch = jest.fn();
      printInfoFiles(-2, 'teste');
      expect(filesMatch).not.toHaveBeenCalled();
    });
  });