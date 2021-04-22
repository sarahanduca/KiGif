import dotenv from "dotenv";
import gif from "./gif.js";

dotenv.config();
const commands = { gif };

export default async function gotMessage(msg) {
  let token = msg.content.split(" ");
  let command = token.shift();
  if (command.charAt(0) === "!") {
    command = command.substring(1);
    commands[command](msg, token);
  } else {
    console.log("nop");
  }
}
