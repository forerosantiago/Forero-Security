const Canvas = require('canvas')
const randomColor = require('randomcolor')
const Discord = require('discord.js')

Canvas.registerFont('assets/fonts/NotoSans-Regular.ttf', { family: 'NotoSans-Regular' })
Canvas.registerFont('assets/fonts/NotoSans-Italic.ttf', { family: 'NotoSans-Italic' })
Canvas.registerFont('assets/fonts/NotoSans-Bold.ttf', { family: 'NotoSans-Bold' })

module.exports = {
  name: 'guildMemberAdd',
  once: false,
  async execute (member, client) {
    if (member.guild.id !== process.env.guild_id) return

    const channel = client.channels.cache.get(process.env.welcome_channel_id)
    if (!channel) return

    const canvas = Canvas.createCanvas(1080, 720)
    const ctx = canvas.getContext('2d')

    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }))
    ctx.drawImage(avatar, canvas.width / 2 - 150, 100, 300, 300)

    const color = randomColor()

    ctx.fillStyle = color
    ctx.font = '70px NotoSans-Regular'
    ctx.textAlign = 'center'
    ctx.fillText('Welcome', canvas.width / 2, 500)

    ctx.fillStyle = '#fff'
    ctx.font = '80px NotoSans-Bold'
    ctx.fillText(member.displayName, canvas.width / 2, 600)

    ctx.fillStyle = '#fff'
    ctx.font = '60px NotoSans-Italic'
    ctx.fillText('to Forero Club', canvas.width / 2, 700)

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png')

    const embed = new Discord.MessageEmbed()
      .setColor(color)
      .attachFiles([attachment])
      .setImage('attachment://welcome-image.png')

    channel.send(`Hey **${member}**, you are the **${getOrdinal(member.guild.memberCount)}** member :partying_face:`)
    channel.send(embed)
  }
}

const getOrdinal = function (n) {
  const s = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return n + (s[(v - 20) % 10] || s[v] || s[0])
}
