const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: 'botinfo',
        category: "info",
        aliases: ["binfo"],
        description: "shows stats of bot",
        usage: "[botinfo]",
        accessableby: 'everyone'
    },
    run: async (bot, message, args) => {
        let inline = true
    let bicon = bot.user.displayAvatarURL;
   
    let uptimxd = bot.uptime 
    

    let botembed = new MessageEmbed()
    .setColor("#00ff00")
    .setThumbnail(`https://images-ext-2.discordapp.net/external/wqfdUCJIEu1iF2oOt5_ulTw63lU2UnC58GZIhWThfno/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/882958284435390494/8edb1e278495b73388137404d087e2ea.png?width=427&height=427`)
    .addField("**Bot Name**", `**${bot.user.username}**`, inline)
    
    .addField("Created On", bot.user.createdAt)
    .addField("**Cpu**", `**${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}** / 500 MB`, inline)
    .addField("🛡 **Servers**", `${bot.guilds.cache.size}`, inline)
    
    
    .addField(":books: **Bot Library**", "Discord.js v.12.5.3", inline)
    .addField(":bookmark_tabs: **Node**", "`12.22.1`", inline)
    .addField(":computer: **Platform**", "`Linux`", inline)
    .addField(":bookmark:  **Arch**", "x64", inline)
    .addField(":man_technologist: **Developer**", "THUNDER〆NAVDEEP#4347 ", inline )
    
    .setFooter(`Information about: ${bot.user.username}.`)
    .setTimestamp()
    
    message.channel.send(botembed);
    }
}