const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const { PREFIX } = require('../../config');

module.exports = {
    config: {
        name: "buy",
        noalias: [""],
        category: "economy",
        description: "buys items",
        usage: "[item]",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {
        let user = message.author;

        let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
      
        let author = db.fetch(`money_${user.id}`)

        let Embed = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`❌ You need 20000 coins to purchase Bronze VIP`);


        if (args.join(' ').toLocaleLowerCase() == 'bronze') {
            if (author < 20000) return message.channel.send(Embed)

            await db.fetch(`bronze_${user.id}`);
            db.set(`bronze_${user.id}`, true)

            let Embed2 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ Purchased Bronze VIP For 20000 Coins`);

            db.subtract(`money_${user.id}`, 20000)
            message.channel.send(Embed2)
        } else if (args.join(' ').toLocaleLowerCase() == 'sword') {
            let Embed3 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`❌ You need 60000 coins to purchase some Nikes`);

            if (author < 60000) return message.channel.send(Embed3)

            await db.fetch(`nikes_${user.id}`)
            db.add(`nikes_${user.id}`, 1)

            let Embed4 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ Purchased sword For 60000 Coins`);

            db.subtract(`money_${user.id}`, 60000)
            message.channel.send(Embed4)
        } else if (args.join(' ').toLocaleLowerCase() == 'car') {
            let Embed5 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`❌ You need 80000 coins to purchase a new car`);

            if (author < 80000) return message.channel.send(Embed5)

            await db.fetch(`car_${user.id}`)
            db.add(`car_${user.id}`, 1)

            let Embed6 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ Purchased A New Car For 80000 Coins`);

            db.subtract(`money_${message.guild.id}_${user.id}`, 80000)
            message.channel.send(Embed6)
        } else if (args.join(' ').toLocaleLowerCase() == 'mansion') {
            let Embed7 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`❌ You need 120000 coins to purchase a Mansion`);

            if (author < 120000) return message.channel.send(Embed7)

            await db.fetch(`house_${user.id}`)
            db.add(`house_${user.id}`, 1)

            let Embed8 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ Purchased A Mansion For 120000 Coins`);

            db.subtract(`money_${user.id}`, 120000)
            message.channel.send(Embed8)
        } else {
            if (message.content.toLowerCase() === `${prefix}buy`) {
                let embed9 = new MessageEmbed()
                    .setColor("GREEN")
                    .setDescription(`❌ Enter An Item To Buy!\nType ${prefix}store To See List Of Items!`)
                return message.channel.send(embed9)
            }
        }
    }
}