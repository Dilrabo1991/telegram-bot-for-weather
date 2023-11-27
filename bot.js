const { default: axios } = require('axios');
const { Telegraf } = require('telegraf')


const bot = new Telegraf('6925431057:AAE5oKepLGuV6oPqGckHfzQ4lTxZg5X5-Ec');
bot.start((ctx) => ctx.reply('Welcome'))
bot.on("message", async (ctx) => {
    if (ctx.message.location) {
        console.log(ctx.message.latitude);
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${ctx.message.location.latitude}&lon=${ctx.message.location.longitude}&appid=96abe7840b2525a27f3263c5ec15f993`;
        const response = await axios.get(url);
        console.log(response);
        ctx.reply(`${response.data.name} : ${response.data.main.temp} C`);


    }
    console.log(ctx.message.longitude);
})
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))