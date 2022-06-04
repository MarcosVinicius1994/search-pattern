const messages = {
    'string.baseq3': 'Param id needs to be a string',
    'any.required': 'Define any required',
    'string.empty': 'Define any string',
    'string.pattern': 'Define any string inside pattern'
}

module.exports = (types) =>{
    const joiMessages = {}
    for (let i = 0; i < types.length; i++){
        joiMessages[types[i]] = messages[types[i]] 
    }
    return joiMessages
}