import dotenv from "dotenv";
import gif from "./gif.js";

dotenv.config();
const commands = { gif };

export default async function gotMessage(command, keyword, msg) {
  command = command.substring(1);
  commands[command](msg, keyword);
}
