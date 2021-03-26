const axios = require('axios');

module.exports = {
  name: 'resume',
  once: false,
  execute (client) {   
    axios.post(process.env.status_webhook, {
        username: 'Forero Security',
        embeds: [
            {
              title: ":orange_circle: Resumed",
              color: 4036976,
              timestamp: new Date()
            }
              ]
        
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
