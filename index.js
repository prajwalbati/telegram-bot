const telegrambot = require("node-telegram-bot-api");
require("dotenv").config();

const token = process.env.TELEGRAM_BOT;
const bot = new telegrambot(token, {polling:true});

bot.on("message",(msg) => {
    console.log(msg);
    if(msg.text === "hi") {
        bot.sendMessage(msg.chat.id,`hello there, ${msg.chat.first_name}`);
    } else if(msg.text === "dice") {
        bot.sendDice(msg.chat.id);
    } else if(msg.text === "poll") {
        const options = ["Python", "Javscript", "C++"];
        bot.sendPoll(msg.chat.id,"what language do you prefer? ",options);
    }
});