const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: "ping",
        description: "Displays User And Bot Latency",
        usage: " ",
        noalias: "No Aliases",
        category: "info",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {

        message.channel.send("**Pinging...**").then(m => {
            let ping = m.createdTimestamp - message.createdTimestamp
            const embed = new MessageEmbed()
                .setAuthor("PONG!")
                .setColor("GREEN")
                .setDescription(`**API Latency** : ${Math.round(bot.ws.ping)}ms\n\n**Client Latency** : ${ping}ms`)
                .setTimestamp()
            message.channel.send(embed)
            m.delete()
        })
    }
};