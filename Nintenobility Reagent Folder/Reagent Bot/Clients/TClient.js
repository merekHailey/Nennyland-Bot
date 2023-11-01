const tmi = require('tmi.js');
require('dotenv').config();

const Tclient = new tmi.Client({
    connection: {
      secure: true,
      reconnect: true
    },
      identity: {
          username: process.env.TWITCH_BOT_USER,
          password: process.env.TWITCH_BOT_OAUTH
      },
    channels: [ 'nintenoble' ]
  });

  module.exports = Tclient