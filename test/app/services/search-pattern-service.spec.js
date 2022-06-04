const searchPatternService = require('../../../src/app/services/search-pattern-service')
const { readFile } = require('../../../src/app/utils/search-pattern-util/read-files-util')
// const filesResponse = require('../../mock/files-mock')
const word = "walt disney"
describe('loadSearchPatternService', () => {
    describe('loadSearchPatternService', () => {
        it('should load loadSearchPatternService ', async () => {
            await readFile(word)
            const stu = await searchPatternService.loadSearchPatternService()
            expect(stu).toHaveBeenCalled()
        })
    })
})