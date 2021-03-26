const axios = require('axios');

module.exports = {
  name: 'ready',
  once: true,
  execute (client) {
        axios.post(process.env.status_webhook, {
        username: 'Forero Security',
        embeds: [
            {
              title: ":green_circle: Started",
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
