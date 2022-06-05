const searchPatternServiceBath = require('../../../src/app/services/search-pattern-batch-service')
const file = require('../../../src/app/utils/search-pattern-util/read-files-util')
const { response } = require('../../mock/file-mock.json')
const data = 'src/data/*.txt'
const word = "walt disney"




describe('loadSearchPatternServiceBath', () => {
    describe('loadSearchPatternServiceBath', () => {
        it('should load loadSearchPatternServiceBath ', async () => {
            const spyReadFile = jest
            .spyOn(file,'readFile')
            .mockReturnValueOnce(response)
            await searchPatternServiceBath.loadSearchPatternServiceBath(word)
            await file.readFile(word, data)
            expect(spyReadFile).toHaveBeenCalledWith(word, data)
        })
        it('should load loadSearchPatternServiceBath for called readFile ', async () => {
            const spyReadFile = jest.spyOn(file,'readFile')
            .mockImplementation(async () => await file.readFile(word, data))
            await searchPatternServiceBath.loadSearchPatternServiceBath(word)
            expect(spyReadFile).toHaveBeenCalledWith(word, data)
        })
    })
})