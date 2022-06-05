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
    describe('loadSearchPatternService', () => {
        it('should load loadSearchPatternService ', async () => {
            const spyReadFile = jest
            .spyOn(file,'readFile')
            .mockReturnValueOnce(response)
            const { word } = httpRequest.query
            const stu = await searchPatternService.loadSearchPatternService(httpRequest)
            await file.readFile(word, data)
            expect(spyReadFile).toHaveBeenCalledWith(word, data)
        })
        it('should load loadSearchPatternService for called readFile ', async () => {
            const { word } = httpRequest.query
            const spyReadFile = jest.spyOn(file,'readFile')
            .mockImplementation(async () => await file.readFile(word, data))
            const stu = await searchPatternService.loadSearchPatternService(httpRequest)
            expect(spyReadFile).toHaveBeenCalledWith(word, data)
        })
    })
})