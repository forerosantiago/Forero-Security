const Discord = require('discord.js')

module.exports = {
  name: 'guildMemberRemove',
  once: false,
  execute (member, client) {
    const channel = client.channels.cache.get(process.env.welcome_channel_id)
    if (!channel) return
    if (member.guild.id !== process.env.guild_id) return

    const color = '#FF4136'

    const embed = new Discord.MessageEmbed()
      .setDescription(`**${member.user.tag}** has left **${member.guild.name}**, now we are the **${member.guild.memberCount}** members :pensive:`)
      .setColor(color)

    channel.send(embed)
  }
}
