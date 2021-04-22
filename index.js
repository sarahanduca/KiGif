import Discord from "discord.js";
import dotenv from "dotenv";
import gotMessage from "./commands.js";

dotenv.config();

const client = new Discord.Client();

client.on("ready", () => {
  console.log("<3");
});
client.login(process.env.BOTTOKEN);

client.on("message", (msg) => {
  let keyword = msg.content.split(" ");
  let command = keyword.shift();
  if (command.charAt(0) === "!") {
    gotMessage(command, keyword, msg);
  }
});
