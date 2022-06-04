const fs = require('fs')
const fg = require('fast-glob')
const { redFilesLine } = require('./read-folder-util')
const { printFile } = require('./print-info-util')
const data = 'src/data/*.txt'


module.exports = {
    async readFile(word) {
        try {
            const filesMatch = []
            const stream = fg.stream(data, { dot: true })
            let statusSearchFiles
            for await (const entry of stream) {
                if (entry) {
                    statusSearchFiles = await redFilesLine(fs, entry, word)
                    if (statusSearchFiles) {
                        filesMatch.push(entry)
                    }
                }
            }
            await printFile(filesMatch, word)
        } catch (error) {
            throw new Error('Error ao realizar a leitura do arquivo para o termo: ' + word)

        }

    },
}


