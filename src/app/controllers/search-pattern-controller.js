const { loadSearchPatternService } = require('../services/search-pattern-service')



module.exports = {

    async loadSearchPatternController(httpRequest){
        try {
           const resultGame = await loadSearchPatternService(httpRequest)
           return {
               body: resultGame,
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