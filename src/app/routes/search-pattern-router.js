const { Router } = require('express')
const expressCallback = require('../utils/express-callback')
const { Segments, celebrate } = require('celebrate')
const  { loadSearchPatternController } = require('../controllers/search-pattern-controller')
const searchPatternRouter = Router()
const schemas = require('../utils/util-schema/joi-schema')



searchPatternRouter.get('/pattern',
celebrate({
    [Segments.QUERY]: schemas.patternSchema,
}),
expressCallback(loadSearchPatternController))




module.exports = searchPatternRouter