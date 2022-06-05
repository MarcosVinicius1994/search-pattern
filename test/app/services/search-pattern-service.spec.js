const searchPatternService = require('../../../src/app/services/search-pattern-service')
// const files = require('../../../src/app/utils/search-pattern-util/print-info-util')
const { readFile } = require('../../../src/app/utils/search-pattern-util/read-files-util')
const { response } = require('../../mock/file-mock.json')
const data = 'src/data/*.txt'
const httpRequest = {
    query: {
        word: "walt disney"
    }
} 



describe('loadSearchPatternService', () => {
    describe('loadSearchPatternService', () => {
        // it('should load loadSearchPatternService ', async () => {
        //     const spyReadFile = jest
        //     .spyOn(searchPatternService, 'loadSearchPatternService')
        //     .mockReturnValueOnce(response)
        //     const { word } = httpRequest.query
        //     await readFile(word, data)
        //     const stu = await searchPatternService.loadSearchPatternService(httpRequest)
        //     expect(spyReadFile).toHaveBeenCalledWith(httpRequest)
        //     expect(stu).toEqual(response)
        //     expect(searchPatternService.loadSearchPatternService).toHaveBeenCalled()
        // })
        it('should load loadSearchPatternService for called readFile ', async () => {
            const spyReadFile = jest
            .spyOn(searchPatternService, 'loadSearchPatternService')
            .mockImplementation(async () => await readFile())
            const { word } = httpRequest.query
            await readFile(word, data)
            const stu = await searchPatternService.loadSearchPatternService(httpRequest)
            expect(spyReadFile).toHaveBeenCalledWith(httpRequest)
            expect(stu).toEqual(response)
            expect(searchPatternService.loadSearchPatternService).toHaveBeenCalled()
        })
    })
})