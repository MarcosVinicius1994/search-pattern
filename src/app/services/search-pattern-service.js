const { readFile } = require('../utils/search-pattern-util/read-files-util')
const data = 'src/data/*.txt'

module.exports = {
    async loadSearchPatternService(httpRequest) {
        try {
            const { word } = httpRequest.query
            return readFile(word, data)
        } catch (error) {
            return {
                statusCode: 500,
                body: error.message
            }
        }
    },
}