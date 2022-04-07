class UnsupportedValue extends Error {
    constructor (contentType) {
        super(`The content ${contentType} is not supported`)
        this.name = 'UnsupportedValue'
        this.idError = 3
    }
}

module.exports = UnsupportedValue