const Discord = require("discord.js");
const db = require("quick.db");
let config = require("../utils/errors.js");

exports.run = async (client, message, args) => {

let isim = args.slice(0).join(" ");
if (!isim)

return message.channel.send(
 "**Axiom**\n\n ・**Lütfen isim belirtin.** \n **Örnek:** **a?isim-ayarla** `(İsim)` \n ・`**Tüm komutlara erişmek için -> a?yardım**  \n\n**Axiom**"
    );
db.set(`Asreaperİsim_${message.author.id}`, isim)
return message.channel.send(
    "**Axiom**\n**------------------------------------**\n**• Profil isminiz başarıyla ayarlandı.** \n**• Belirtilen İsim ->** `" +
    isim +
    "` \n`• a?yardım` **Yazarak tüm komutlara erişebilirsiniz.** \n **------------------------------------**\n**Axiom**"
    );

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Profil"
};

exports.help = {
  name: "isim-ayarla",
  description: "isim-ayarla",
  usage: "isim-ayarla",
  kategori: "Profil"
};
