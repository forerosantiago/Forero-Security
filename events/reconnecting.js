const axios = require('axios')

module.exports = {
  name: 'reconnecting',
  once: false,
  execute (client) {
    axios.post(process.env.status_webhook, {
      username: 'Forero Security',
      embeds: [
        {
          title: ':yellow_circle: Reconnecting',
          color: 16768000,
          timestamp: new Date()
        }
      ]

    })
      .catch(function (error) {
        console.log(error)
      })
  }
}
