const path = require('path')

function projectPath(...bits){
    return path.join(__dirname, '..', ...bits)
}


module.exports = { 
    httpPort: 8000,
    InformantLevel: 'debug',
    sessionSecret: "It's a secret to everyone",
    dbhost: "127.0.0.1:27017",
    dbAuthName:"Affinity",
    dbAuthMech:"DEFAULT",

    clientSchema: "http://",
    clientHost: "localhost",
    clientPort: 3000
}