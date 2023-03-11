const { initializeApp } = require("firebase/app");
const { getDatabase, get, set, ref } = require("firebase/database");
const firebaseConfig = {
    apiKey: "AIzaSyB-BB__LKBuF2Zir1xwfW1iYA4s-Xi_ckw",
    authDomain: "ksp-discord-bot.firebaseapp.com",
    projectId: "ksp-discord-bot",
    storageBucket: "ksp-discord-bot.appspot.com",
    messagingSenderId: "1007413065780",
    appId: "1:1007413065780:web:64eb5fdc48647ecc2ef261"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
module.exports = (client) => {
    client.on("messageCreate", (msg) => {
        get(ref(db, "/counting")).then(async (counting) => {
            if (!msg.author.bot && msg.channel.id === `${counting.val().channel}`) {
                const webhooks = await msg.channel.fetchWebhooks();
                const webhook = webhooks.find(wh => wh.channelId == msg.channel.id);

                if (!webhook) {
                    await msg.channel.createWebhook({
                        name: "Counting Wehbook",
                        avatar: "https://i.imgur.com/TAOr7Qx.png",
                    });
                }
                // message sent in counting channel...
                if (!isNaN(msg.content)) {
                    var saidNumber = parseInt(msg.content);
                    // if (counting.val().previousCounter == msg.author.id) {
                    //     msg.reply("Please allow someone else to count.").then((statusMsg) => {
                    //         setTimeout(() => {
                    //             statusMsg.delete();
                    //         }, 5000);
                    //     });
                    //     msg.react("<:ksp_cross:1080663478265720922>");
                    //     setTimeout(() => {
                    //         msg.delete();
                    //     }, 5000);
                    //     return false;
                    // }
                    if (saidNumber == parseInt(counting.val().count) + 1) {
                        set(ref(db, "/counting/previousCounter"), msg.author.id);
                        set(ref(db, "/counting/count"), counting.val().count + 1);
                        msg.react("<:ksp_check:1080663475321327737>");

                        await webhook.send({
                            content: `<:ksp_check:1080663475321327737> ${saidNumber.toString()}\n:bulb: *The next number is ${parseInt(counting.val().count) + 1}.*`,
                            username: `Counted By: ${msg.author.username}#${msg.author.discriminator}`,
                        });
                        msg.delete();
                    } else {
                        msg.react("<:ksp_cross:1080663478265720922>");
                        await webhook.send({
                            content: `<:ksp_cross:1080663478265720922> ${saidNumber.toString()}\n:bulb: *The next number is ${parseInt(counting.val().count) + 1}.*`,
                            username: `Incorrectly Counted By: ${msg.author.username}#${msg.author.discriminator}`,
                        });
                        msg.delete();
                    }
                } else {
                    await webhook.send({
                        content: `:notepad_spiral: ${msg.content}\n:bulb: *Deleting in less than 10 seconds.*`,
                        username: `Note By: ${msg.author.username}#${msg.author.discriminator}`,
                    }).then((webhookMsg) => {
                        setTimeout(() => {
                            webhookMsg.delete();
                        }, 10000);
                    });
                    msg.delete();
                }
            }
        });
    });
};