const { readFile } = require('../utils/search-pattern-util/read-files-util')

module.exports = {
    async loadSearchPatternService(word) {
        try {
            await readFile(word)
        } catch (error) {
            return {
                statusCode: 500,
                body: error.message
            }
        }
    },
}