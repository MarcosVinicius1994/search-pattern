const { readFile } = require('../utils/search-pattern-util/read-files-util')
const data = 'src/data/*.txt'

module.exports = {
    async loadSearchPatternServiceBath(word) {
        try {
            await readFile(word, data)
        } catch (error) {
            return {
                statusCode: 500,
                body: error.message
            }
        }
    },
}