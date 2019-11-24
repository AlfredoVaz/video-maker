const robots = {
    text: require('./robots/text.js'),
    input: require('./robots/input.js'),
    state: require('./robots/state.js'),
    image: require('./robots/image')
}

module.exports = async function start(lang, term){
    robots.input(lang, term)
    await robots.text();
    await robots.image();

    return robots.state.load()
}