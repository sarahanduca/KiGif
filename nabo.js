export default async function nabo(msg, keyword, command) {
  const urlHm =
    "https://cdn.discordapp.com/attachments/834142642995986492/834902925176078346/lixinhopensive.gif";
  const urlHi =
    "https://cdn.discordapp.com/attachments/834142642995986492/834898533480005642/lixinhoroi.gif";

  command == "hi" ? msg.channel.send(urlHi) : msg.channel.send(urlHm);
}
