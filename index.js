const Discord = require("discord.js");

const TOKEN = "NDU3NDczMjQ1MTA5ODEzMjQ4.DgZy6Q.rs0h9GFX0IVpBZMRKVGt15dqqHw";
const PREFIX = "wiki"

const doclink = "https://none"

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("WikiBot is now up!")
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case "ping":
          message.channel.sendMessage("Pong...");
          console.log("Pinged")
          break;
    }
});

bot.login(TOKEN);
