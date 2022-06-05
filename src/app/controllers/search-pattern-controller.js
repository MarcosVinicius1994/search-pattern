const { loadSearchPatternService } = require('../services/search-pattern-service')



module.exports = {

    async loadSearchPatternController(httpRequest){
        try {
           const resultSearch = await loadSearchPatternService(httpRequest)
           return {
               body: resultSearch,
               statusCode: 200
           }
        } catch (error) {
           return {
               statusCode: 500,
               body: error.message
           }
        }
    },
}