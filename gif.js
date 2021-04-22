import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

export default async function (msg, token, command) {
  token = token.join(" ");
  console.log(token);
  let url = `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIFTOKEN}&q=${token}&rating=r`;
  let response = await fetch(url);
  let json = await response.json();
  if (json.data.length > 0) {
    let index = Math.floor(Math.random() * json.pagination.count);
    msg.channel.send(json.data[index].url);
  } else {
    msg.reply("não achei nada  :(");
  }
}
