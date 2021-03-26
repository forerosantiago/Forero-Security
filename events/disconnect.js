const axios = require('axios')

module.exports = {
  name: 'disconnect',
  once: true,
  execute (client) {
    axios.post(process.env.status_webhook, {
      username: 'Forero Security',
      embeds: [
        {
          title: ':red_circle: Disconnected',
          color: 16728374,
          timestamp: new Date()
        }
      ]

    })
      .catch(function (error) {
        console.log(error)
      })
  }
}
