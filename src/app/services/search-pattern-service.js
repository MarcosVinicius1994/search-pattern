const { readFile } = require('../utils/search-pattern-util/read-files-util')

module.exports = {
    async loadSearchPatternService(httpRequest) {
        try {
            const { word } = httpRequest.query
            await readFile(word)
        } catch (error) {
            return {
                statusCode: 500,
                body: error.message
            }
        }
    },
}