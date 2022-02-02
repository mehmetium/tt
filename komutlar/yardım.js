const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
exports.run = (client, message, args, member) => {
const yardım = new Discord.MessageEmbed()
  .setAuthor(`Axiom Yardım Menüsü`, client.user.avatarURL())
  .setColor("rgb(248,5,226)")
  .setThumbnail(client.user.avatarURL())
  .setDescription("Bu Bot Mehmet Duran Tarafından Paylaşılmıştır!")
  .addField(" • Kategoriler:", `> • a?kullanıcı: **Kullanıcı yardım menüsünü gösterir.**\n > • a?moderasyon: **Moderasyon yardım menüsünü gösterir.**\n > • a?kayıtsistemi: ** Kayıt sistemi yardım menüsünü gösterir.**\n > • a?korumasistemi** Koruma sistemi yardım menüsünü gösterir.**\n > • a?logosistemi: ** Logo sistemi yardım menüsünü gösterir.**\n > • a?çekilişsistemi: ** Çekiliş sistemi yardım menüsünü gösterir.**\n > • a?özelodasistemi: ** Özel Oda sistemi yardım menüsünü gösterir.** \n > • a?profilsistemi: **Profil sistemi yardım menüsünü gösterir.** \n > • a?ekonomisistemi: ** Ekonomi sistemi yardım menüsünü gösterir.**  \n > • a?radyo: ** Radyo sistemi yardım menüsünü gösterir.**`)
  .addField("https://discord.gg/Cqk5MUqrqE" ,"Bu Bot Arkhe Sunucusu İçin Paylaşılmıştır!")
  .addField(" • Linkler:", "• [Mehmet Duran](https://discord.gg/Cqk5MUqrqE)")
  .setImage("")
.setFooter("Mehmet Duran", message.author.avatarURL())
.setTimestamp()
  message.channel.send(yardım)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["y", "help", "h"],
    permLevel: 0
}

exports.help = {
    name: "yardım",
    description: "",
    usage: ""
}