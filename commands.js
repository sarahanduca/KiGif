import dotenv from "dotenv";
import gif from "./gif.js";
import { hi, hm } from "./nabo.js";

dotenv.config();
const commands = { gif, hi, hm };

export default async function gotMessage(command, keyword, msg) {
  command = command.substring(1);
  try {
    commands[command](msg, keyword, command);
  } catch {
    console.error("Not a command");
  }
}
