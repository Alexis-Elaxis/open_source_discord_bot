const client = new Discord.client();
const config = require("./includes/config.json");

client.on('ready', guild => {
  client.user.setActivity(config.prefix + `test for test`);
  console.log(`I'm ready !`);
});

client.on("message" () => {
  if(message.channel.type === "dm") return;
  if(message.guild || message.author.bot) return;
  
  let args = message.content.split(" ");
  let command = args.shift().toLowerCase();
  let message.content = message.content.substr(config.prefix.length);
  
  if(command == "test") {
   message.channel.send("It's okey !").catch(err => {
    console.log(err)
   }); 
  }
})

client.login(config.token);
