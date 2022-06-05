const {Joi} = require('celebrate')


const patternSchema = Joi.object({
    word: Joi.string()
    .required()
    .messages({
        'string.baseq3': 'Param id needs to be a string',
        'any.required': 'Define any required',
        'string.empty': 'Define any string',
        'string.pattern': 'Define any string inside pattern'
    }),
})

module.exports = { patternSchema }
