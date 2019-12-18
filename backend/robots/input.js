const state = require('./state.js')

function robot(lang, input) {
    const content = {
        maximumSentences: 7
    }

    content.articleName = input
    content.prefix = 'Who is'
    content.lang = lang
    state.save(content)
}

module.exports = robot