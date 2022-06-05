const searchPatternService = require('../../../src/app/services/search-pattern-service')
const file = require('../../../src/app/utils/search-pattern-util/read-files-util')
const { response } = require('../../mock/file-mock.json')
const data = 'src/data/*.txt'
const httpRequest = {
    query: {
        word: "walt disney"
    }
} 



describe('loadSearchPatternService', () => {
    describe('loadSearchPatternService is sucessfull', () => {
        it('should load loadSearchPatternService ', async () => {
            const spyReadFile = jest
            .spyOn(file,'readFile')
            .mockReturnValueOnce(response)
            const { word } = httpRequest.query
            await searchPatternService.loadSearchPatternService(httpRequest)
            await file.readFile(word, data)
            expect(spyReadFile).toHaveBeenCalledWith(word, data)
        })
        it('should load loadSearchPatternService for called readFile ', async () => {
            const { word } = httpRequest.query
            const spyReadFile = jest.spyOn(file,'readFile')
            .mockImplementation(async () => await file.readFile(word, data))
            await searchPatternService.loadSearchPatternService(httpRequest)
            expect(spyReadFile).toHaveBeenCalledWith(word, data)
        })
    })
    describe('loadSearchPatternService with error', () => {
        it('should load printFile for folder with error ', async () => {
            const word  =  'error' 
            let result
            const errorPrintFile = {
                error: `Error ao realizar a  leitura dos arquivos para o termo: ' + ${word}`
            }
            const spyReadFile = jest
                .spyOn(file, 'readFile')
                .mockImplementation(async () => { throw errorPrintFile })
            try {
                result = await file.readFile({}, {})
            } catch (error) {
                expect(error).toStrictEqual(errorPrintFile)
            }
        })
    })
})