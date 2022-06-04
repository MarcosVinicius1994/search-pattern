module.exports = {
    async redFilesLine(fs, path, word) {
        try {
            let lines = fs.readFileSync(path).toString().split("\n")
            let searchLine = ''
            let statusSearchLine = false
            for (let i = 0; i < lines.length; i++) {
                searchLine = lines[i].match(word)
                if (!!searchLine) {
                    if (searchLine[0] === word) {
                        statusSearchLine = true
                    }
                }
            }
            return statusSearchLine
        } catch (error) {
            throw new Error(`Error ao realizar a leitura do arquivo: + ${lines} +  para o termo: + ${word} `)
        }
    }
}