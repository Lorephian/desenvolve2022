const bodyParser = require('body-parser')
const people = require('./routePeople')
const levels = require('./routeLevels')
const classes = require('./routeClasses')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(people, levels, classes)
    
}