const searchPatternController = require('../../../src/app/controllers/search-pattern-controller')
const searchPatternService = require('../../../src/app/services/search-pattern-service')

jest.mock('../../../src/app/services/search-pattern-service')

describe('loadSearchPatternController', () => {
    describe('loadSearchPatternController', () => {
        it('should load loadSearchPatternService ', async () => {
            const Lista = [{}]
            const spyLoadSearchPatternService = jest
                .spyOn(searchPatternService, 'loadSearchPatternService')
                .mockImplementation(async () => Lista)
            const stu = await searchPatternController.loadSearchPatternController()
            const result = {
                statusCode: 200,
                body: Lista,
            }
            expect(spyLoadSearchPatternService).toHaveBeenCalled()
            expect(stu).toStrictEqual(result)
        })
        it('loadSearchPatternService is not called sucessfull', async () => {
            const err = {
                message: 'Error ao realizar o processamento dos arquivos'
            }
            const spyLoadSearchPatternService = jest
                .spyOn(searchPatternService, 'loadSearchPatternService')
                .mockImplementation(async () => {
                    throw err
                })
            const stu = await searchPatternController.loadSearchPatternController()
            expect(spyLoadSearchPatternService).toHaveBeenCalled()
            expect(stu).toStrictEqual({
                statusCode: 500,
                body: err.message
            })
        })
    })
})