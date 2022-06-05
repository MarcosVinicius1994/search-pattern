// const searchPatternService = require('../../../src/app/services/search-pattern-service')
const files = require('../../../../src/app/utils/search-pattern-util/print-info-util')
const { folders } = require('../../../mock/folders-mock.json')
const { response } = require('../../../mock/file-mock.json')
const httpRequest = {
    query: {
        word: "walt disney"
    }
}
describe('call printFile', () => {
    describe('printFile', () => {
        it('should load printFile ', async () => {
            const spyReadFile = jest
                .spyOn(files, 'printFile')
                .mockReturnValueOnce(folders)
            const { word } = httpRequest.query
            await files.printFile(folders, word)
            expect(files.printFile).toBeCalled()
            expect(spyReadFile).toHaveBeenCalled()
        })
    })
    describe('printFile', () => {
        it('should load printFile for folder empty ', async () => {
            const { word } = httpRequest.query
            await files.printFile([], word)
            expect(files.printFile).toBeCalled()
        })
    })
    describe('printFile', () => {
        it('should load printFile for folder with error ', async () => {
            const word  =  'error' 
            let result
            const errorPrintFile = {
                error: `Error ao realizar a disposição das informações dos arquivos para o termo: ' + ${word}`
            }
            const spyReadFile = jest
                .spyOn(files, 'printFile')
                .mockImplementation(async () => { throw errorPrintFile })
            try {
                result = await files.printFile(null, null)
            } catch (error) {
                // expect(spyReadFile).toHaveBeenCalledWith(word)
                expect(error).toStrictEqual(errorPrintFile)
            }
        })
    })
})