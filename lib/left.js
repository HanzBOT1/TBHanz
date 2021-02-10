const fs = require('fs-extra')

module.exports = left = async (hanz, event) => {
    //console.log(event.action)
    const left = JSON.parse(fs.readFileSync('./lib/database/left.json'))
    const isLeft = left.includes(event.chat)
    try {
        if (event.action == 'remove' && left) {
            const gChat = await hanz.getChatById(event.chat)
            const pChat = await hanz.getContact(event.who)
            const { contact, groupMetadata, name } = gChat
            const pepe = await hanz.getProfilePicFromServer(event.who)
            const capt = `       

 Nama : @${event.who.replace('@c.us', '')}


        ${name}
    ...

`
            if (pepe == '' || pepe == undefined) {
                await hanz.sendFileFromUrl(event.chat, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQcODjk7AcA4wb_9OLzoeAdpGwmkJqOYxEBA&usqp=CAU', 'profile.jpg')
            } else {
                await hanz.sendFileFromUrl(event.chat, pepe, 'profile.jpg',capt)
            }
        }
    } catch (err) {
        console.log(err)
    }
}
