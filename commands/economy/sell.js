const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const { PREFIX } = require('../../config')

module.exports = {
    config: {
        name: "sell",
        noalias: [""],
        category: "economy",
        description: "Sell to somebody",
        usage: "[mention | ID] <amount>",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {
        let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        let user = message.author;

        if (args.join(' ').toLocaleLowerCase() == 'sword') {
            let embed1 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`❌ You don't have sword to sell`);

            let nikees = await db.fetch(`sword_${user.id}`)

            if (nikees < 1) return message.channel.send(embed1)

            db.fetch(`sword_${user.id}`)
            db.subtract(`sword_${user.id}`, 1)

            let embed2 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ Sold sword For 10000 Coins`);

            db.add(`money_${user.id}`, 10000)
            message.channel.send(embed2)
        } else if (args.join(' ').toLocaleLowerCase() == 'car') {
            let embed3 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`❌ You don't have a Car to sell`);

            let cars = await db.fetch(`car_${user.id}`)

            if (cars < 1) return message.channel.send(embed3)

            db.fetch(`car_${user.id}`)
            db.subtract(`car_${user.id}`, 1)

            let embed4= new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ Sold a Car For 50000 Coins`);

            db.add(`money_${user.id}`, 50000)
            message.channel.send(embed4)
        } else if (args.join(' ').toLocaleLowerCase() == 'mansion') {
            let sembed2 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`❌ You don't have a Mansion to sell`);

            let houses = await db.fetch(`house_${user.id}`)

            if (houses < 1) return message.channel.send(sembed2)

            db.fetch(`house_${user.id}`)
            db.subtract(`house_${user.id}`, 1)

            let sembed3 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ Sold a Mansion For 90000 Coins`);

            db.add(`money_${user.id}`, 90000)
            message.channel.send(sembed3)
        } else {
            if (message.content.toLowerCase() === `${prefix}sell`) {
                let embed9 = new MessageEmbed()
                    .setColor("GREEN")
                    .setDescription(`❌ Enter an item to sell. Type ${prefix}store to see list of items`)
                return message.channel.send(embed9)
            } else {
              return message.channel.send("**Not A Valid Item!**")
            }
        }
    }
}