const argumento = process.argv
const { loadSearchPatternServiceBath } = require('./src/app/services/search-pattern-batch-service')
let entryString = ''
for (let i = 2; i < argumento.length; i += 1) {
    const element = argumento[i];
    entryString = `${entryString} ${element}`
}
if(entryString === undefined){
    console.error("Favor informar o termo a ser procurado nos arquivos")
    process.exit(1)
}
loadSearchPatternServiceBath(`${entryString}`)