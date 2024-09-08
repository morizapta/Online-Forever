const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);
const bot2 = new Eris(process.env.token2);
const bot3 = new Eris(process.env.token3);
const bot4 = new Eris(process.env.token4);
const bot5 = new Eris(process.env.token5);

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.connect(); // Get the bot to connect to Discord
bot2.connect();
bot3.connect();
bot4.connect();
bot5.connect();
