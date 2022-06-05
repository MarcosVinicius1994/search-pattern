module.exports = {
    async redFilesLine(fs, path, word) {
        let line
        try {
            let lines = fs.readFileSync(path).toString().split("\n")
            let searchLine = ''
            let searchLineInverted = ''
            let statusSearchLine = false
            for (let i = 0; i < lines.length; i++) {
                searchLine = lines[i].match(word)
                searchLineInverted =  lines[i].match(word.split(" ").reverse().join(" "))
                line = lines[i]
                if (!!searchLine || !!searchLineInverted) {
                        statusSearchLine = true
                }
            }
            return statusSearchLine
        } catch (error) {
            throw new Error(`Error ao realizar a leitura do arquivo: ${line}  para o termo: + ${word}: ${error.message}`)
        }
    }
}