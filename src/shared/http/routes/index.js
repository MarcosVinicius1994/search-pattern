const { Router } = require('express')

const pjson = require('../../../../package.json')
const searchPatternRouter = require('../../../app/routes/search-pattern-router')
const routes = Router()

routes.get('/api/health', (req, res) => {
    return res.json({
        name: pjson.name,
        version: pjson.version,
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
        UserAgent: req.get('User-Agent'),
        url: req.url,
        host: req.hostName,
        baseUrl: req.baseUrl,
        method: req.method,
    })
})


routes.get('/', (req, res) => {
    return res.json({ message: 'Olá serviço de busca de padrões' })
})


routes.use('/v1/search', searchPatternRouter)

module.exports = routes
