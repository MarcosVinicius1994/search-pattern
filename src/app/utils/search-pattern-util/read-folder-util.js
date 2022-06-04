// const { printFile } = require('./print-info-util')
// const { parseLogs } = require('./parse-lines-util')

module.exports = {
    async redFilesLine(fs, path, word) {
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
    }
}