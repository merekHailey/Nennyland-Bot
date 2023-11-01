const levels = {
    silent: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    message: 5,
    trace: 6
}

const colors = {
    silent: 'white',
    error: 'red',
    warn: 'yellow',
    info: 'blue',
    debug: 'grey',
    message: 'green',
    trace: 'white'
}

const winston = require('winston')
const {logLevel} = require('./config')
module.exports = winston.createLogger({
    levels,
    level: logLevel,
    format: winston.format.combine(
        winston.format.errors(),
        winston.format.timestamp(),
        winston.format.cli({levels, colors})
    ),
    transports: new winston.transports.Console(),
});