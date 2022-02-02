const Discord = require("discord.js");
const db = require("quick.db");
let config = require("../utils/errors.js");

exports.run = async (client, message, args) => {

  let yas = args.slice(0).join(" ");
  if (!yas)

return message.channel.send(
 "**Axiom* \n\n ・**Lütfen yaş belirtin.** \n :・**Örnek:** **a?yaş-ayarla** `(Yaş)` \n・`**Tüm komutlara erişmek için -> a?yardım** \n\n**Axiom**"
    );
db.set(`AsreaperYas_${message.author.id}`, yas)
return message.channel.send(
    " **Axiom** \n**------------------------------------**\n**• Yaş başarıyla ayarlandı. ** \n**• Belirtilen Yaş ->** " +
      yas +
      "` \n`• a?yardım` **Yazarak tüm komutlara erişebilirsiniz.** \n **------------------------------------**\n**Axiom**"
      );
;
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "yaş-ayarla",
  description: "",
  usage: "",
  kategori: "Profil"
};
