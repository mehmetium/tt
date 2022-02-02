const Discord = require ("discord.js");
let config = require("../utils/errors.js");

exports.run = (client, message) => {

const AsreaperEMBED = new Discord.MessageEmbed()

.setColor("GREEN")
.setTitle(" **AXIOM RP PROFİL**")
.setDescription(`

** Profil Sistemi | Komut Listesi**
**-------------------------------------------------**
**• a?rozet-ayarla :**   Profil rozetini belirtir.  
**• a?cinsiyet-ayarla :** Profil cinsiyet belirtir. 
**• a?isim-ayarla :** Profil ismini belirtir.       
**• a?meslek-ayarla :**  Profil mesleğini belirtir. 
**• a?yaş-ayarla :** Profil yaşı belirtir.          
**• a?profil :**  Kişinin profilini gösterir.          
**-------------------------------------------------**
`)

.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(AsreaperEMBED)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'profilsistemi', 
    description: 'yardım',
    usage: 'yardım'
};