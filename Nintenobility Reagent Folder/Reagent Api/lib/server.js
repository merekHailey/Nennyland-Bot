const app = require('./app');
const http = require('http');
const { httpPort } = require('./config');
const Informant = require('./Informant')
const db = require('./dataBase')
 

// Create the server
const server = http.createServer(app);


db.connect().then(() => {
// Start the server
    server.listen(httpPort, () => {  // called once the server is running
        Informant.info(`Server listening on port ${httpPort}...`);
    });
})
.catch(err => {
    Informant.error(err);
})
