const fs = require('fs')
const files = require('../../../../src/app/utils/search-pattern-util/read-folder-util')
const { folders } = require('../../../mock/folders-mock.json')
const httpRequest = {
    query: {
        word: "walt disney"
    }
}
describe('Call redFilesLine', () => {
    describe('redFilesLine', () => {
        it('should load redFilesLine ', async () => {
            const spyReadFile = jest
                .spyOn(files, 'redFilesLine')
                .mockReturnValueOnce(folders)
            const { word } = httpRequest.query
             await files.redFilesLine(fs, folders, word)
            expect(files.redFilesLine).toBeCalled()
            expect(spyReadFile).toHaveBeenCalled()
        })
    })
})