class DataNotProvided extends Error {
    constructor () {
        super('Data was not provided to perform an update')
        this.name = 'DataNotProvided'
        this.idError = 2
    }
}

module.exports = DataNotProvided