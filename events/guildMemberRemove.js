const Discord = require('discord.js')

module.exports = {
  name: 'guildMemberAdd',
  once: false,
  execute (member, client) {
    const channel = client.channels.cache.get('784853103932997672')
    if (!channel) return
    if (member.guild.id !== '782081352396832778') return

    const color = '#FF4136'

    const embed = new Discord.MessageEmbed()
      .setDescription(`**${member.user.tag}** has left **${member.guild.name}**, now we are the **${member.guild.memberCount}** members :pensive:`)
      .setColor(color)

    channel.send(embed)
  }
}
