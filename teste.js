const argumento = process.argv
let entryString = ''
for (let i = 2; i < argumento.length; i += 1) {
    const element = argumento[i];
    entryString = `${entryString} ${element}`
}
console.log(entryString)

// const [nome] = argumento
// if(nome === undefined){
//     console.error("Favor informar o termo a ser procurado nos arquivos")
//     process.exit(1)
// }
// console.log(`${nome}`)