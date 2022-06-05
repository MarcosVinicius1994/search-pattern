const file = require('../../../../src/app/utils/search-pattern-util/read-files-util')
const { folders } = require('../../../mock/folders-mock.json')
const httpRequest = {
  query: {
    word: "walt disney"
  }
}

describe('call readFile', () => {
  describe('readFile', () => {
    it('should load readFile ', async () => {
      const spyReadFile = jest
        .spyOn(file, 'readFile')
        .mockReturnValueOnce(folders)
      const { word } = httpRequest.query
      await file.readFile(word)
      expect(spyReadFile).toHaveBeenCalledWith(word)
    })
  })
  describe('readFile', () => {
    it('should load readFile for folder with error ', async () => {
      const word = 'error'
      let result
      const errorPrintFile = {
        error: `Error ao realizar a disposição das informações dos arquivos para o termo: ' + ${word}`
      }
      jest
        .spyOn(file, 'readFile')
        .mockImplementation(async () => { throw errorPrintFile })
      try {
        result = await file.readFile(null, null)
      } catch (error) {
        expect(error).toStrictEqual(errorPrintFile)
      }
    })
  })
})