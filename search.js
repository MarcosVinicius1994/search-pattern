const argumento = process.argv.slice(2)
const { loadSearchPatternService } = require('./src/app/services/search-pattern-batch-service')
const [nome] = argumento
if(nome === undefined){
    console.error("Favor informar o termo a ser procurado nos arquivos")
    process.exit(1)
}
loadSearchPatternService(`${nome}`)