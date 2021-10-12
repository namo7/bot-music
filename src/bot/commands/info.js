module.exports = {
    name: "info",
    cooldown: 3,
    description: 'Bot Orders',
    run: async function(client, message, args, user) {
        try {
            const { MessageEmbed } = require('discord.js');
            var prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`);
            if (prefix == null) prefix = require('../../config/bot').prefix;
            let help = new MessageEmbed()
                .setColor('BLUE')
             
               


    .addField("`my name`", `**YOYA#5183**`, true)
    .addField("`My ID`",  `**893739956747501599**`, true)
    .addField( "`My Prefix` ",`**+**`,true)
    .addField("`Node.js Version`",  `**12**`, true)
    .addField("`Language Program`",  `**Java Script**`, true)
    .addField("`Discord.js `",  `**12.5.1**`, true)
    .addField( "`developer bot` ",`<@759092654411350017>`,true)          
         
            setTimeout(() => {
                message.channel.send({
                    embed: help
                })
            }, 500);
        } catch (err) {
            console.log(err)
        }
    }
};
