const fs = require('fs-extra')

module.exports = welcome = async (hanz, event) => {
    //console.log(event.action)
    const welkom = JSON.parse(fs.readFileSync('./lib/database/welcome.json'))
    const isWelkom = welkom.includes(event.chat)
    try {
        if (event.action == 'add' && isWelkom) {
            const gChat = await hanz.getChatById(event.chat)
            const pChat = await hanz.getContact(event.who)
            const { contact, groupMetadata, name } = gChat
            const pepe = await hanz.getProfilePicFromServer(event.who)
            const capt = `───「  𝗪𝗘𝗟𝗖𝗢𝗠𝗘 」───
├≽ Nama : @${event.who.replace('@c.us', '')} 👋
├≽ Admin : 𝘍𝘢𝘭𝘴𝘦
┗──────────╯

├≽ In GROUP : ${name}


「  𝘔𝘦𝘮𝘣𝘦𝘳 𝘉𝘢𝘳𝘶 𝘐𝘕𝘛𝘙𝘖 𝘗𝘈𝘒𝘈𝘐 𝘍𝘖𝘛𝘖 」
┏──────────╮
├≽ Nama :
├≽ Kelas :
├≽ Umur :
├≽ Status :
├≽ Askot :
├≽ Husbu/waifu :
├≽ AnimeFavorit :
┗──────────╯

𝙒𝙚𝙡𝙘𝙤𝙢𝙚 𝙩𝙤 𝙟𝙤𝙞𝙣 𝙖𝙣𝙙 𝙝𝙤𝙥𝙚 𝙮𝙤𝙪 𝙛𝙚𝙚𝙡 𝙖𝙩 𝙃𝙊𝙈𝙀シ︎

*✧ ⃟ ⃟ ⃟━━─♡๑୨⊰᯽⊱୧๑♡─━ ⃟ ⃟ ⃟ ✧*

───「  *𝗛𝗔𝗡𝗭 𝗕𝗢𝗧シ︎* 」───`
            if (pepe == '' || pepe == undefined) {
                await hanz.sendFileFromUrl(event.chat, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQcODjk7AcA4wb_9OLzoeAdpGwmkJqOYxEBA&usqp=CAU', 'profile.jpg')
            } else {
                await hanz.sendFileFromUrl(event.chat, pepe,  'profile.jpg',capt)
            }

        }
    } catch (err) {
        console.log(err)
    }
}
