const db = require('quick.db')
const { MessageEmbed } = require('discord.js')
const ms = require("parse-ms");
const Jwork = require('../../JSON/works.json');
const JworkR = Jwork[Math.floor(Math.random() * Jwork.length)];

module.exports = {
    config: {
        name: "work",
        aliases: ["wr"],
        category: "economy",
        description: "Work to Earn Money",
        usage: " ",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {

        let user = message.author;
        let author = await db.fetch(`work_${user.id}`)

        let timeout = 1800000;

        

        if (author !== null && timeout - (Date.now() - author) > 0) {
            let time = ms(timeout - (Date.now() - author));

            let timeEmbed = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`❌ You have already worked recently\n\nTry again in ${time.minutes}m ${time.seconds}s `);
            message.channel.send(timeEmbed)
        } else {
            let amount = Math.floor(Math.random() * 8000) + 100;
            let embed1 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ **${JworkR} ${amount}**`)
            message.channel.send(embed1)
            
           let extra = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ **You went to work place earlier and earned 1500 coins more... say thanks to your car...**`)
            

            let cars = await db.fetch(`car_${user.id}`)

            if (cars > 1) return message.channel.send(extra)
            db.add(`money_${user.id}`, 1500)             

            db.add(`works_${user.id}`, 1)
            db.add(`money_${user.id}`, amount)
            db.set(`work_${user.id}`, Date.now())
        };
    }
};
