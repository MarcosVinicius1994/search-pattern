const app = require('./app') 
const port = process.env.APP_PORT_SEACH_FILES || 3000

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})