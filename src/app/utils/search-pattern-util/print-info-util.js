module.exports = {
    async printFile(filesMatch, word) {
        try {
            if (filesMatch.length > 0) {
                console.log('Foram encontradas ' + filesMatch.length + ' ocorrências pelo termo ' + '"' + word + '"')
                console.log('Os arquivos que possuem  ' + '"' + word + '"' + ' são:')
                for await (let file of filesMatch){
                    // filesMatch.forEach(file => console.log(file))
                    console.log(file)
                }
            } else {
                console.log('Não foram encontradas ocorrências pelo termo: ' + '"' + word + '"')
            }
        } catch(error) {
            throw new Error('Error ao realizar a disposição das informações dos arquivos para o termo: ' +word )
    }
} 
}