const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Moderasyon Yardım Menüsü`)
 .setDescription(`
 **${prefix}mod-log #kanal** \n-> Mod-log ayarlar.
 **${prefix}mod-log sıfırla** \n-> Mod-log sıfırlar.
 **${prefix}bansay** \n-> Sunucuda kaç banlanan üye olduğunu gösterir.
 **${prefix}ban @kullanıcı** \n-> Etiketlediğiniz kullanıcıyı banlar.
 **${prefix}küfürengel** \n-> Küfür engel açar/kapatır.
 **${prefix}küfürlog #kanal** \n-> Küfür-log ayarlar.
 **${prefix}reklamengel** \n-> Reklam engel açar/kapatır.
 **${prefix}reklamlog #kanal** \n-> Reklam-log ayarlar.
 **${prefix}sa-as aç** \n-> SA-AS sistemini açar.
 **${prefix}sa-as kapat** \n-> SA-AS sistemini kapatır.
 **${prefix}sil** \n-> Yazdığınız miktar kadar mesaj siler.
 **${prefix}say** \n-> Sunucu bilgilerini gösterir.
 **${prefix}oylama** \n-> Oylama yapar.
 **${prefix}otorol-ayarla @rol #kanal** \n-> Otorol ayarlar.
**${prefix}otorol-sıfırla** \n-> Otorol sıfırlar.
 **${prefix}otorol-mesaj-ayarla** \n-> Otorol mesajı ayarlar.
 **${prefix}otorol-mesaj-sıfırla** \n-> Otorol mesajı sıfırlar.
`)
 .setTimestamp()
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mod'],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'moderasyon',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};