const levels = {
    silent: 0,
    error: 1,
    warn: 2,
    info: 3,
    http: 4,
    debug: 5,
    trace: 6
}

const colors = {
    silent: 'white',
    error: 'red',
    warn: 'green',
    info: 'blue',
    http: 'yellow',
    debug: 'grey',
    trace: 'white'
}

const winston = require('winston')
const {InformantLevel} = require('./config')
module.exports = winston.createLogger({
    levels,
    level: InformantLevel,
    format: winston.format.combine(
        winston.format.errors(),
        winston.format.timestamp(),
        winston.format.cli({levels, colors})
    ),
    transports: new winston.transports.Console(),
});