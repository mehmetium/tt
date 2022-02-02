const Discord = require("discord.js");
const db = require("quick.db");
let config = require("../utils/errors.js");

exports.run = async (client, message, args) => {

let soyisim = args.slice(0).join(" ");
if (!soyisim)

return message.channel.send(
 "**Axiom**\n\n**Lütfen mesleğinizi belirtin.** \n・**Örnek:** **a?meslek-ayarla** `(Meslek)` \n・`**Tüm komutlara erişmek için -> a?yardım**\n\n**Axiom** "
    );
db.set(`AsreaperSoyisim_${message.author.id}`, soyisim)
return message.channel.send(
    " **Axiom** \n**------------------------------------**\n**• Meslek başarıyla ayarlandı.** \n**• Belirtilen Meslek ->** `" +
    soyisim +
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
  name: "meslek-ayarla",
  description: "meslek-ayarla",
  usage: "meslek-ayarla",
  kategori: "Profil"
};
