module.exports = client => {
    const chatChannel = "1036344931721154680";
    const welcomeChannel = "1036344394414039141";

    client.on("guildMemberAdd", member => {
        member.guild.channels.cache.get(chatChannel).send({
            content: `<@${member.user.id}> (${member.user.username}#${member.user.discriminator})`,
            embeds: [
                {
                    color: "ff73fa",
                    description: `<@${member.user.id}> (${member.user.username}#${member.user.discriminator}) has joined ${member.guild.name}. Give them a warm welcome! <a:t_love:904146480305152031>`
                }
            ],
            components: [{
                type: 1,
                components: [
                    {
                        style: 5,
                        label: `Read The Rules`,
                        url: "https://discord.com/channels/749767042785083451/853327138375598100",
                        type: 2,
                        disabled: false,
                    }
                ]
            }],
        });

        member.guild.channels.cache.get(welcomeChannel).send({
            content: `<@${member.user.id}> (${member.user.username}#${member.user.discriminator})`,
            embeds: [
                {
                    color: "ff73fa",
                    description: `<@${member.user.id}> (${member.user.username}#${member.user.discriminator}) has joined ${member.guild.name}. Thanks for joining and enjoy your stay! If you have any questions, you can open a ticket! <a:t_love:904146480305152031>`
                }
            ],
            components: [{
                type: 1,
                components: [
                    {
                        style: 5,
                        label: `Read The Rules`,
                        url: "https://discord.com/channels/749767042785083451/853327138375598100",
                        type: 2,
                        disabled: false,
                    },
                    {
                        style: 5,
                        label: `Open A Ticket`,
                        url: "https://discord.com/channels/749767042785083451/1053148663238631454",
                        type: 2,
                        disabled: false,
                    }
                ]
            }],
        });
    });

    client.on("guildMemberRemove", member => {
        console.log(member);
        member.guild.channels.cache.get(chatChannel).send({
            content: `<@${member.user.id}> (${member.user.username}#${member.user.discriminator})`,
            embeds: [
                {
                    color: "ff0000",
                    description: `<@${member.user.id}> (${member.user.username}#${member.user.discriminator}) has left ${member.guild.name}. Let's just hope they enjoyed their stay! <a:t_love:904146480305152031>`
                }
            ],
        });

        member.guild.channels.cache.get(welcomeChannel).send({
            content: `<@${member.user.id}> (${member.user.username}#${member.user.discriminator})`,
            embeds: [
                {
                    color: "ff0000",
                    description: `<@${member.user.id}> (${member.user.username}#${member.user.discriminator}) has left ${member.guild.name}. We'll miss you! <a:t_love:904146480305152031>`
                }
            ],
        });
    });
};