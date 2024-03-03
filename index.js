const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token1);
const bot1 = new Eris(process.env.token2);

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot1.connect(); // Get the bot to connect to Discord
bot2.connect();
