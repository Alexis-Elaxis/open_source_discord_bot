const client = new Discord.client();
const config = require("./includes/config.json");

client.on('ready', guild => {
  client.user.setActivity(config.prefix + `help for help`);
  console.log(`I'm ready bro !`);
});

client.login(config.token);
