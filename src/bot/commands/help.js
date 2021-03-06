module.exports = {
    name: "help",
    cooldown: 3,
    description: 'Bot Orders',
    aliases: ["h"],
    run: async function(client, message, args, user) {
        try {
            const { MessageEmbed } = require('discord.js');
            var prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`);
            if (prefix == null) prefix = require('../../config/bot').prefix;
            let help = new MessageEmbed()
                .setColor('BLUE')
               
               
                .setDescription(`

**✨ Utils**
\`ping\` . \`invite\` . \`support\` . \`info\`
\`avatar\` . \`ship\`

**🔰 Admin**
\`prefix\` . \`embed\` . \`ban\` . \`unban\`
\`mute\` . \`unmute\` . \`lock\` . \`unlock\`
\`kick\` . \`slowmode\` . \`setnick\` . \`warn\`


**🎶 Music**
\`play\` . \`skip\` . \`nowplaying\` . \`loop\`
\`volume\` . \`lyrics\` . \`join\` . \`pause\` 
\`stop\` . \`filter\` .  \`leave\` . \`resume\`
\`radio\` . \`queue\`

**⚔️ Games**
\`Comming Sonn\`

**🔗 Links**
[Support Server](https://discord.gg/a9zgcYJdCY)
[Invite Me](https://discord.com/api/oauth2/authorize?client_id=897865860037890088&permissions=8&scope=bot)

`);


              
         
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
